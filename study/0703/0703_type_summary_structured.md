# 📚 0703 TypeScript 실습 요약

## 🧩 전체적인 학습 구조

| 영역 | 설명 | 예시 |
|------|------|------|
| **클래스 기반 객체지향** | 상태(속성) + 동작(메서드)을 가진 구조 정의 | `User`, `Product`, `Book`, `BankAccount`, `Counter` |
| **상속/다형성** | 부모 클래스를 상속하고 자식에서 동작을 다르게 정의 | `Animal → Dog, Cat`, `Shape → Rectangle, Circle` |
| **인터페이스/추상화** | 공통 규칙을 정의하고 클래스에 구현 강제 | `interface Animal`, `abstract Shape` |
| **제네릭(Generic)** | 다양한 타입을 하나의 함수/클래스로 처리 | `identity<T>()`, `getValue<K,V>()`, `Purchase<T,U>` |
| **정적(static) 속성/메서드** | 클래스 자체에 소속된 공통 기능 | `static counter`, `StaticClass.method()` |
| **메서드 오버로딩** | 같은 함수명으로 다양한 타입 처리 | `add(a: number, b: number)`, `add(a: string, b: string)` |
| **객체 관계 모델링** | 클래스 간 포함 관계로 현실 모델 표현 | `Order has User and Product`, `Car has Driver` |

---

## 🔧 자주 사용된 문법 요소들

| 문법 요소 | 설명 | 사용 위치 예시 |
|-----------|------|----------------|
| `class` | 클래스 정의 | 거의 모든 파일 |
| `constructor` | 초기 상태 설정 | `User`, `Product`, `Shape`, `Rectangle` 등 |
| `method()` | 클래스 내부 동작 정의 | `display()`, `bark()`, `getArea()` 등 |
| `extends` | 상속 | `Rectangle extends Shape` |
| `implements` | 인터페이스 구현 | `Dog implements Animal` |
| `abstract` | 추상 클래스/메서드 정의 | `abstract class Shape` |
| `private` / `#` | 캡슐화 (외부 접근 제한) | `BankAccount.#balance` |
| `static` | 클래스 수준 속성/메서드 | `StaticClass.staticCount` |
| `generic <T>` | 타입 일반화 | `identity<T>()`, `Order<TUser, TItem>` |
| `Record<K,V>` | 객체 키-값 제약 표현 | `getValue<K extends string, V>()` |

---

## 🧠 언제 이런 구조를 사용하나요?

| 상황 | 추천 구조 |
|------|-----------|
| **현실 세계의 개념을 코드로 표현** | 클래스, 객체 생성 |
| **공통 동작을 공유하는 여러 유형을 정의할 때** | 추상 클래스 + 상속 |
| **타입을 엄격하게 통제하면서 범용성 확보** | 제네릭 함수/클래스 |
| **외부 접근을 차단하고 내부 상태 보호** | `private`, `#` 필드 |
| **정책, 규약 같은 구조만 먼저 정의** | 인터페이스 |
| **공통 유틸리티, 카운터 등 공유 자원** | `static` 속성/메서드 |
| **사용자, 상품, 주문 같은 관계 표현** | 포함된 객체 속성 + 메서드 호출 |

---

## 🧩 학습을 통해 만들어진 예시 구조 요약

```ts
class User {
  userName: string;
}

class Product {
  productName: string;
  price: number;
}

class Order {
  user: User;
  product: Product;

  summary() {
    console.log(`${this.user.userName} → ${this.product.productName}`);
  }
}
```

➡ `User`, `Product` 간 관계를 `Order` 클래스가 조합  
➡ 실무에서의 **주문 시스템 모델링**처럼 사용됨

---

## 🏁 결론: 0703 실습의 학습 효과

| 효과 | 설명 |
|------|------|
| **객체지향적 사고 정립** | 현실 구조를 코드로 옮기는 사고 훈련 |
| **타입 안정성과 재사용성 확보** | 제네릭과 인터페이스, 추상 클래스의 조합 |
| **확장 가능한 코드 작성 능력 향상** | 하나의 로직을 다양한 상황에 대응하도록 설계 |
| **실무 모델링 연습** | 사용자/상품/주문 시스템을 코드로 구현 |