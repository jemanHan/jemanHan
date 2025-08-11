# 9주차 (2025-08-04 ~ 2025-08-10)

# CORS 정책과 웹 보안 기본 개념

> 목표: **Same-Origin Policy(SOP)**, **Origin**, **CORS 흐름**, **Headers**, **Preflight(OPTIONS)** 를 초심자 눈높이에서 이해하고, 프론트/백엔드에서 **정확히 설정**하고 **디버깅**할 수 있게 한다.

---

## TL;DR (핵심 요약)

- **SOP(동일 출처 정책)**: 브라우저는 보안을 위해 **다른 출처**의 리소스에 대한 JS 접근을 제한한다.
- **CORS**: 서버가 특정 출처(Origin)에 한해 **접근을 허용**하도록 브라우저에게 알려주는 **헤더 기반 규약**.
- **Simple Request**만 예외적으로 사전검사(Preflight) 없이 바로 간다. 그 외는 **OPTIONS Preflight** → OK면 실제 요청.
- 서버는 `Access-Control-Allow-*` 헤더로 허용 범위를 명시한다. 프론트는 `fetch`의 `mode/credentials`를 의도대로 설정.
- **보안 포인트**: CORS는 _악의적 요청 자체를 막지 않는다_. **CSRF 방어(토큰, SameSite)**, **인증/권한**을 별도로 설계해야 한다.

---

## 1) Same-Origin Policy & Origin이란?

**Origin = scheme(프로토콜) + host(도메인/IP) + port**

- 예: `https://example.com:443` 의 Origin은 `https + example.com + 443`
- 이 셋 중 하나라도 다르면 **cross-origin** (교차 출처)로 간주.

**SOP**는 브라우저가 **스크립트 기반 접근**(XHR/Fetch/DOM)에 대해 **다른 Origin**을 제한하는 정책. → 사용자 데이터 탈취 방지.

> 이미지 `<img>`, `<script>`, `<link>` 등 일부 태그는 역사적 이유로 비교적 완화되어 로드가 가능하지만, **응답 본문을 JS로 읽는 것**은 SOP/CORS 적용 대상이다.

---

## 2) 왜 CORS가 필요한가?

하나의 프론트(예: `http://localhost:5173`)가 다른 백엔드(예: `http://localhost:3000`) API를 호출하면 **교차 출처**다. 이때 브라우저는 **서버가 허용했다는 신호(헤더)**가 있어야 응답을 JS에 넘겨 준다. 이 신호를 **CORS 응답 헤더**로 표현한다.

---

## 3) Simple Request vs Preflight

### Simple Request (사전검사 없음)

- **메서드**: `GET`, `HEAD`, `POST`
- **헤더**: 브라우저가 자동 붙이는 **단순 헤더만**(Accept, Accept-Language, Content-Language, Content-Type 제한)
- **Content-Type**: `text/plain`, `application/x-www-form-urlencoded`, `multipart/form-data` 중 하나

위 조건을 만족하면 브라우저는 바로 요청을 보내고, 응답에서 CORS 허용을 확인한다.

### Preflight (OPTIONS 사전검사)

아래 중 하나라도 해당하면 브라우저는 먼저 **OPTIONS**로 서버에 문의한다.

- `PUT`, `DELETE`, `PATCH` 같은 **비단순 메서드** 사용
- `Authorization`, `X-Requested-With` 등 **커스텀 헤더** 첨부
- `Content-Type: application/json` 같은 **비단순 Content-Type** 사용

**흐름**:

1. 브라우저: `OPTIONS /api/items` (헤더로 실제 요청의 메서드/헤더를 알림)
2. 서버: 허용 시 `Access-Control-Allow-*` 헤더들로 응답 (상태코드 204/200)
3. 브라우저: 실제 요청 전송

#### 예시: Preflight 요청/응답

```
# Request (Browser → Server)
OPTIONS /api/items HTTP/1.1
Origin: http://localhost:5173
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type, authorization

# Response (Server → Browser)
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: http://localhost:5173
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: content-type, authorization
Access-Control-Max-Age: 600
Vary: Origin
```

---

## 4) CORS 관련 핵심 응답 헤더 정리

- **`Access-Control-Allow-Origin`**: 허용할 Origin. 예: `http://localhost:5173` 또는 `*`(모든 출처)
  - **주의**: `*`와 **쿠키 전송(`Allow-Credentials: true`)은 함께 못 쓴다**.
