import { Post } from "@/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import React from "react";
import { skeletonImage } from "../utils/skeleton";

interface PreviewCardProps {
  post: Post;
}

function PreviewCard({ post }: PreviewCardProps) {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    // 비율 유지해주는 컨테이너
    <div className=" tablet:pt-[100%] tablet:w-[100%] tablet:mb-0 bg-white pt-[32%] w-[32%] relative rounded-[5px] overflow-hidden mb-[2%]">
      <div className="absolute left-0 top-0 w-full h-full">
        <div className="absolute left-0 top-0 w-full h-2/3">
          <Image
            className="object-cover"
            fill
            src={post.image ?? skeletonImage}
            placeholder="blur"
            blurDataURL={skeletonImage}
            alt=""
          />
        </div>
        <p className="absolute left-0 bottom-0 w-full h-1/3 text-[#4D4646] font-normal text-sm p-1 line-clamp-4 break-all break-words">
          {post.title}
        </p>
      </div>
    </div>
  );
}

export default PreviewCard;
