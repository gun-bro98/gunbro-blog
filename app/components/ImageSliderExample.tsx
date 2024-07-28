"use client";

import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";

const imageGroupList = [
  [
    "https://picsum.photos/237/200",
    "https://picsum.photos/240/200",
    "https://picsum.photos/243/200",
  ],
  ["https://picsum.photos/238/200", "https://picsum.photos/241/200"],
  [
    "https://picsum.photos/230/200",
    "https://picsum.photos/231/200",
    "https://picsum.photos/232/200",
  ],
  ["https://picsum.photos/233/200", "https://picsum.photos/234/200"],
  ["https://picsum.photos/260/200", "https://picsum.photos/261/200"],
  ["https://picsum.photos/262/200", "https://picsum.photos/263/200"],
  ["https://picsum.photos/264/200", "https://picsum.photos/265/200"],
];

const imageGroupCoverList = [
  "https://picsum.photos/250/200",
  "https://picsum.photos/251/200",
  "https://picsum.photos/252/200",
  "https://picsum.photos/253/200",
  "https://picsum.photos/254/200",
  "https://picsum.photos/255/200",
  "https://picsum.photos/256/200",
];

function ImageSliderExample() {
  const [currentImageData, setCurrentImageData] = useState<{
    currentImageList: string[];
    groupIndex: number;
    currentImageListActiveIndex: number;
  }>({ currentImageList: imageGroupList[0], groupIndex: 0, currentImageListActiveIndex: 0 });

  return (
    <div className="w-full">
      <ImageSlider
        onChnagedMainImageCallback={({
          currentImageList,
          groupIndex,
          currentImageListActiveIndex,
        }) => {
          setCurrentImageData({
            currentImageList,
            groupIndex,
            currentImageListActiveIndex,
          });
        }}
        currentImageData={currentImageData}
        imageGroupList={imageGroupList}
        imageGroupCoverList={imageGroupCoverList}
      />
    </div>
  );
}

export default ImageSliderExample;
