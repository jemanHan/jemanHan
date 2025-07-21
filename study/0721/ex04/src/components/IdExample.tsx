import React, { useId, useState } from "react";

export default function IdExample() {
  const id = useId();
  const [name, setName] = useState("");
  return (
    <div>
      <label className="p-4" htmlFor="id">
        id: {id} 이름: {name}
      </label>
      <input
        id="id"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
