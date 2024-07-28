'use client'

import Flicking from '@egjs/react-flicking';
import { flatten } from 'lodash';
import { useEffect, useMemo, useRef } from 'react';
import '@egjs/react-flicking/dist/flicking.css'
interface ImageSliderProps {
  imageGroupList: string[][];
  imageGroupCoverList: string[];
  currentImageData: {
    currentImageList: string[];
    groupIndex: number;
    currentImageListActiveIndex: number;
  };
  onChnagedMainImageCallback: (data: {
    currentImageList: string[];
    groupIndex: number;
    currentImageListActiveIndex: number;
  }) => void;
}

function ImageSlider({
  imageGroupList,
  imageGroupCoverList,
  currentImageData,
  onChnagedMainImageCallback,
}: ImageSliderProps) {
  const mainFlickingRef = useRef<Flicking>(null);
  const indicatorBarRef = useRef<HTMLDivElement>(null);
  const imageCoverRefList = useRef<HTMLImageElement[]>([]);

  const entireImageList = useMemo(() => flatten(imageGroupList), [imageGroupList]);

  useEffect(() => {
    if (!indicatorBarRef.current) return;
    const indicator = indicatorBarRef.current;
  
    // fadein 애니메이션 클래스 추가
    indicator.classList.add('animate-fadein');
  
    // 애니메이션 클래스 제거
    const animationEnd = () => {
      indicator.classList.remove('animate-fadein');
      indicator.removeEventListener('animationend', animationEnd);
    };
  
    indicator.addEventListener('animationend', animationEnd);
  }, [currentImageData.currentImageListActiveIndex]);

  return (
    <div className="w-full">
      <div className="relative w-full">
        <Flicking
          ref={mainFlickingRef}
          onChanged={(e) => {
            const index = e.index;
            if (index === undefined) return;

            let cumulativeIndex = 0;
            let groupIndex = 0;
            let currentImageListActiveIndex = 0;

            for (let i = 0; i < imageGroupList.length; i++) {
              const groupLength = imageGroupList[i].length;
              if (index < cumulativeIndex + groupLength) {
                groupIndex = i;
                currentImageListActiveIndex = index - cumulativeIndex;
                break;
              }
              cumulativeIndex += groupLength;
            }

            if (imageCoverRefList.current?.[groupIndex]) {
              imageCoverRefList.current[groupIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'nearest',
              });
            }
            onChnagedMainImageCallback({
              currentImageList: imageGroupList[groupIndex],
              groupIndex,
              currentImageListActiveIndex,
            });
          }}
          cameraClass="w-full aspect-[1/1]"
          align={'prev'}
          circularFallback={'bound'}
          bound
          moveType={['strict']}
        >
          {entireImageList.map((image, index) => (
            <img className="w-full h-full object-cover" key={index} src={image} alt="" />
          ))}
        </Flicking>
        <div className="absolute z-10 bottom-[18px] left-1/2 -translate-x-1/2 w-full h-[3px] bg-[#2222224d]">
          <div
            ref={indicatorBarRef}
            className="h-full bg-[#222222] transition-transform"
            style={{
              width: `${100 / currentImageData.currentImageList.length}%`,
              transform: `translateX(${currentImageData.currentImageListActiveIndex * 100}%)`,
            }}
          />
        </div>
      </div>
      <div
        className="mt-5 w-full overflow-x-auto flex gap-2 px-3 no-scrollbar"
        onTouchMove={(e) => {
          e.stopPropagation();
        }}
      >
        {imageGroupCoverList.map((item, i) => (
          <img
            loading="lazy"
            ref={(ref) => (ref ? (imageCoverRefList.current[i] = ref) : undefined)}
            onClick={() => {
              mainFlickingRef.current?.moveTo(entireImageList.indexOf(imageGroupList[i][0])).catch(err => null);
            }}
            width={58}
            height={58}
            key={item}
            className={`object-cover border ${currentImageData.groupIndex === i ? 'border-[#222]' : 'border-[#ebebeb]'}`}
            src={item}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;