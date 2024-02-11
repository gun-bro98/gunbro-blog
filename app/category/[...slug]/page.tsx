import { allPosts } from "@/.contentlayer/generated";
import PreviewCard from "@/app/components/PreviewCard";
import { notFound } from "next/navigation";
import React from "react";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({
    slug: post._raw.flattenedPath.split("/").slice(1),
  }));

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] };
}) => {
  return { title: `Gunbro Blog - ${params.slug[0]}` };
};

function Category({ params }: { params: { slug: string[] } }) {
  const postList = allPosts.filter((post) => {
    return post._raw.flattenedPath.includes(params.slug.join("/"));
  });
  if (postList.length === 0) return notFound();
  return (
    <section className="pt-8 w-full">
      <h2 className="text-normal text-sm font-bold">
        {params.slug.join(" - ")}
      </h2>
      <div className="border-t pt-5 w-full mt-5 border-t-[#00000050]" />
      <div className="tablet:flex-col tablet:gap-[20px] flex gap-[2%] flex-wrap">
        {postList.map((post, key) => (
          <PreviewCard key={key} post={post} />
        ))}
      </div>
    </section>
  );
}

export default Category;
