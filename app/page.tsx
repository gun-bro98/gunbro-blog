// app/page.tsx
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import mdxComponents from "./components/MdxComponents";
import PreviewCard from "./components/PreviewCard";
import { Metadata } from "next";

// function PostCard(post: Post) {
//   const MDXContent = useMDXComponent(post.body.code);
//   return (
//     <div className="mb-8">
//       <h2 className="mb-1 text-xl">
//         <Link
//           href={post.url}
//           className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
//         >
//           {post.title}
//         </Link>
//       </h2>
//       <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
//         {format(parseISO(post.date), "LLLL d, yyyy")}
//       </time>
//       {/* <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
//       <MDXContent components={mdxComponents} />
//     </div>
//   );
// }

export const generateMetadata = (): Metadata => {
  return {
    title: "Gunbro Blog - Home",
    description: "꾸준한 성장을 기록하기 위한 gunbro의 블로그입니다.",
    keywords: ["블로그", "gunbro", "javascript", "typescript", "개발"],
    openGraph: {
      title: "꾸준한 성장을 기록하기 위한 gunbro의 블로그입니다.",
      description: "꾸준한 성장을 기록하기 위한 gunbro의 블로그입니다.",
      images: '/images/icon/og-image.svg',
      url: 'https://blog.gunbro.kr/'
    }
  };
};

export default function Home() {
  const recentPosts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 6);
  return (
    <div className="pt-8 w-full">
      <section>
        <p className="text-sm py-10 font-normal text-title">최근에 올린글</p>
        <div className="tablet:flex-col tablet:gap-[20px] flex gap-[2%] flex-wrap">
          {recentPosts.map((post, key) => (
            <PreviewCard key={key} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
