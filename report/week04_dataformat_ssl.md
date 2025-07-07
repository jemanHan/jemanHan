## ✅ 주제: 데이터 교환 포맷 및 시리얼라이징 이해

---

## 1. 🔄 데이터 교환 포맷 비교: JSON, XML, YAML

| 포맷 | 구조 | 가독성 | 사용 예시 | 장점 | 단점 |
|------|------|--------|-----------|------|------|
| **JSON** (JavaScript Object Notation) | `{key: value}` 형태의 중괄호 구조 | 좋음 | 웹 API, 프론트엔드 ↔ 백엔드 데이터 전송 | 경량, JS와 호환성 우수 | 주석 불가 |
| **XML** (eXtensible Markup Language) | `<태그>내용</태그>` 형태의 태그 구조 | 중간 | 오래된 시스템, RSS, SOAP | 엄격한 스키마 가능 | 길고 무거움 |
| **YAML** (YAML Ain’t Markup Language) | `key: value`의 들여쓰기 기반 | 매우 좋음 | 설정파일 (Kubernetes, GitHub Actions 등) | 간결, 주석 가능 | 들여쓰기 오류 발생 가능 |

### 📌 요약
- **JSON**: 표준화된 데이터 전송 포맷, 대부분의 API에서 기본 사용
- **XML**: 태그 기반 구조, 호환성은 높지만 무겁다
- **YAML**: 가독성 최고, 설정파일에 적합

---

## 2. 🧪 시리얼라이징(Serialization)이란?

### 🔍 개념
- **객체(Object) → 문자열(String) or 바이트(Byte)로 변환하는 과정**
- 전송, 저장, 로깅 등을 위해 사용됨
- 역직렬화(Deserialization)는 그 반대 과정

### 🧩 사용 예
- JavaScript → `JSON.stringify(obj)`
- Python → `json.dumps(obj)` / `pickle.dumps(obj)`
- Java → `ObjectOutputStream`

```js
// 예시 (JavaScript)
const user = { name: "Alice", age: 30 };
const json = JSON.stringify(user); // 직렬화
const obj = JSON.parse(json);      // 역직렬화
```

---

## 3. 🔐 HTTPS & SSL 인증서 기초

### ✅ HTTPS란?
- **HTTP + SSL/TLS**
- 암호화된 안전한 통신 채널을 제공
- 주소창에 🔒 자물쇠 표시

### ✅ SSL 인증서란?
- **서버의 신원을 증명**하고, **데이터 암호화**를 가능하게 해주는 전자 문서
- 보안 인증기관(CA)에서 발급

### 🔐 SSL 인증서 동작 방식 요약
1. 클라이언트가 서버에 접속
2. 서버는 SSL 인증서 전송
3. 클라이언트는 인증서를 검증 (CA, 만료일, 도메인 일치 여부 등)
4. 암호화 키 교환 → 이후 데이터는 암호화된 채널로 송수신

### 📋 인증서 종류
- DV (Domain Validation): 도메인 소유 확인
- OV (Organization Validation): 조직 정보 포함
- EV (Extended Validation): 법적 실체 검증까지 진행 (초록 주소창)

---

## 💡 학습 포인트 요약

- JSON은 웹 개발에 가장 널리 사용되는 포맷
- YAML은 설정파일에 자주 사용됨 (주의: 들여쓰기)
- XML은 레거시 시스템과 문서 구조 표현에 적합
- 직렬화는 데이터를 전송·저장하기 위한 필수 기술
- HTTPS는 데이터 전송을 **암호화**하여 안전하게 만듦
- SSL 인증서를 통해 서버의 신뢰성과 보안을 확보함
