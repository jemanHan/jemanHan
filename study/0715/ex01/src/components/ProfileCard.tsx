// src/components/ProfileCard.tsx

export default function ProfileCard() {
  return (
    <div className="max-w-lg p-10 mx-auto mt-10 text-center bg-white border rounded-lg shadow">
      <img
        src="/images/profile.jpg"
        className="object-cover mx-auto mb-4 rounded-lg w-128 h-128 hover:scale-110"
        alt="프로필 이미지"
      />
      <h2 className="text-xl font-semibold">홍길동</h2>
      <p className="text-gray-500">Frontend Developer</p>
      <p className="mt-2 text-sm text-gray-700">React와 Tailwind를 배우는 중입니다.</p>
    </div>
  );
}
