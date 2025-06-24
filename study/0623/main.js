// alert("Hello World");
// console.log("hello World");
// document.write("<h1>Document Write</h1>");

// let currentYear = 2025;
// let birthYear = 1980;
// let age = currentYear - birthYear + 1;
// alert("당신의 나이는" + age + "살 입니다");

// let name = "철수";
// let age = 20;
// let inStudent = true;

// console.log(typeof name);       // string
// console.log(typeof age);        // number
// console.log(typeof inStudent);  // boolean

// let price = 10000;
// let rate = 0.2;
// let discount = price * rate;
// let finalPrice = price - discount;
// console.log("할인된 가격은" + finalPrice + "원 입니다.");

// let name = "영희";
// console.log(`안녕하세요, ${name}님!`); //백틱 ` 사용
// console.log("안녕하세요, " + name + "님!");

// let a = 10;
// console.log(a);
// a += 5;
// console.log(a);
// a -= 3;
// console.log(a);
// a *= 2;
// console.log(a);
// a /= 4;
// console.log(a);
// console.log(`최종 값은 ${a} 입니다.`);

//===============================================================
// //1.이름과 나이를 입력받아 인사말 출력하기

// let name = prompt("이름");
// let age = prompt("나이");
// alert(`안녕하세요 ${age}살 ${name}님`);

// //2. 두 수를 입력받아 합을 나타내기
// let a = Number(prompt("1번 수"));
// let b = Number(prompt("2번 수"));
// console.log(a + b);

// // // 3. == vs === 비교실험
// console.log(1 == "1");
// console.log(1 === "1");
//===============================================================
//실습: 3의 배수 검사기
// let num = Number(prompt("숫자 입력"));

// if (num === 0) {
//   alert("0은 모든 수의 배수입니다.");
// } else if (num % 35 === 0) {
//   alert("5와 7의 공배수입니다.");
// } else if (num % 5 === 0) {
//   alert("5의 배수입니다.");
// } else if (num % 7 === 0) {
//   alert("7의 배수입니다.");
// } else {
//   alert("5의 배수도 7의 배수도 아닙니다.");
// }
//===============================================================
// let day = prompt("요일 입력");

// switch (day) {
//   case ("월요일"):
//     alert("한 주의 시작");
//     break;
//   case ("금요일"):
//     alert("불금 ㅎㅇ");
//     break;
//   default:
//     alert("평범한 하루");
// }
//================================================================
//1. 숫자 두개를 변수로 저장하고 더한 결과를 출력
// let a = Number(prompt("1번"));
// let b = Number(prompt("2번"));
// console.log(a + b);

// //2. 이름과 나이를 저장하고 다음과 같은 문장을 출력해 보세요 "홍길동님은 20살입니다."
// let name = prompt("이름");
// let age = prompt("나이");
// console.log(`${name}님은 ${age}살 입니다`);

// //3 정사각형의 한 변 길이를 변수로 저장하고 넓이를 출력해보세요
// let side = prompt("한 변의 길이");

// console.log(side * side);
//=============================================================
// 4. 숫자 하나가 짝수인지 홀수인지 출력해보세요
// let number = prompt("홀짝~");

// if (number % 2 === 0) {
//   alert("짝수");
// } else {
//   alert("홀수");
// }
// // 5. 나이에 따라 아래 문장을 출력해보세요
// let age = Number(prompt("나이"));

// if (age < 19) {
//   alert("미성년자");
// } else {
//   alert("성인");
// }
// //6. 비밀번호가 맞는지 확인하는 코드 작성
// let password = "1234";
// let input = prompt("비밀번호입력");

// if (input === password) {
//   alert("로그인 성공");
// } else {
//   alert("로그인 실패");
// }

//===============================================================
// for (let i = 0; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} : 짝수`);
//   } else {
//     console.log(`${i} : 홀수`);
//   }
// }
//==============================================================

//=======================연습문제 풀기================================
// 1.  1부터 10까지 숫자 출력

