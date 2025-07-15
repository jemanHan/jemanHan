//스프레드 연산자, 구조 분해
const user = {id:1, name: "Kim", age:20, address:"Seoul"}
const updated = {id:2, ...user, name: "Lee", age: 30} //절차 지향 => ...user 가 id: 1 보다 뒤에 왔으므로 덮어씌워짐.

console.log(updated)

const userArr = [1,2,3,4,5];
const updatedArr = [1,2,...userArr,6,7]
console.log(updatedArr)

//구조 분해
const userSplit = { id:1, name: "kim", age: 20, address: "Seoul"}
// const {id, name, age, address} = userSplit;

// console.log(id, name, age, address)

const {id, name, ...rest} = userSplit;
console.log(id, name, rest)



// 연습문제 1: 구조 분해 할당을 이용해 다음 객체에서 `title'과 `author`를 추출해보세요
const book = {title: "책", author: "저자"}
const {title: title2, author} = book

console.log(title2)
console.log(author)

//연습문제 2: Map과 Set을 활용하기 
// 1~5 숫자가 포함된 배열 [1,2,2,3,4,5,5]에서 중복을 제거,
//모든 숫자에 5를 더하여 순서대로 출력, 
// `total`이라는 키에 중복을 제거한 숫자들의 합을 저장한 Map을 만들기

// 1. Set으로 중복 제거
const set = new Set([1, 2, 2, 3, 4, 5, 5]); // => Set {1, 2, 3, 4, 5}

// 2. 각 값에 5를 더하고 출력
console.log("5 더한 숫자들:");
const addedValues = [...set].map(num => {
    const newNum = num + 5;
    console.log(newNum); // 출력: 6, 7, 8, 9, 10
    return newNum;
});

// 3. 합계를 Map에 저장
const map = new Map();
const total = addedValues.reduce((acc, cur) => acc + cur, 0); // 6 + 7 + 8 + 9 + 10 = 40
map.set("total", total);

console.log("5 더한 값들의 total:", map.get("total")); // 👉 40


//=====================================
const numbers = [3,4,7,8,10,13];
const evens = numbers.filter(num => num %2 ===0)
const squared = evens.map((num) => num*num)
const sum = squared.reduce((acc,cur)=> acc+cur)
console.log(sum)
//=================================================

async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("data OK"), 2000);
    });
}

async function loadData() {
    const data = await fetchData();  
    console.log(data);  // 👉 2초 후: "data OK"
}

loadData();  // 호출해줘야 실행됨
