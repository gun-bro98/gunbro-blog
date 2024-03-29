"use client";

import Animation404 from "@/app/assets/lottie/Animation404.json";
import Lottie from "lottie-react";
import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    body.style.overflow = "hidden";

    return () => {
      const body = document.querySelector("body");
      if (!body) return;
      body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-3 absolute top-0 left-0 z-50 bg-background over">
      <Lottie className="w-[100px] h-[100px]" animationData={Animation404} />
      <h2 className="text-5xl">404</h2>
      <Link className="text-center m-5" href="/">
        <span className="mr-2">⬅️</span> Return Home
      </Link>
    </div>
  );
}
