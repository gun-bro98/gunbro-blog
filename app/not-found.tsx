"use client";

import Lottie from "lottie-react";
import Link from "next/link";
import Animation404 from "@/app/assets/lottie/Animation404.json";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-3">
      <Lottie className="w-[100px] h-[100px]" animationData={Animation404} />
      <h2 className="text-5xl">404</h2>
      <Link className="text-center m-5" href="/">
        <span className="mr-2">⬅️</span> Return Home
      </Link>
    </div>
  );
}
