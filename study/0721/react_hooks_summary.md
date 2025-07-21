
# 🧠 오늘 학습한 React 훅 정리

React의 고급 훅들을 실습을 통해 학습하고, 성능 최적화와 DOM 제어, UI 반응성 향상 방법을 익혔습니다.

---

## ✅ 1. `useCallback`

- **역할**: 함수를 메모이제이션해서 매 렌더링마다 새로 만들어지지 않게 함
- **주로 사용되는 경우**: 
  - 자식 컴포넌트에 props로 함수를 전달할 때
  - `React.memo`와 함께 최적화할 때

```tsx
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
```

---

## ✅ 2. `useMemo`

- **역할**: 연산량이 큰 값을 메모이제이션하여 렌더링마다 다시 계산하지 않게 함
- **주로 사용되는 경우**:
  - 무거운 연산 (ex. 정렬, 필터링, 반복 계산 등)
  - 상태 변경과 무관한 값 캐싱

```tsx
const expensiveValue = useMemo(() => heavyCalculation(input), [input]);
```

---

## ✅ 3. `useLayoutEffect`

- **역할**: DOM이 그려지기 전(레이아웃이 완성되기 전)에 동기적으로 실행
- **주로 사용되는 경우**:
  - DOM 스타일 조작
  - 위치/크기 계산

```tsx
useLayoutEffect(() => {
  if (ref.current) {
    ref.current.style.background = "yellow";
  }
}, []);
```

---

## ✅ 4. `useId`

- **역할**: 서버사이드렌더링(SSR)에서도 충돌 없이 고유한 ID를 생성
- **주로 사용되는 경우**:
  - `label`과 `input`을 연결할 때
  - 여러 input 요소에 고유 id가 필요할 때

```tsx
const id = useId();
<input id={id} />
<label htmlFor={id}>이름</label>
```

---

## ✅ 5. `useTransition`

- **역할**: 낮은 우선순위 작업을 백그라운드로 처리해서 UI 반응 속도 향상
- **주로 사용되는 경우**:
  - 입력 지연 없이 대량 작업 처리
  - 사용자 입력을 빠르게 반응시키면서, 무거운 로직은 천천히 수행

```tsx
const [isPending, startTransition] = useTransition();
startTransition(() => {
  setList(heavyWork());
});
```

---

## ✅ 6. `useImperativeHandle`

- **역할**: 자식 컴포넌트에서 ref를 통해 부모가 특정 함수에 직접 접근할 수 있게 함
- **주로 사용되는 경우**:
  - 외부에서 자식 컴포넌트 내부 동작을 제어할 때 (ex. focus, clear 등)

```tsx
useImperativeHandle(ref, () => ({
  focus: () => { ... },
  clear: () => { ... }
}));
```

---

## 📦 전체 예제 페이지 구성

- `HookTest.tsx`:
  - LayoutEffectExample
  - IdExample
  - TransitionExample
  - ParentComponent (useImperativeHandle)

- `MemoTest.tsx`:
  - ExpensiveComponent (useMemo)
  - UseMemoExample
  - Parent (useCallback)
  - UseCallbackExample

---

> ✨ 이 훅들은 실무에서도 매우 자주 등장하며, **리렌더링 최적화**, **DOM 제어**, **UI 성능 개선**에 핵심적인 역할을 합니다.
