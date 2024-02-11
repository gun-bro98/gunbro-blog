"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

function Header({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const [isShowMenu, setIsShowMenu] = useState(false);

  useEffect(() => {
    if (!isShowMenu) return;
    const body = document.querySelector("body");
    if (!body) return;
    body.style.overflow = "hidden";
    return () => {
      const body = document.querySelector("body");
      if (!body) return;
      body.style.overflow = "visible";
    };
  }, [isShowMenu]);

  useEffect(() => {
    if(isShowMenu){
      setIsShowMenu(false)
    }
  }, [pathName])

  useEffect(() => {
    const resizeHandler = () => {
      setIsShowMenu(false);
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const onClickHandler = () => {
    setIsShowMenu((prev) => !prev);
  };

  return (
    <>
      <header className="tablet:pt-5 pt-8 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl tablet:text-lg font-bold text-title">
            Gunbro Blog
          </h1>
        </Link>
        <button
          type="button"
          onClick={onClickHandler}
          className="laptop:hidden desktop:hidden"
        >
          <Image
            width={24}
            height={24}
            src="/images/icon/burger-button.svg"
            alt=""
          />
        </button>
      </header>
      {/* 모바일 네비게이션 */}
      <div
        className={`laptop:hidden desktop:hidden fixed top-0 right-0 z-50 w-screen h-screen bg-background ${
          isShowMenu ? "" : "translate-x-full"
        } transition-transform duration-500 overflow-y-auto`}
      >
        <div className="px-[30px]">
          <button onClick={onClickHandler} type="button" className="py-5">
            <Image width={24} height={24} src="/images/icon/left.png" alt="" />
          </button>
          {children}
        </div>
      </div>
    </>
  );
}

export default Header;
