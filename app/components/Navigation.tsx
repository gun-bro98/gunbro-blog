import { readdirSync } from "fs";
import Link from "next/link";
import React from "react";

function Navigation() {
  const targetPath = "content/posts/";
  const folderNameList = readdirSync(targetPath);

  return (
    <nav className="w-[120px] flex-shrink-0 py-[40px] flex flex-col gap-[40px]">
      <div>
        <Link href="/introduce">
          <h3 className="text-normal font-bold text-sm">소개</h3>
        </Link>
      </div>
      {folderNameList.map((f1) => {
        const secondFolderNameList = readdirSync(targetPath + f1);
        return (
          <div key={f1}>
            <h3 className="text-normal font-bold text-sm">{f1}</h3>
            <ul className="flex flex-col gap-[20px] pt-[20px] pl-4">
              {secondFolderNameList.map((f2) => (
                <li key={f1 + f2} className="list-disc text-normal font-normal">
                  <Link href={`/category/${f1}/${f2}`}>{f2}</Link>
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
