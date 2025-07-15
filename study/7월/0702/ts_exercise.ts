// // 1. 타입에 맞는 값만 허용
// function printAge(age: number) {
//     if (typeof age !== "number") {
//         throw new Error("숫자만 허용합니다");
//     }
//     console.log(`${age}`);
// }
// printAge(20);

// // 2. 커스텀 타입 검사 함수 만들기
// type UserInput = string | number;

// // 타입 가드 함수
// function isString(input: UserInput): input is string {
//     return typeof input === "string";
// }

// // 예시 함수: 상태 코드 처리
// function getStatus(code: number): "success" | "error" {
//     if (code === 200) return "success";
//     return "error";
// }

// // 3. 문자열일 때만 길이 출력
// function showLength(input: string | number) {
//     if (typeof input === "string") {
//         console.log(`길이: ${input.length}`);
//     } else {
//         console.log("문자열이 아닙니다.");
//     }
// }
let username: string = "Alice";

let age: number = 21;
let isStudent: boolean = true;

console.log(`이름: ${username}`);
console.log(`나이: ${age}`);
console.log(`학생 여부: ${isStudent}`);


function add(a:number, b:number):number {
    return a+b;
}


let scores: number[] = [80, 90 ,100];

let person: {name:string, age:number} = {
    name: "Alice",
    age: 25
}

console.log(person)

let id: string | number = "user123"
console.log(id)
