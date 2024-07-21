import { allPosts } from "@/.contentlayer/generated";
import PreviewCard from "@/app/components/PreviewCard";
import { Metadata } from "next";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({
    slug: post._raw.flattenedPath.split("/").slice(1),
  }));

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] };
}): Metadata => {
  return {
    title: `Gunbro Blog - ${params.slug[0]}`,
    description: "꾸준한 성장을 기록하기 위한 gunbro의 블로그입니다.",
    keywords: ["블로그", "gunbro", "개발", params.slug[0]],
    openGraph: {
      title: "꾸준한 성장을 기록하기 위한 gunbro의 블로그입니다.",
      description: "꾸준한 성장을 기록하기 위한 gunbro의 블로그입니다.",
      images: "https://blog.gunbro.kr/images/icon/og-image.svg",
      url: "https://blog.gunbro.kr/",
    },
  };
};

function Category({ params }: { params: { slug: string[] } }) {
  const postList = allPosts.filter((post) => {
    return post._raw.flattenedPath.includes(params.slug.join("/"));
  });
  return (
    <section className="pt-8 w-full">
      <h2 className="text-normal text-sm font-bold">
        {params.slug.join(" / ")}
      </h2>
      <div className="border-t pt-5 w-full mt-5 border-t-[#00000050]" />
      <div className="tablet:flex-col tablet:gap-[20px] flex gap-[2%] flex-wrap">
        {postList.length > 0 ? (
          postList.map((post, key) => <PreviewCard key={key} post={post} />)
        ) : (
          <div className="w-full h-[300px] flex justify-center items-center">
            아직 글이 없습니다.
          </div>
        )}
      </div>
    </section>
  );
}

export default Category;
