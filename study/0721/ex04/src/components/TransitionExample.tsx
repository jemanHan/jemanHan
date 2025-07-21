import React, { useState, useTransition } from "react";

export default function TransitionExample() {
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    startTransition(() => {
      const items = [];
      for (let i = 0; i < 10000; i++) {
        items.push(value);
      }
      setList(items);
    });
  };

  return (
    <div>
      <input
        className="m-4"
        value={input}
        onChange={handleChange}
        type="text"
      />
      {isPending && <span>로딩 중...</span>}

      <div>총 {list.length}개 </div>
    </div>
  );
}
