# 🛒 쇼핑몰 프로젝트 개발 학습 정리

> React 기초부터 레이아웃 구성, 상품 데이터 관리, 페이지 전환, 스타일링까지 실제 프로젝트 기반으로 학습한 내용을 정리합니다.

---

## 📁 프로젝트 구성

### 폴더 구조
```
src/
├── components/
│   ├── layout/            # Header, Sidebar, Layout 등 공통 레이아웃
│   ├── products/          # 상품 관련 컴포넌트 (Item, List, Filter 등)
│   ├── cart/              # 장바구니 컴포넌트
│   └── TotalPrice.tsx     # 총합 계산 영역
├── contexts/              # 전역 상태 관리 (장바구니 등)
├── pages/                 # 각각의 화면(HomePage, ProductDetailPage 등)
├── data/                  # 정적 데이터 (products.ts)
├── App.tsx                # 라우터 및 최상위 구조
└── index.tsx              # 앱 진입점
```

---

## ⚙️ 기술 및 라이브러리 사용 이유

### ✅ React (`create-react-app` + TypeScript)
- **왜 사용?**: 컴포넌트 기반으로 UI를 모듈화할 수 있고, 상태 관리 및 동적 렌더링이 쉬움
- **주로 사용된 곳**: `useState`, `props`, `map()`을 통한 렌더링, `useParams`, `useNavigate` 등

### ✅ TailwindCSS + DaisyUI
- **왜 사용?**: 빠른 스타일링과 일관된 디자인, 클래스 단위로 효율적인 관리 가능
- **주로 사용된 곳**: 상품 카드 스타일, 레이아웃 구조, 버튼/hover 효과 등

### ✅ react-router-dom
- **왜 사용?**: 페이지 전환 및 동적 경로 이동 (`/product/:id` 같은 상세 페이지)
- **주로 사용된 곳**: App.tsx에서 라우터 구성, 상세 페이지 이동, 뒤로가기 등

### ✅ Context API
- **왜 사용?**: 장바구니와 같이 전역적으로 공유되는 상태를 다루기 위함
- **주로 사용된 곳**: `CartContext.tsx`를 통한 전역 상태 저장 및 변경

### ✅ 상품 데이터 (`products.ts`)
- **왜 사용?**: 정적 데이터를 코드 내에 직접 보관해 UI 테스트 및 개발 진행
- **주요 내용**: 카테고리(`fruit`, `drink`, `snack`) 및 이미지, 가격 포함

### ✅ 이미지 API (Picsum)
- **왜 사용?**: 간단하게 정적인 이미지 대체 (Unsplash는 불안정했음)
- **주요 방식**: `https://picsum.photos/seed/사과/300/300`

---

## 🎨 UI 구조 설계

### Header
- 쇼핑몰 간판 역할, 페이지 최상단 고정

### Sidebar
- 홈, 장바구니, 검색창, 카테고리(드롭다운) 메뉴 표시
- 클릭 시 하위 카테고리(과일/음료/간식) 노출

### Layout
- Header + Sidebar + Main을 묶는 전체 구조 컴포넌트
- `App.tsx`에서 `<Layout><Routes /></Layout>`으로 전체를 감쌈

### ProductItem
- 개별 상품 카드 (이미지, 이름, 가격 표시)
- 카드 클릭 시 상세 페이지로 이동 (`<Link to="/product/1" />`)

### ProductDetailPage
- 상품 상세 정보, 수량 조절, 장바구니 담기 버튼 포함

---

## 💡 학습 포인트 요약

| 주제 | 학습 포인트 |
|------|-------------|
| 컴포넌트 분리 | 하나의 역할을 하나의 컴포넌트로 책임 분리 |
| 상태 관리 | `useState`, `Context`로 로컬 & 전역 상태 구분 |
| 라우팅 | URL에 따라 페이지 전환하고, 상세 정보 로드 |
| 스타일링 | Tailwind로 빠르게 적용, DaisyUI로 버튼 등 UI 구성 |
| 이미지 처리 | 정적 이미지가 없을 때 외부 API 활용 |
| 레이아웃 설계 | Header + Sidebar + Main 구조로 가독성 향상 |