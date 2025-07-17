# 🧩 Avatar & Div Position 실습 정리

## 📁 구성 파일 목록

- `App.tsx`: 전체 페이지의 컴포넌트 호출 진입점
- `DivTest.tsx`: 기본 `Div` 컴포넌트 렌더링 테스트
- `AvatarTest.tsx`: 여러 개의 아바타 컴포넌트 수평 나열 테스트
- `PositionTest.tsx`: 포지션 속성을 활용한 레이아웃 배치 테스트
- `Div.tsx`: 커스텀 div 컴포넌트 정의
- `Avatar.tsx`: 원형 아바타를 위한 컴포넌트 정의

---

## 🔧 App.tsx에서의 컴포넌트 호출

```tsx
export default function App() {
  return (
    <main>
      <PositionTest />
      <DivTest />
      <AvatarTest />
    </main>
  );
}
```

- `App.tsx`는 각 실습 파일을 순차적으로 호출하여 결과 확인 가능하게 구성
- `<PositionTest />`, `<DivTest />`, `<AvatarTest />`가 핵심 실습 내용

---

## 🧱 Div 컴포넌트 구조 (`Div.tsx`)

```tsx
export const Div: FC<DivProps> = ({ width, height, style, src, className, ... }) => {{
  const style = {{
    ...style,
    width,
    height,
    backgroundImage: src && `url(${{src}})`,
  }};
  return <div className={className} style={style} />
}}
```

- 💡 props로 `width`, `height`, `src`, `left`, `right`, `top`, `bottom` 등 전달 가능
- `src`가 있으면 배경 이미지로 적용됨
- `className`은 Tailwind CSS 등과 조합하여 시각 스타일을 결정

---

<!-- ## 🧍 Avatar 컴포넌트 구조 (`Avatar.tsx`)

```tsx
export const Avatar: FC<AvatarProps> = ({ src, size = '4rem', ... }) => {{
  return (
    <Div src={src} width={size} height={size} className="rounded-full bg-cover bg-gray-300" />
  )
}}
``` -->

- 💡 `Avatar`는 내부적으로 `Div`를 활용함
- `rounded-full`: 동그란 이미지 형태
- `bg-cover`: 배경 이미지 꽉 채우기

---

## 👥 AvatarTest.tsx 요약

```tsx
const avatars = D.range(0, 8).map((index) => (
  <Avatar
    src={D.randomAvatar()}
    className="inline-block -ml-6 border-4 border-white"
  />
));
```

- `range(0, 8)`로 8개 아바타 생성
- `-ml-6`: 아바타가 겹쳐 보이게 마이너스 margin 적용
- `border-4 border-white`: 아바타 경계 강조

---

## 🧭 PositionTest.tsx 핵심

```tsx
<Div className="relative">
  <Div className="absolute left-1 top-1">좌상단</Div>
  <Div className="absolute right-1 top-1">우상단</Div>
  <Div className="absolute left-1 bottom-1">좌하단</Div>
  <Div className="absolute right-1 bottom-1">우하단</Div>
</Div>
```

- `relative` 부모 안에 `absolute` 자식 요소를 네 모서리에 배치
- 각 `Div`에 아이콘 리스트 출력
- 포지셔닝 학습의 핵심 예시

---

## ✅ 핵심 정리

| 개념           | 설명                                         |
| -------------- | -------------------------------------------- |
| `Div`          | 스타일 props를 활용한 커스텀 div             |
| `Avatar`       | 원형 이미지 형태의 사용자 컴포넌트           |
| `PositionTest` | `relative`와 `absolute`로 자유 레이아웃 구현 |
| `App`          | 각 테스트 컴포넌트를 통합하는 진입 컴포넌트  |
