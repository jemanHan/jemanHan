//주먹 가위 보 배열 정의
const rsp = ["Rock", "Scissors", "Paper"]

// 영어 → 한글로 바꾸는 함수 
function translatePick(pick) {
  if (pick === "Rock") return "바위";
  if (pick === "Scissors") return "가위";
  if (pick === "Paper") return "보";
}

// 결과 저장변수 초기화
let wins = 0, draws = 0, losses = 0;

//HTML에서 결과와 통계를 출력할 요소 가져욤
const resultDiv = document.getElementById("result");
const statsDiv = document.getElementById("stats");
const resetButton = document.getElementById("reset");

//버튼에 이벤트를 연결
document.getElementById("rock").addEventListener("click", () => play("Rock"))
document.getElementById("scissors").addEventListener("click", () => play("Scissors"))
document.getElementById("paper").addEventListener("click", () => play("Paper"))


// 이미지 요소 가져오기
const playerImg = document.getElementById("player-img");
const computerImg = document.getElementById("computer-img");
//한 판 실행
function play(playerPick) {
  const computerPick = rsp[Math.floor(Math.random() * 3)];

  // 선택한 이미지로 교체
  playerImg.src = `img/${playerPick.toLowerCase()}.png`;
  computerImg.src = `img/${computerPick.toLowerCase()}.png`;

 
    if (playerPick === computerPick) {
    draws++;
    resultDiv.textContent = `비겼습니다. 당신: ${translatePick(playerPick)}, 컴퓨터: ${translatePick(computerPick)}`;
  }
  else if (
    (playerPick === "Rock" && computerPick === "Scissors") ||
    (playerPick === "Scissors" && computerPick === "Paper") ||
    (playerPick === "Paper" && computerPick === "Rock")
  ) {
    wins++;
    resultDiv.textContent = `이겼습니다!! 당신: ${translatePick(playerPick)}, 컴퓨터: ${translatePick(computerPick)}`;
  }
  else {
    losses++;
    resultDiv.textContent = `졌습니다ㅠㅠ 당신: ${translatePick(playerPick)}, 컴퓨터: ${translatePick(computerPick)}`;
  }

  statsDiv.textContent = `${wins}승 ${draws}무 ${losses}패`;
}

resetButton.addEventListener("click", () => {
  wins = 0;
  draws = 0;
  losses = 0;
  statsDiv.textContent = "0승 0무 0패";
  resultDiv.textContent = "결과";
});