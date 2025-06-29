# Week03 리포트: 웹 요청과 응답의 본질 이해

## 📌 목차
1. 서론
2. HTTP의 Request/Response 구조
3. Ajax의 개념과 특징
4. forward와 redirect의 차이
---

## 1. 서론

웹 프로그래밍의 핵심은 **클라이언트와 서버 간의 데이터 통신 구조**를 이해하는 것이다. 이 리포트에서는 HTTP 프로토콜을 기반으로 한 요청(Request)과 응답(Response)의 구조를 학습하고, 이를 활용한 **Ajax 통신**, 그리고 서버 내부 동작 방식인 **forward와 redirect의 차이점**을 분석한다.

---

## 2. HTTP의 Request/Response 구조

### ▷ HTTP란?
HTTP(HyperText Transfer Protocol)는 **클라이언트(브라우저)**와 **서버** 간에 데이터를 주고받는 **무상태(stateless)**, **비연결형(connectionless)** 통신 프로토콜이다.

### ▷ 요청(Request) 구조
- **요청 메서드**: `GET`, `POST`, `PUT`, `DELETE`
- **요청 URL**: 서버의 자원을 지정
- **Header**: 인증, 캐시, 브라우저 정보 포함
- **Body**: (POST 등에서) 전달할 데이터 포함

### ▷ 응답(Response) 구조
- **상태 코드**: 200(성공), 404(없음), 500(서버 오류) 등
- **Header**: 데이터 형식, 쿠키 등
- **Body**: HTML, JSON, 이미지 등 실제 콘텐츠

**→ 핵심: HTTP는 항상 '요청 → 응답'의 흐름으로 작동한다.**

---

## 3. Ajax의 개념과 특징

### ▷ Ajax란?
Ajax(Asynchronous JavaScript and XML)는 **전체 페이지를 새로 고치지 않고**, **비동기적으로 서버와 통신하여** 웹 페이지의 일부분만 갱신하는 기술이다.

### ▷ 주요 특징
- 페이지 새로고침 없이 서버와 통신 가능
- `fetch()` 또는 `XMLHttpRequest`로 구현
- 주로 **JSON** 포맷으로 데이터 처리

### ▷ 코드 예시
```javascript
fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

**→ 핵심: Ajax는 비동기 통신을 통해 빠르고 동적인 사용자 경험을 가능하게 한다.**

---

## 4. forward와 redirect의 차이

### ▷ forward (서버 내부 이동)
- 서버 내부에서 다른 자원으로 이동
- **클라이언트는 URL 변화를 인지하지 못함**
- 요청 객체(request, response)가 유지됨

```java
RequestDispatcher dispatcher = request.getRequestDispatcher("result.jsp");
dispatcher.forward(request, response);
```

### ▷ redirect (클라이언트 재요청)
- 서버가 클라이언트에게 다른 URL로 **재요청을 유도**
- **URL 변경됨**
- 요청 객체가 유지되지 않음 (새 요청 발생)

```java
response.sendRedirect("result.jsp");
```

### ▷ 비교 표

| 구분      | forward                   | redirect                   |
|-----------|---------------------------|----------------------------|
| URL       | 변경되지 않음              | 변경됨                     |
| 요청 횟수 | 1회                        | 2회 (요청 + 재요청)        |
| 속도      | 빠름 (서버 내부 처리)       | 느림 (브라우저 새 요청)     |
| 데이터 유지 | 가능                      | 불가능                    |

**→ 핵심: forward는 내부 처리, redirect는 외부 안내 방식으로 사용 목적이 다르다.**

---
