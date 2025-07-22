
# 📚 2025년 7월 22일 Redux 상태관리 학습 정리

## 🧭 무엇을 위한 학습이었나?
**React 프로젝트가 커질수록 복잡해지는 상태 관리를 체계적으로 관리하기 위해 Redux를 도입**
- 컴포넌트 간 props 전달의 한계 해결
- 상태를 중앙 집중형으로 예측 가능하게 관리
- 전역 상태 설계 → 액션 처리 → 리듀서 구현 → UI 연동까지 전 흐름 실습

---

## 🔑 오늘 학습의 핵심 포인트

### 1. Redux 구조 구성 및 파일화
- `store/`, `reducers/`, `actions.ts`, `AppState`, `useStore.ts` 등 폴더화된 아키텍처 실습
- 상태 모듈 분리(clock, counter, cards, remoteUser)

### 2. useSelector / useDispatch 사용법 실습
- `AppState` 타입 정의 후 상태 접근 (`useSelector`)
- 액션 발생 (`useDispatch`) 및 리듀서 실행 흐름 체득

### 3. 타입스크립트와 상태 설계
- `State`, `Action`, `AppState` 등 명확한 타입 분리
- 코드 자동완성과 디버깅 효율 강화

### 4. 상태 테스트용 페이지 구성
- `CounterTest.tsx`, `ClockTest.tsx`, `RemoteUserTest.tsx`, `CardTest/index.tsx`
- 각 상태 모듈을 독립적으로 UI에서 테스트하며 상태 변경 흐름 확인

### 5. 커스텀 훅 보조 학습
- `useInterval`, `useToggle` 등 자주 쓰는 로직 추출하여 재사용성 높임

---

## ❓ 왜 Redux를 사용하는가?

| 이유 | 설명 |
|------|------|
| 상태 공유 | 깊은 props 전달 없이 컴포넌트 간 상태 공유 |
| 예측 가능성 | 모든 상태 변경이 명시적(action → reducer) |
| 구조적 확장 | 상태 모듈 분리 + combineReducers 가능 |
| 미들웨어 확장성 | 비동기 처리, 로깅, 에러처리 용이 |
| 단일 상태소 | 중앙에서 상태를 관리하여 일관성 확보 |

---

## 🌀 자주 쓰이는 리덕스 패턴 예시

| 패턴 | 설명 |
|------|------|
| Counter | 구조 연습용 기본 카운터 |
| Auth | 로그인/로그아웃, 사용자 인증 정보 |
| Remote Data | API 요청 처리용 (요청/성공/실패) |
| Cart | 장바구니 항목 관리 |
| Form | 입력값 저장 및 유효성 검사 |
| UI State | 탭 선택, 모달 표시 등 |
| List | 게시글, 알림 등 리스트 항목 추가/삭제 |

---

## 📌 상태 흐름 요약

```ts
// 상태 흐름 전체 개요
컴포넌트 → dispatch(action)
          → reducer(state, action)
          → store 업데이트
          → useSelector로 상태 사용
```

---

## 🧠 현재까지 완료한 범위

✅ Redux의 핵심 개념과 구조 설계  
✅ useSelector / useDispatch  
✅ 상태 타입화 및 모듈 분리  
✅ 각 상태 모듈의 UI 테스트  
✅ 미들웨어(비동기 처리)는 다음 학습 예정  

---

**다음 학습 추천:**  
→ redux-thunk 또는 redux-saga (API 호출/비동기 로직 처리)  
→ react-redux의 Provider, useSelector, useDispatch 정리 마무리  
→ Redux Toolkit 도입으로 코드 간결화

---
