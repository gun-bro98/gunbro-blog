// app/page.tsx
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import mdxComponents from "./components/MdxComponents";
import PaintBlock from "./components/PaintBlock";
import PreviewCard from "./components/PreviewCard";

function PostCard(post: Post) {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      {/* <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
      <MDXContent components={mdxComponents} />
    </div>
  );
}

export const generateMetadata = () => {
  return { title: "Gunbro Blog - Home" };
};

export default function Home() {
  const recentPosts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  ).slice(0, 6);
  return (
    <div className="pt-8 w-full">
      <PaintBlock />
      <section>
        <p className="text-sm py-10 font-normal text-title">최근에 올린글</p>
        <div className="tablet:flex-col tablet:gap-[20px] flex gap-[2%] flex-wrap">
          {recentPosts.map((post) => (
            <PreviewCard post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
