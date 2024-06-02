import { Post } from "@/.contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { skeletonImage } from "../utils/skeleton";

interface PreviewCardProps {
  post: Post;
}

function PreviewCard({ post }: PreviewCardProps) {
  const category = post._raw.sourceFileDir.split("/").at(-1);
  return (
    // 비율 유지해주는 컨테이너
    <Link
      href={"/" + post._raw.flattenedPath}
      className="tablet:pt-[100%] tablet:w-[100%] tablet:mb-0 bg-white pt-[32%] w-[32%] relative rounded-[5px] overflow-hidden mb-[2%] border-[1px] border-solid border-[#e5e5e5]"
    >
      <div className="absolute left-0 top-0 w-full h-full">
        <div className="absolute left-0 top-0 w-full h-2/3 overflow-hidden">
          {post.image ? (
            <Image
              className="object-cover"
              fill
              src={post.image}
              placeholder="blur"
              blurDataURL={skeletonImage}
              alt=""
            />
          ) : (
            <div className="bg-[#eff1f4] w-full h-full flex items-center justify-center text-2xl font-bold">
              {category}
            </div>
          )}
        </div>
        <div className="absolute left-0 bottom-0 w-full h-1/3 p-1 flex flex-col justify-between">
          <p className="text-[#4D4646] font-semibold text-sm line-clamp-4 break-all break-words">
            {post.title}
          </p>
          <p className="text-[0.7rem] text-[#aaa]">{post.tag}</p>
        </div>
      </div>
    </Link>
  );
}

export default PreviewCard;
