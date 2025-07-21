import React, { useCallback, useState } from "react";

// 🔹 React.memo: props가 바뀌지 않으면 리렌더링 막음
const Button = React.memo(({ onClick, label }: { onClick: () => void; label: string }) => {
  console.log(`Rendering: ${label}`);
  return (
    <button className="p-4 m-4 bg-blue-300" onClick={onClick}>
      {label}
    </button>
  );
});

export default function Parent() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  // 🔹 useCallback: 함수를 메모이제이션해서, 매번 새로 생성되지 않도록 함
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return (
    <div className="p-4 m-4 bg-gray-100">
      <p>Count: {count}</p>
      <p>Toggle: {toggle.toString()}</p>

      <Button onClick={handleIncrement} label="+1 증가" />
      <Button onClick={handleToggle} label="토글 변경" />
    </div>
  );
}
