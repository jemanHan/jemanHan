import React, { useLayoutEffect, useRef, useEffect } from "react";

export default function LayoutEffectExample() {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.background = "yellow";
      boxRef.current.style.width = "300px";
      boxRef.current.style.fontSize = "20px";
      boxRef.current.style.margin = "100px";
      boxRef.current.style.textAlign = "center";
    }
  }, []); // 의존성 배열 추가 (렌더 후 1회만 실행)

  return <div ref={boxRef}>useLayoutEffect로 스타일 적용</div>;
}
