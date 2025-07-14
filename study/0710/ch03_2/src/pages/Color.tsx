export default function Color() {
    return <div className="p-4 bg-sky-700">
        <p className="w-full p-4 text-3xl text-white">Color</p>
        <div className="mb-4">
            <p className="text-white">이메일 입력</p>
            <input type="email" className="text-gray-900 border-sky-200 border-4" />
            <p className="text-red-600">필수 입력 항목</p>
        </div>
        
    </div>
}