# 📘 React 학습 정리 - 2025-07-08

## ✅ 주요 학습 주제
- React 기본 구조 이해
- 함수형 컴포넌트 (Function Component)
- 클래스형 컴포넌트 (Class Component)
- props 개념과 타입 지정
- 이벤트 처리 (`onClick`)
- JSX 구조

---

## 1️⃣ 함수형 컴포넌트 예제

```tsx
type GreetingProps = { name: string };

function Greeting({ name }: GreetingProps) {
  return <p>Hello, {name}</p>;
}
```

### 🔍 설명
- `props`를 구조 분해 할당으로 받음
- TypeScript에서 props 타입 지정
- JSX로 HTML 구조 반환

---

## 2️⃣ 클래스형 컴포넌트 예제

```tsx
type ClassComponentProps = {
  href: string;
  text: string;
};

export default class ClassComponent extends Component<ClassComponentProps> {
  render() {
    const { href, text } = this.props;
    return (
      <li>
        <a href={href}>
          <p>{text}</p>
        </a>
      </li>
    );
  }
}
```

### 🔍 특징
- `this.props`로 props 접근
- 함수형보다 장황하지만 상태 관리나 생명주기에서 유리

---

## 3️⃣ JSX 문법 요약

| JSX 특징 | 설명 |
|----------|------|
| HTML 유사 문법 | JavaScript 내부에서 사용 가능 |
| `class` → `className` | CSS 클래스 지정 시 주의 |
| 반드시 태그 하나로 감싸야 함 | ex: `<div>...</div>` |

---

## 4️⃣ props 개념 정리

| 용어 | 의미 |
|------|------|
| props | 부모 컴포넌트가 자식에게 전달하는 읽기 전용 데이터 |
| 구조 분해 | `function Greeting({ name })` 형태로 간단히 추출 |
| 타입 정의 | `type Props = { name: string }` |
---

## ✅ 정리 요약

| 항목 | 요약 |
|------|------|
| 구조 | 함수형/클래스형 컴포넌트 비교 |
| 문법 | props 전달, JSX 작성 방식 |
| 실습 | props 기반 링크 출력, onClick 이벤트 작성 |