- **`Access-Control-Allow-Methods`**: 허용 메서드 목록 (예: `GET, POST, PUT, DELETE, OPTIONS`)
- **`Access-Control-Allow-Headers`**: 클라이언트가 보낼 수 있는 커스텀 헤더 허용 목록
- **`Access-Control-Allow-Credentials`**: `true`면 쿠키/인증정보 전송 허용
- **`Access-Control-Expose-Headers`**: JS에서 읽을 수 있도록 노출할 응답 헤더 목록 (예: `X-Total-Count`)
- **`Access-Control-Max-Age`**: Preflight 결과 캐시 (초). 크면 Preflight 횟수 감소
- **`Vary: Origin`**: 캐시 서버가 Origin별로 응답을 구분하도록 지시 (중요!)

---

## 5) Credentials & 쿠키 (SameSite)

- 프론트에서 `credentials: 'include'`로 쿠키를 포함해 요청하려면:
  1. 서버 응답에 `Access-Control-Allow-Credentials: true`
  2. 서버 응답의 `Access-Control-Allow-Origin`은 **정확한 Origin**이어야 함(`*` 불가)
- 쿠키 보안 속성:
  - `Secure`(HTTPS 전용), `HttpOnly`(JS 접근 금지), `SameSite=Lax/Strict/None`
  - 크로스 사이트에서 쿠키를 사용하려면 보통 `SameSite=None; Secure` 필요

---

## 6) 프론트엔드 fetch 설정 예시

```js
// 단순 요청 (preflight 회피)
fetch("http://localhost:3000/api/ping", {
  method: "GET",
  mode: "cors",
});

// JSON POST (preflight 발생: application/json)
fetch("http://localhost:3000/api/items", {
  method: "POST",
  mode: "cors",
  headers: { "Content-Type": "application/json", Authorization: "Bearer xxx" },
  credentials: "include", // 쿠키/세션 필요 시
  body: JSON.stringify({ name: "apple" }),
});
```

---

## 7) 백엔드 설정 예시

### (1) Express 간단 설정 — cors 미들웨어

```js
// npm i express cors
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["X-Total-Count"],
    maxAge: 600,
  })
);
// (선택) 모든 라우트에 대한 OPTIONS 처리
app.options("*", cors());

app.get("/api/ping", (req, res) => res.json({ ok: true }));

app.listen(3000, () => console.log("API on http://localhost:3000"));
```

### (2) Express 수동 헤더 설정 (원리 이해용)

```js
app.use((req, res, next) => {
  const origin = req.headers.origin;
  const allowList = new Set(["http://localhost:5173"]);
  if (allowList.has(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Vary", "Origin");
  }
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Expose-Headers", "X-Total-Count");

  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});
```

### (3) Flask — flask-cors 사용

```py
# pip install flask flask-cors
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(
    app,
    resources={r"/api/*": {
        "origins": ["http://localhost:3000", "http://localhost:5173"],
        "supports_credentials": True,
        "expose_headers": ["X-Total-Count"],
        "max_age": 600
    }}
)

@app.route('/api/ping')
def ping():
    return jsonify({"ok": True})

if __name__ == '__main__':
    app.run(port=5000)
```

### (4) NGINX 리버스 프록시 (API와 프론트를 같은 Origin으로 묶기)

```nginx
location /api/ {
  proxy_pass http://backend:3000;

  add_header Access-Control-Allow-Origin $http_origin always;
  add_header Access-Control-Allow-Credentials true always;
  add_header Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS" always;
  add_header Access-Control-Allow-Headers "Content-Type, Authorization" always;
  add_header Access-Control-Expose-Headers "X-Total-Count" always;
  add_header Access-Control-Max-Age 600 always;
  add_header Vary Origin always;

  if ($request_method = OPTIONS) {
    return 204;
  }
}
```

> 실전 팁: 프론트와 API를 **같은 도메인** 아래로 reverse proxy하면 CORS 자체를 피할 수 있다. (ex. `/api`를 같은 Origin으로 서비스)

---

## 8) 로컬 개발에서 프록시 활용

- **Vite** (`vite.config.ts`)

```ts
export default {
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
};
```

- **CRA**: `package.json`에 `"proxy": "http://localhost:3000"`
- **Next.js**: `rewrites`/`proxy` 설정으로 API를 같은 Origin처럼 사용

---

## 9) 디버깅 체크리스트

