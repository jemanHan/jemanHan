# 📘 폰 노이만 아키텍처의 동작 원리

## 1. 개요

폰 노이만 아키텍처(Von Neumann Architecture)는 현대 컴퓨터의 기본 구조를 설명하는 개념으로, 1945년 존 폰 노이만이 제안한 **프로그램 내장 방식(Stored-Program Concept)**을 기반으로 한다. 이는 프로그램(명령어)과 데이터를 **하나의 기억장치에 함께 저장**하고, **CPU가 순차적으로 명령어를 처리**하는 방식이다.

---

## 2. 주요 구성 요소

- **중앙처리장치(CPU)**
  - **제어장치(Control Unit)**: 명령어를 해석하고 각 구성 요소에 제어 신호를 보냄
  - **산술논리연산장치(ALU)**: 덧셈, 뺄셈, 논리연산 등의 작업 수행

- **기억장치(Memory)**  
  - 명령어와 데이터를 함께 저장하는 공간

- **입출력장치(I/O Devices)**  
  - 사용자와 컴퓨터 간의 정보 교환 (예: 키보드, 모니터)

- **버스(Bus)**
  - **데이터 버스**: 데이터 전달
  - **주소 버스**: 메모리 주소 지정
  - **제어 버스**: 동작 제어 신호 전달

---

## 3. 동작 순서 (명령어 사이클)

컴퓨터는 다음과 같은 절차로 명령어를 처리한다:

1. **인출(Fetch)**  
   - CPU가 기억장치에서 현재 명령어를 가져옴

2. **해석(Decode)**  
   - 제어장치가 명령어의 의미를 분석

3. **실행(Execute)**  
   - ALU 또는 메모리에서 해당 작업 수행

4. **저장(Store)**  
   - 연산 결과를 메모리나 레지스터에 저장

5. **반복(Repeat)**  
   - 다음 명령어를 실행하기 위해 프로그램 카운터(PC)가 다음 주소로 이동

---

## 4. 특징과 한계

### ✅ 장점
- 프로그램과 데이터를 함께 저장하여 처리의 유연성 증가
- 구조가 단순하여 구현이 용이함

### ❌ 단점 (폰 노이만 병목 현상)
- 하나의 버스로 명령어와 데이터를 처리 → CPU와 메모리 사이의 전송 속도 제한
- 병렬처리에 비해 성능이 떨어질 수 있음

---

## 5. 결론

폰 노이만 아키텍처는 오늘날 대부분의 범용 컴퓨터가 따르는 기본적인 구조로, 프로그램을 기억장치에 저장하고, 이를 순차적으로 처리하는 방식이다. 비록 성능상의 한계가 존재하지만, 이해하기 쉽고 실용적인 구조로 컴퓨터 과학의 기초가 된다.



---


---


# 🌐 HTML 시멘틱 태그의 역할 & DOM(Document Object Model) 조사

## 1. HTML 시멘틱 태그란?

HTML 시멘틱(Semantic) 태그란 **웹 문서의 구조와 의미를 명확하게 표현하는 태그**를 말한다. 단순히 외형을 구성하는 것이 아니라, 태그 이름만 보고도 내용의 **의도와 역할**을 쉽게 알 수 있도록 설계되었다.

### ✅ 주요 시멘틱 태그와 역할

| 태그 | 의미 및 용도 |
|------|----------------|
| `<header>` | 문서나 섹션의 머리말(로고, 네비게이션 등 포함) |
| `<nav>` | 주요 탐색 링크를 담는 영역 |
| `<main>` | 문서의 핵심 콘텐츠 (문서당 한 번만 사용) |
| `<section>` | 관련된 콘텐츠 그룹 (소제목 포함 가능) |
| `<article>` | 독립적으로 구분되는 콘텐츠 (예: 블로그 글, 뉴스 기사) |
| `<aside>` | 부가 콘텐츠 (광고, 링크, 관련 정보 등) |
| `<footer>` | 문서나 섹션의 맨 아래 영역 (저작권, 연락처 등) |

### 🎯 시멘틱 태그의 장점

- **접근성 향상**: 스크린 리더가 문서 구조를 쉽게 파악  
- **SEO 최적화**: 검색 엔진이 콘텐츠 의미를 정확히 이해  
- **유지 보수 용이성**: 코드 가독성 향상으로 협업에 유리  

---

## 2. DOM (Document Object Model)이란?

DOM(Document Object Model)은 HTML, XML 문서를 **계층적 트리 구조**로 표현한 모델로, 웹 페이지를 **프로그래밍적으로 조작할 수 있게** 해준다.

### 📂 DOM 구조 예시

```html
<body>
  <h1>제목</h1>
  <p>본문 내용</p>
</body>
```

→ DOM 트리 구조:
```
Document
└── html
    └── body
        ├── h1
        └── p
```

### ⚙️ DOM의 역할

- **문서 구조화**: HTML 요소를 노드로 구성 (요소 노드, 텍스트 노드 등)
- **자바스크립트와의 연결고리**: JS로 요소 추가, 삭제, 변경 가능
- **동적 웹 페이지 구현**: 이벤트 기반 조작 (예: 버튼 클릭 시 콘텐츠 변경)

### 🛠 주요 DOM 메서드

| 메서드 | 설명 |
|--------|------|
| `getElementById()` | 특정 ID를 가진 요소 선택 |
| `querySelector()` | CSS 선택자 기반 요소 선택 |
| `createElement()` | 새 HTML 요소 생성 |
| `appendChild()` | 요소를 부모 노드에 추가 |
| `addEventListener()` | 이벤트 리스너 등록 |

---

## 3. 결론

HTML 시멘틱 태그는 웹 문서의 의미를 명확히 하여 **접근성과 유지 보수성을 높이고**, DOM은 그 구조를 바탕으로 웹 페이지를 **동적으로 제어할 수 있는 핵심 기술**이다. 두 개념은 현대 웹 개발의 필수 요소이며, 자바스크립트와 함께 사용되어 **인터랙티브하고 의미 있는 웹 페이지 구현**에 기여한다.
