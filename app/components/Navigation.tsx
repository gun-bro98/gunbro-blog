import { readdirSync } from "fs";
import Link from "next/link";
import React from "react";

function Navigation() {
  const targetPath = "./content/posts/";
  const folderNameList = readdirSync(targetPath);

  return (
    <nav className="tablet:hidden w-[120px] flex-shrink-0 pt-[40px] flex flex-col gap-[40px]">
      {folderNameList.map((f1) => {
        const secondFolderNameList = readdirSync(targetPath + f1);
        return (
          <div>
            <h3 className="text-base font-bold text-sm">{f1}</h3>
            <ul className="flex flex-col gap-[20px] pt-[20px] pl-4">
              {
                secondFolderNameList.map((f2) => <li className="list-disc text-base font-normal"><Link href={`/category/${f2}`}>{f2}</Link></li>)
              }
            </ul>
          </div>
        );
      })}
    </nav>
  );
}

export default Navigation;
