// import * as D from '../data'
export default function Tailwindcss() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        TailwindCSS
      </h1>
      {/* <p className='italic text-black line-clamp-3 '>{D.randomParagraphs(1)}</p> */}
      {/* 나중에 문장 더 추가해보기 */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Tailwind 버튼
      </button>
    </div>
  );
}

