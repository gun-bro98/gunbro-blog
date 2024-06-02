"use client";

import React, { useEffect, useRef, useState } from "react";

function PaintBlock() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [canvasWidth, setCanvasWidth] = useState<number | null>(null);
  const [canvasHeight, setCanvasHeight] = useState<number | null>(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let t = 0;

    function animate(ctx: CanvasRenderingContext2D) {
      if(!canvasWidth || !canvasHeight) return ;
      // t값에 따른 x, y 좌표 계산
      const x = t * canvasWidth;
      const y = -Math.sin(t) * canvasHeight + canvasHeight / 2;

      // 캔버스 초기화
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // path 그리기
      ctx.beginPath();
      ctx.moveTo(20, 20);
      ctx.quadraticCurveTo(x, y, canvasWidth - 20, canvasHeight - 20);
      ctx.stroke();

      // 원 그리기
      ctx.fillStyle = 'red';
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();

      // t값 업데이트
      t += 0.001;
      if (t > 1) {
        t = 0;
      }
      requestAnimationFrame(() => animate(ctx));
    }
    if (!ctx) return;
    animate(ctx);
  }, [canvasWidth, canvasHeight]);

  useEffect(() => {
    function handleResize() {
      if(!sectionRef.current) return;
      setCanvasWidth(sectionRef.current.clientWidth);
      setCanvasHeight(sectionRef.current.clientHeight);
    }

    
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#000] h-[340px]">
      { canvasHeight && canvasWidth &&
        <canvas ref={canvasRef} className="border-2 border-gray-500 w-full h-full" width={canvasWidth} height={canvasHeight}></canvas>
      }
    </section>
  );
}

export default PaintBlock;
