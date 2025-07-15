import type { DragEvent } from "react";

export default function DragDrop() {
  const onDragStart = (e: DragEvent<HTMLElement>) => {
    console.log('드래그 시작', e.dataTransfer);
  };

  const onDragEnd = (e: DragEvent<HTMLElement>) => {
    console.log('드래그끝', e.dataTransfer);
  };

  const onDragOver = (e: DragEvent) => {
    e.preventDefault(); 
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault(); 
    console.log('온드랍', e.dataTransfer);
  };

  return (
    <div>
      <p>DragDrop</p>

      <div
        draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        style={{ width: '150px', height: '100px', backgroundColor: 'lightblue', marginBottom: '20px', textAlign: 'center' }}
      >
        <h1>드래그</h1>
      </div>

      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        style={{ width: '150px', height: '100px', backgroundColor: 'lightgreen', textAlign: 'center' }}
      >
        <h1>드랍 오버</h1>
      </div>
    </div>
  );
}
