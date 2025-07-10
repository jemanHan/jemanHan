# 📘 2025년 7월 9일 React 학습 정리

## ✅ 1. JSX 문법 변환 – HTML → React

### 🔸 주요 포인트
- `class` ➤ `className`  
- `for` ➤ `htmlFor`  
- `<input>` 등 **모든 태그는 닫는 태그 필수**

### 📌 예시
**HTML:**
```html
<label for="email" class="form-label">Email</label>
```

**React:**
```jsx
<label htmlFor="email" className="form-label">Email</label>
```

---

## ✅ 2. `cd` 명령 오류와 CLI 사용법

### ❌ 오류 예시
```bash
cd copy/CopyMe.tsx pages/Tailwindcss.tsx
```

### 📌 원인
- `cd`는 **디렉터리 한 개만 이동** 가능
- `.tsx`는 **파일**이라 이동 불가

### ✅ 해결 방법
- 디렉터리 이동: `cd pages`
- 파일 열기 (VSCode):  
  ```bash
  code copy/CopyMe.tsx pages/Tailwindcss.tsx
  ```

---

## ✅ 3. `build` 폴더가 사라진 이유

### 📌 원인
- 기존 프로젝트 폴더를 **완성본으로 덮어씀**
- 새 폴더에 `build/` 폴더가 없으면 기존 것도 **덮어쓰기로 소실**

### ✅ 복구 방법
```bash
npm run build
```

- `build/` 폴더는 **프로덕션 정적 파일을 생성**하는 용도

---

## ✅ 4. `npm start`와 `npm run build` 차이

| 명령어 | 목적 | `build` 폴더 생성 여부 |
|--------|------|------------------------|
| `npm start` | 개발 서버 실행 (`localhost:3000`) | ❌ |
| `npm run build` | 정적 파일 생성 (배포용) | ✅ |

- `npm start`: 메모리에서 임시로 번들링
- `npm run build`: 최적화된 정적 HTML/CSS/JS 생성

---

## ✅ 5. 보너스: `npm` 자주 틀리는 명령어

| ❌ 오타 | ✅ 정답 |
|--------|--------|
| `npm strat` | `npm start` |
| `npm bulid` | `npm run build` |
| `npm instal` | `npm install` |

---

## 🧠 오늘의 키워드 요약
```
React JSX 문법
CLI cd 명령 오류
build 폴더의 역할
npm start vs build 차이
파일/폴더 작업 시 주의사항
```
