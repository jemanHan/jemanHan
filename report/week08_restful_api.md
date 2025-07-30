
# 🗓️ 8주차 학습 정리 (7.28 ~ 8.3)  
## 📌 주제: RESTful API의 개념과 설계

---

## 1. REST란?
**REST**(Representational State Transfer)는 **웹의 자원을 HTTP 기반으로 표현하고 조작하는 아키텍처 스타일**이다.  
REST는 상태를 서버에 저장하지 않으며, **클라이언트-서버 구조, 무상태성, 캐시 처리 가능성, 계층 구조** 등의 원칙을 따른다.

---

## 2. REST의 6가지 아키텍처 제약 조건
1. **Client-Server 구조**
2. **Stateless (무상태성)**  
   → 서버는 요청 간 클라이언트의 상태를 저장하지 않음
3. **Cacheable**  
   → HTTP 기반으로 캐싱 가능
4. **Uniform Interface (일관된 인터페이스)**  
   → URI와 HTTP 메서드만으로 자원 식별 및 조작
5. **Layered System**  
   → 중간 서버(프록시, 게이트웨이) 허용
6. **Code on Demand (선택 사항)**  
   → JS 같은 스크립트를 클라이언트에 전달 가능

---

## 3. HTTP 메서드와 CRUD 매핑

| HTTP 메서드 | 설명 | CRUD 기능 |
|-------------|------|-----------|
| GET | 리소스 조회 | Read |
| POST | 리소스 생성 | Create |
| PUT | 리소스 전체 수정 | Update |
| PATCH | 리소스 일부 수정 | Update |
| DELETE | 리소스 삭제 | Delete |

---

## 4. RESTful 엔드포인트 설계 원칙

- **명사 기반 URI** 사용  
  예: `/users`, `/products/:id`, `/orders/:orderId`

- **HTTP 메서드로 동작 정의**
  - `/users` + GET → 사용자 목록 조회
  - `/users` + POST → 사용자 생성
  - `/users/1` + PUT → 사용자 1번 수정

- **슬래시는 계층 표현**, **언더스코어(_)는 지양**
- **필요한 경우 쿼리 파라미터로 필터링**
  - 예: `/users?role=admin`

---

## 5. Express + MongoDB 기반 REST API 예제

### ✅ 기본 구조
```
project/
├── server.js
├── routes/
│   └── userRoutes.js
├── controllers/
│   └── userController.js
└── models/
    └── userModel.js
```

---

### ✅ 예시 코드

#### server.js
```js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

mongoose.connect('mongodb://localhost:27017/restfulDB');

app.listen(3000, () => console.log('Server running on port 3000'));
```

#### models/userModel.js
```js
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String
});
module.exports = mongoose.model('User', UserSchema);
```

#### controllers/userController.js
```js
const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.createUser = async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json(newUser);
};
```

#### routes/userRoutes.js
```js
const express = require('express');
const router = express.Router();
const { getAllUsers, createUser } = require('../controllers/userController');

router.get('/', getAllUsers);
router.post('/', createUser);

module.exports = router;
```

---

## ✅ 요약

- REST는 **자원을 URI로 표현하고**, **행위는 HTTP 메서드로 나타내는 방식**
- RESTful API는 일관된 설계 규칙을 지키는 것이 중요함
- Express.js는 REST API를 빠르게 구성하기에 적합한 백엔드 프레임워크
- MongoDB는 JSON 기반 문서형 DB로, Node.js와 잘 어울림
