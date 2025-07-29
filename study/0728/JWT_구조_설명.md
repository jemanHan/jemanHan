# 🛡️ JWT(JSON Web Token) 구조와 설명

JWT는 로그인 인증이나 사용자 정보 전달에 많이 쓰이는 **안전한 토큰 형식**입니다.  
3개의 부분으로 나뉘고, 각각 Base64로 인코딩되어 점(`.`)으로 연결됩니다.

---

## ✅ JWT 구조

```
xxxxx.yyyyy.zzzzz
  │     │      └── Signature (서명)
  │     └──────── Payload (내용)
  └────────────── Header (헤더)
```

---

## 🔍 각 부분 설명

### 1. 📦 Header (헤더)

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

- **alg**: 서명에 사용되는 알고리즘 (예: HS256)
- **typ**: 토큰의 타입 (JWT 고정)
- Base64 인코딩됨 → `xxxxx`

---

### 2. 🧾 Payload (페이로드)

```json
{
  "sub": "1234567890",
  "name": "Jane Doe",
  "admin": true,
  "exp": 1722129600
}
```

- 실제로 담고 싶은 사용자 정보가 들어감
- 클레임(claim)이라 부르며, 만료시간(`exp`)도 여기에 포함됨
- Base64 인코딩됨 → `yyyyy`

---

### 3. 🔐 Signature (서명)

```text
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
```

- 앞의 Header와 Payload를 비밀 키(`secret`)로 서명한 값
- 위조 방지 역할
- 서명이 유효하지 않으면 토큰도 무효

---

## ✅ 사용 예시 (Node.js / Express)

```ts
import jwt from "jsonwebtoken";

const token = jwt.sign(
  { userId: 1, role: "admin" }, // Payload
  "my-secret-key", // Secret Key
  { algorithm: "HS256", expiresIn: "1h" } // Header + 옵션
);

const decoded = jwt.verify(token, "my-secret-key");
console.log(decoded); // { userId: 1, role: 'admin', iat: ..., exp: ... }
```

---

## 🧠 요약 비교

| 구분      | 내용                | 역할                     |
| --------- | ------------------- | ------------------------ |
| Header    | alg, typ            | 어떤 알고리즘 사용할지   |
| Payload   | sub, name, exp 등   | 사용자 정보 등 실제 내용 |
| Signature | 서명 (비밀 키 기반) | 위조 방지, 신뢰 보장     |