1. **네트워크 탭**에서 실제 응답에 `Access-Control-Allow-*`가 있는지 확인 (Preflight/실요청 둘 다)
2. `Allow-Origin` 값이 **정확한 Origin**인지 (`*` + Credentials 조합 금지)
3. `Allow-Headers`에 실제로 보내는 커스텀 헤더가 포함됐는지
4. `OPTIONS` 라우트가 404/405가 아닌지 (Preflight 단계에서 막히는지)
5. `Vary: Origin` 누락으로 캐시가 잘못 재사용되는지
6. 서버/프록시(NGINX, CloudFront 등) 중간 계층이 헤더를 **삭제/변경**하지 않는지
7. 진짜 CORS 이슈인지 **단순 404/500**인지 구분 (콘솔 메시지에 현혹되지 말기)

---

## 10) 보안 관점 주의점 (CORS ≠ CSRF)

- CORS는 **브라우저가 응답을 JS에 전달해도 되는지**를 판단하는 규약일 뿐, 공격자가 요청을 보내는 것 자체를 막지 못한다.
- **CSRF 방어**는 별도로 준비: CSRF 토큰, `SameSite` 쿠키, Referer/Origin 검증 등.
- 민감 API는 **인증/인가**(JWT/세션), **속도 제한**, **입력 검증**을 반드시 적용.

---

## 11) 흔한 콘솔 에러 & 원인/해결

### 에러 A

> _has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present ..._

- **원인**: 서버 응답에 `Access-Control-Allow-Origin` 누락
- **해결**: 서버에서 허용 Origin 지정, Preflight 응답도 함께 설정

### 에러 B

> _Response to preflight request doesn't pass access control check ..._

- **원인**: `OPTIONS` 응답에 허용 메서드/헤더가 부족, 혹은 상태코드 4xx/5xx
- **해결**: `Access-Control-Allow-Methods/Headers` 보강, `OPTIONS` 204/200으로 처리

### 에러 C

> _Unexpected token '<', "<!doctype" is not valid JSON_

- **원인**: 서버가 **JSON 대신 HTML(에러 페이지/정적 파일)** 을 반환 → **라우트 404**거나 템플릿 응답
- **해결**: API 경로/메서드 확인, 서버에서 `res.json(...)` 또는 올바른 MIME으로 응답

---

## 12) 실습: 가장 작은 예제

### 서버(Express)

```js
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.post("/api/echo", (req, res) => res.json({ youSent: req.body }));
app.listen(3000);
```

### 클라이언트(브라우저 콘솔)

```js
fetch("http://localhost:3000/api/echo", {
  method: "POST",
  headers: { "Content-Type": "application/json" }, // preflight 유발
  body: JSON.stringify({ msg: "hello" }),
})
  .then((r) => r.json())
  .then(console.log);
```

---

## 13) 퀵 퀴즈 (직접 말로 설명해보기)

1. `application/json` 본문이 왜 Preflight를 유발하는지?
2. `Allow-Origin: *`과 `Allow-Credentials: true`를 같이 쓰면 안 되는 이유?
3. CORS와 CSRF의 차이점을 **사용자 공격 시나리오**로 구분해서 설명해보기.
4. `Vary: Origin`이 빠지면 어떤 캐싱 문제가 생길까?

---

## 부록: cURL로 Preflight 흉내내기

```bash
curl -i -X OPTIONS http://localhost:3000/api/items   -H "Origin: http://localhost:5173"   -H "Access-Control-Request-Method: POST"   -H "Access-Control-Request-Headers: content-type, authorization"
```

---

## 체크리스트 (프로덕션)

- [ ] 프론트/백엔드 **같은 도메인**으로 묶을 수 있는지(Reverse Proxy)
- [ ] Origin **화이트리스트** 기반 허용
- [ ] Credentials 필요한 엔드포인트만 `Allow-Credentials: true` + 정확한 Origin
- [ ] Preflight 캐시(`Max-Age`)와 `Vary: Origin` 설정
- [ ] CSRF 대책(SameSite, 토큰)
- [ ] 로그/모니터링: Preflight 실패율, 4xx/5xx 추적

---

### 참고 키워드

Same-Origin Policy, Cross-Origin Resource Sharing, Preflight, OPTIONS, Access-Control-Allow-Origin, Credentials, SameSite Cookie, CSRF, Reverse Proxy, Vite Proxy, NGINX
