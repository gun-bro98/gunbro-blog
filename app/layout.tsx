import type { Metadata } from "next";
import localFont from 'next/font/local';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import "./globals.css";

const myFont = localFont({
  src: [
    {
      path: '../app/assets/fonts/Pretendard-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../app/assets/fonts/Pretendard-ExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../app/assets/fonts/Pretendard-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../app/assets/fonts/Pretendard-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/assets/fonts/Pretendard-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../app/assets/fonts/Pretendard-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../app/assets/fonts/Pretendard-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../app/assets/fonts/Pretendard-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  display: "swap"
})

export const metadata: Metadata = {
  title: "Gunbro Blog",
  description: "거녕이의 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${myFont.className}`}>
        <div className="tablet:px-5 laptop:px-[30px] max-w-5xl m-auto pb-32">
          <Header>
            <Navigation />
          </Header>
          <div className="flex gap-[90px]">
            {children}
            <div className="tablet:hidden">
              <Navigation />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
