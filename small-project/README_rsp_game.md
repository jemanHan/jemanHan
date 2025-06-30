# ✊✌️✋ 가위바위보 게임 (Rock Paper Scissors Game)

> HTML, CSS, JavaScript를 이용해 만든 웹 기반 미니 게임입니다.  
사용자는 가위/바위/보 중 하나를 클릭해 컴퓨터와 대결할 수 있으며, 결과와 승/무/패 통계가 실시간으로 표시됩니다.

## 📸 데모 이미지

| 화면 구성 | 설명 |
|-----------|------|
| ![게임화면](img/rock.png) | 버튼에 이미지를 삽입하여 직관적인 UI 제공 |
| ![결과화면](img/scissors.png) | 사용자가 고른 선택과 컴퓨터 선택을 하단에 시각화 표시 |
| ![리셋버튼](img/paper.png) | 리셋 버튼으로 통계 및 결과 초기화 가능 |

## 🛠️ 사용 기술

- **HTML**: 마크업 구조 (`<button>`, `<img>`, `<div>` 등)
- **CSS**: 레이아웃, 애니메이션, 배경 설정 및 hover 효과
- **JavaScript**:
  - `addEventListener`로 버튼 클릭 이벤트 처리
  - `Math.random()`을 통한 컴퓨터 선택
  - 이미지 동적 교체 및 결과 메시지 출력
  - 통계 저장 (`wins`, `draws`, `losses`)
  - `reset` 버튼으로 결과 초기화

## 🎮 기능 설명

- 플레이어는 가위/바위/보 중 하나를 클릭하여 선택
- 컴퓨터는 무작위로 선택
- 승/무/패 여부를 판단하여 결과를 출력
- 하단에 결과 이미지와 함께 실시간 통계 표시
- 리셋 버튼으로 게임 기록 초기화

## 💡 주요 코드 설명

```js
const rsp = ["Rock", "Scissors", "Paper"];
// 컴퓨터의 선택을 무작위로 설정
const computerPick = rsp[Math.floor(Math.random() * 3)];

function translatePick(pick) {
  if (pick === "Rock") return "바위";
  if (pick === "Scissors") return "가위";
  if (pick === "Paper") return "보";
}
```

```js
// 결과 판단
if (playerPick === computerPick) {
  draws++;
} else if (
  (playerPick === "Rock" && computerPick === "Scissors") ||
  ...
) {
  wins++;
} else {
  losses++;
}
```

```js
// 이미지 교체
playerImg.src = `img/${playerPick.toLowerCase()}.png`;
computerImg.src = `img/${computerPick.toLowerCase()}.png`;
```

## 📁 파일 구성

```
📦 가위바위보/
├─ index.html         # 메인 HTML 파일
├─ style.css          # 스타일 정의
├─ script.js          # 게임 로직 구현
├─ img/
│  ├─ rock.png
│  ├─ scissors.png
│  ├─ paper.png
│  └─ blank.png       # 초기 상태 이미지
```

## 🚀 시작 방법

1. 이 프로젝트를 클론하거나 다운로드합니다.
2. `index.html` 파일을 브라우저로 실행하세요.

## 🙌 만든 사람

- 개발자: [당신의 이름 또는 GitHub ID]
- 프로젝트 목적: 웹 기초 학습용 미니 프로젝트