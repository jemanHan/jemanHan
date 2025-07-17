
# 📘 React 프로젝트 구조 및 연결 흐름 정리 (파일별 상세 설명 포함)

---

## 📁 폴더 구조

```
src/
├── components/
│   ├── Header.tsx       ← 테마/언어 전환 버튼 포함
│   └── Content.tsx      ← 현재 테마/언어 상태 출력
├── contexts/
│   ├── ThemeContext.tsx     ← 다크/라이트 전역 상태 관리
│   └── LanguageContext.tsx  ← 언어 전역 상태 관리 (ko/en)
├── pages/
│   ├── ThemeTest.tsx        ← Theme + Language 테스트 페이지
│   └── LanguageTest.tsx     ← Language만 테스트하는 페이지
├── App.tsx              ← 앱의 진입점
```

---

## 📁 components/

### 🔹 Header.tsx

- 상단 UI에 해당함
- 버튼 클릭으로 테마(라이트/다크), 언어(한국어/영어) 토글 기능 제공
- 내부에서 `useContext(ThemeContext)` 및 `useContext(LanguageContext)` 사용
- Context가 없으면 에러 발생하도록 방어 로직 포함

### 🔹 Content.tsx

- 메인 콘텐츠 영역
- 현재 적용된 테마와 언어 상태를 화면에 표시
- `ThemeContext`와 `LanguageContext`에서 상태 값을 가져와 출력

---

## 📁 contexts/

### 🔹 ThemeContext.tsx

- 다크/라이트 모드를 관리하는 전역 상태 제공
- `theme` 상태 값과 `toggleTheme()` 함수 포함
- `ThemeContext.Provider`로 감싸면 하위에서 `useContext(ThemeContext)` 사용 가능

### 🔹 LanguageContext.tsx

- `ko`와 `en` 사이 언어 설정을 관리
- `language` 상태와 이를 변경하는 `setLanguage()` 함수 포함
- `LanguageContext.Provider`로 감싸면 하위에서 `useContext(LanguageContext)` 사용 가능

---

## 📁 pages/

### 🔹 ThemeTest.tsx

```tsx
<ThemeProvider>
  <LanguageProvider>
    <Header />
    <Content />
  </LanguageProvider>
</ThemeProvider>
```

- `ThemeContext`와 `LanguageContext`를 모두 제공
- 앱에서 사용되는 구조와 유사
- 버튼 클릭으로 테마와 언어 변경 가능

### 🔹 LanguageTest.tsx

```tsx
<ThemeProvider>
  <Header />
  <Content />
</ThemeProvider>
```

- `LanguageProvider`가 빠져 있음
- Header나 Content에서 `LanguageContext`를 사용하면 에러 발생 (`LanguageContext not found`)
- LanguageContext 테스트용이라면 반드시 포함 필요

---

## App.tsx

```tsx
<ThemeProvider>
  <LanguageProvider>
    <Header />
    <Content />
  </LanguageProvider>
</ThemeProvider>
```

- 전체 앱의 루트 컴포넌트
- 모든 Context를 감싸서 전역 상태를 하위 컴포넌트에 전달
- 실제로 사용자에게 보여지는 앱 UI는 여기서 결정됨

---

## 🔄 전체 흐름 순서

```
App.tsx
  ↓
<ThemeProvider> + <LanguageProvider>
  ↓
pages/ThemeTest.tsx or LanguageTest.tsx (또는 직접 App 안에서 구성)
  ↓
components/
  ├── Header.tsx: 테마/언어 변경 버튼 클릭
  └── Content.tsx: 현재 테마/언어 값 출력
```

---

## ✅ 상태별 역할 요약

| 파일명 | 기능 요약 |
|--------|-----------|
| ThemeContext.tsx | 다크/라이트 테마 관리 |
| LanguageContext.tsx | 언어 전환 (ko/en) 상태 관리 |
| Header.tsx | 상태를 토글하는 UI |
| Content.tsx | 현재 상태를 보여주는 UI |
| ThemeTest.tsx | 전체 구조 테스트용 |
| LanguageTest.tsx | 언어 관련 테스트용 |
| App.tsx | 앱의 진입점 – 모든 Provider를 포함해야 함 |

