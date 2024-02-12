import { readdirSync } from "fs";
import Link from "next/link";
import path from "path";
import React from "react";

type NavigationDataListType = {
  category: string;
  link: string;
  categoryList: { link: string; name: string }[];
}[];

const navigationDataList: NavigationDataListType = [
  {
    category: "etc",
    link: "/category/etc",
    categoryList: [{ link: "/2024", name: "2024" }],
  },
  {
    category: "framework",
    link: "/category/framework",
    categoryList: [
      { link: "/next", name: "next" },
      {
        link: "/react-native",
        name: "react-native",
      },
    ],
  },
  {
    category: "language",
    link: "/category/language",
    categoryList: [
      {
        link: "/css",
        name: "css",
      },
      {
        link: "/html",
        name: "html",
      },
      {
        link: "/javascript",
        name: "javascript",
      },
      {
        link: "/typescript",
        name: "typescript",
      },
    ],
  },
  {
    category: "library",
    link: "/category/library",
    categoryList: [
      {
        link: "/react",
        name: "react",
      },
    ],
  },
  {
    category: "til",
    link: "/category/til",
    categoryList: [{ link: "/2024", name: "2024" }],
  },
];

function Navigation() {
  return (
    <nav className="w-[120px] flex-shrink-0 py-[40px] flex flex-col gap-[40px]">
      <div>
        <Link href="/introduce">
          <h3 className="text-normal font-bold text-sm">소개</h3>
        </Link>
      </div>
      {navigationDataList.map((categoryData) => {
        return (
          <div key={categoryData.category}>
            <h3 className="text-normal font-bold text-sm">
              {categoryData.category}
            </h3>
            <ul className="flex flex-col gap-[20px] pt-[20px] pl-4">
              {categoryData.categoryList.map((data) => (
                <li
                  key={categoryData.category + "/" + data.name}
                  className="list-disc text-normal font-normal"
                >
                  <Link href={categoryData.link + data.link}>{data.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}

export default Navigation;

/* 해당 주석은 나중에 vercel이 fs관련 에러 해결하면 아래처럼 바꾸면 될듯 */

// function Navigation() {
//   //prodess.cwd는 node명령어를 호출한 절대경로를 알려준다.
//   //path.resolve는 경로를 합쳐주는 역할
//   const targetPath = path.resolve(process.cwd(), "content", "posts");
//   const folderNameList = readdirSync(targetPath);

//   return (
//     <nav className="w-[120px] flex-shrink-0 py-[40px] flex flex-col gap-[40px]">
//       <div>
//         <Link href="/introduce">
//           <h3 className="text-normal font-bold text-sm">소개</h3>
//         </Link>
//       </div>
//       {folderNameList.map((f1) => {
//         const secondFolderNameList = readdirSync(targetPath + "/" + f1);
//         return (
//           <div key={f1}>
//             <h3 className="text-normal font-bold text-sm">{f1}</h3>
//             <ul className="flex flex-col gap-[20px] pt-[20px] pl-4">
//               {secondFolderNameList.map((f2) => (
//                 <li key={f1 + f2} className="list-disc text-normal font-normal">
//                   <Link href={`/category/${f1}/${f2}`}>{f2}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         );
//       })}
//     </nav>
//   );
// }
