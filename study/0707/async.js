// ✅ 1. 기본 비동기 처리 - Promise + setTimeout
// 👉 주로 시간이 걸리는 작업(서버 요청 등)을 흉내낼 때 사용
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data received");
        }, 1000); // 1초 후 resolve 실행
    });
}

// 👉 then()을 사용해 결과를 처리 (전통적인 Promise 처리 방식)
fetchData().then((data) => console.log(`then 사용: ${data}`));

// 👉 Promise 객체 자체를 출력하면 아직 대기 중인 상태 (<pending>)
console.log(fetchData()); // 실제 데이터가 아니라 Promise 객체 출력

// ✅ 2. async/await 예제
// 👉 비동기 처리를 동기식처럼 깔끔하게 작성할 수 있음
async function loadData() {
    const result = await fetchData(); // fetchData()의 완료를 기다림
    console.log(`await 사용: ${result}`);
}
// loadData(); // 호출 시 실행됨

// ✅ 3. 실전 예제 - 유저 정보 가져오기
// 👉 실제 비동기 요청(예: API 호출)에서 사용자 데이터를 가져올 때 사용
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "Alice", age: 25 }); // 유저 정보 반환
        }, 1000); // 1초 후 유저 정보 전달
    });
}

async function showUser() {
    console.log("유저 정보 로딩중..."); // 진행 상황 표시
    const user = await getUser(); // 유저 정보가 올 때까지 대기
    console.log(`이름: ${user.name}, 나이: ${user.age}`); // 유저 정보 출력
}
// showUser(); // 필요 시 실행

// ✅ 4. try...catch로 에러 처리
// 👉 서버 통신, 파일 읽기 등 실패 가능성이 있는 비동기 작업 처리 시 사용
async function load() {
    try {
        const data = await fetch("http://example.com"); // 데이터 요청
        const json = await data.json(); // JSON 파싱
        console.log("서버 데이터:", json); // 출력
    } catch (err) {
        // 👉 네트워크 오류, 응답 에러 등 예외 처리
        console.log("데이터 로딩 실패", err);
        return "John"; // 기본 값 반환 등 대체 처리 가능
    }
}
// load();

// ✅ 5. await 병렬 처리 - Promise.all()
// 👉 독립적인 여러 요청을 병렬로 실행하고, 결과를 한 번에 받고 싶을 때 사용
const p1 = fetch("http://example.com/data1");
const p2 = fetch("http://example.com/data2");

async function test() {
    // 👉 두 요청이 끝날 때까지 모두 기다림 (동시에 실행됨)
    const [res1, res2] = await Promise.all([p1, p2]);
    console.log("병렬 처리 결과:");
    console.log("res1:", res1); // 첫 번째 요청 결과
    console.log("res2:", res2); // 두 번째 요청 결과
}
// test();

// ✅ 과제 1: 간단한 비동기 함수 만들기
// 👉 특정 시간(ms)만큼 대기한 후 작업을 실행할 때 사용

// ⏱ 지정한 시간(ms) 후 resolve되는 Promise 반환
function delay(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// 👉 2초 후 콘솔에 "hello" 출력
async function helloAfter2s(){
    await delay(2000); // 2초 기다림
    console.log("2초 후 hello"); // 출력
}

helloAfter2s(); // 실행
