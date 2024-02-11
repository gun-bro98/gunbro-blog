import { allIntroduces } from "@/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import React from "react";

export const generateMetadata = ({}) => {
  const introduce = allIntroduces.find((introduce) => {
    return introduce._raw.flattenedPath === "introduce";
  });
  if (!introduce) notFound();
  return { title: "Gunbro Blog - 소개" };
};

function Introdue() {
  const introduce = allIntroduces.find((introduce) => {
    return introduce._raw.flattenedPath === "introduce";
  });
  if (!introduce) notFound();

  const MDXContent = useMDXComponent(introduce.body.code);
  return (
    <section className="pt-8 w-full">
      <h2 className="text-normal text-sm font-bold">소개</h2>
      <div className="border-t pt-5 w-full mt-5 border-t-[#00000050]" />
      <article className="mx-auto max-w-5xl py-8 prose">
        <MDXContent />
      </article>
    </section>
  );
}

export default Introdue;
