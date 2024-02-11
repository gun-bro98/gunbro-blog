// app/posts/[slug]/page.tsx
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import mdxComponents from "@/app/components/MdxComponents";
import { notFound } from "next/navigation";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({
    slug: post._raw.flattenedPath.split("/").slice(1),
  }));

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] };
}) => {
  const post = allPosts.find((post) => {
    return (
      post._raw.flattenedPath.split("/").slice(1).join("/") ===
      params.slug.join("/")
    );
  });
  if (!post) notFound();
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string[] } }) => {
  const post = allPosts.find((post) => {
    return (
      post._raw.flattenedPath.split("/").slice(1).join("/") ===
      params.slug.join("/")
    );
  });

  if (!post) notFound();
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <section className="pt-8 w-full">
      <h2 className="text-normal text-sm font-bold">
        {params.slug.slice(0, -1).join(" - ")}
      </h2>
      <div className="border-t pt-5 w-full mt-5 border-t-[#00000050]" />
      <article className="mx-auto max-w-5xl py-8 prose">
        <div className="mb-8 text-center">
          <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <h1 className="text-3xl font-bold">{post.title}</h1>
        </div>
        <MDXContent components={mdxComponents} />
      </article>
    </section>
  );
};

export default PostLayout;
