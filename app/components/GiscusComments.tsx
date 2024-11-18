"use client";

import { useEffect } from "react";

function GiscusComments() {
  useEffect(() => {
    // Giscus 스크립트를 동적으로 추가
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.setAttribute("data-repo", "gun-bro98/gunbro-blog"); // 자신의 레포지토리로 변경
    script.setAttribute("data-repo-id", "R_kgDOLQ5LbQ"); // Giscus 설정에서 제공된 ID
    script.setAttribute("data-category", "General"); // Giscus 설정에서 선택한 카테고리
    script.setAttribute("data-category-id", "DIC_kwDOLQ5Lbc4CkX1T"); // Giscus 설정에서 제공된 ID
    script.setAttribute("data-mapping", "pathname"); // URL 경로에 매핑
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom"); // 입력 위치
    script.setAttribute("data-theme", "light"); // 테마 설정
    script.setAttribute("data-lang", "ko"); // 언어 설정
    script.setAttribute("data-loading", "lazy"); // 로드 설정
    script.crossOrigin = "anonymous";

    const comments = document.getElementById("giscus-comments");
    if (comments) {
      comments.innerHTML = "";
      comments.appendChild(script);
    }
  }, []);

  return <div id="giscus-comments" />;
}

export default GiscusComments;
