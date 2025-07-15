function identity<T>(value: T): T {
    return value
}


let outputS = identity<string>("Hello")
console.log(outputS);

let outputN = identity<number>(100)
console.log(outputN);

//====================================================================================================
// ✅ 제네릭 함수 정의: getValue
// - K는 문자열(string) 타입인 키만 가능
// - V는 해당 키의 값 타입
// - obj는 키-값 구조의 객체이며, key는 그 중 하나의 키
function getValue<K extends string, V>(obj: Record<K, V>, key: K): V {
    // 🔸 obj[key]로 접근한 값을 그대로 반환
    return obj[key];
}
// ✅ 사용자 정보를 담은 객체 userInfo 정의
// - name, age, job 모두 문자열 키 (string 타입)이며,
//   각각 string 또는 number 값을 가짐
let userInfo = {
    name: "Alice",       // string
    age: 30,             // number
    job: "Developer"     // string
};
// ✅ getValue 함수 호출
// - obj: userInfo 객체
// - key: "age" 라는 문자열 리터럴 (userInfo의 키 중 하나)
// - TypeScript는 K = "age", V = number로 자동 추론
// 결과적으로 `userInfo["age"]` → 30이 반환됨
const value = getValue(userInfo, "age"); // 🔹 30
// ✅ 결과 출력
console.log(value); // 🔹 콘솔에 30 출력됨

// ✅ 1. name (string) 값 가져오기
const nameValue = getValue(userInfo, "name"); // "Alice"
console.log(nameValue); // 출력: Alice

// ✅ 2. job (string) 값 가져오기
const jobValue = getValue(userInfo, "job"); // "Developer"
console.log(jobValue); // 출력: Developer

// ✅ 3. age (number) 값 가져오기
const ageValue = getValue(userInfo, "age"); // 30
console.log(ageValue); // 출력: 30