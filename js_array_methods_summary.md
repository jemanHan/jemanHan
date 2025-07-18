# 📘 JavaScript 배열에 자주 쓰이는 중요 함수 총정리

코딩 테스트와 실무에서 자주 사용하는 배열 관련 함수들을 **형식 + 설명 + 예제**로 정리한 문서입니다.

---

## ✅ 1. `map()`

- **형식**: `arr.map((value, index) => {...})`
- **설명**: 배열의 각 요소를 변형하여 **새로운 배열**을 반환

```js
[1, 2, 3].map(x => x * 2); // [2, 4, 6]
```

---

## ✅ 2. `filter()`

- **형식**: `arr.filter((value, index) => 조건)`
- **설명**: 조건에 맞는 요소만 추출

```js
[1, 2, 3, 4].filter(x => x % 2 === 0); // [2, 4]
```

---

## ✅ 3. `reduce()`

- **형식**: `arr.reduce((acc, cur) => {...}, 초기값)`
- **설명**: 누적 계산 (합계, 통계 등)

```js
[1, 2, 3].reduce((acc, cur) => acc + cur, 0); // 6
```

---

## ✅ 4. `forEach()`

- **형식**: `arr.forEach((value, index) => {...})`
- **설명**: 각 요소에 대해 반복 실행 (반환값 없음)

```js
[1, 2, 3].forEach(x => console.log(x));
```

---

## ✅ 5. `sort()`

- **형식**: `arr.sort((a, b) => a - b)` (숫자 오름차순)
- **설명**: 배열 정렬

```js
[3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]
```

---

## ✅ 6. `find()`

- **형식**: `arr.find(x => 조건)`
- **설명**: 조건을 만족하는 **첫 번째 요소 반환**

```js
[5, 10, 15].find(x => x > 9); // 10
```

---

## ✅ 7. `findIndex()`

- **형식**: `arr.findIndex(x => 조건)`
- **설명**: 조건을 만족하는 **첫 번째 인덱스 반환**

```js
[5, 10, 15].findIndex(x => x > 9); // 1
```

---

## ✅ 8. `some()`

- **형식**: `arr.some(x => 조건)`
- **설명**: 조건을 만족하는 요소가 **하나라도 있으면 true**

```js
[1, 2, 3].some(x => x > 2); // true
```

---

## ✅ 9. `every()`

- **형식**: `arr.every(x => 조건)`
- **설명**: 모든 요소가 조건을 만족해야 true

```js
[2, 4, 6].every(x => x % 2 === 0); // true
```

---

## ✅ 10. `includes()`

- **형식**: `arr.includes(value)`
- **설명**: 배열에 해당 값이 있는지 확인

```js
[1, 2, 3].includes(2); // true
```

---

## ✅ 11. `indexOf()`

- **형식**: `arr.indexOf(value)`
- **설명**: 해당 값의 첫 인덱스를 반환 (없으면 -1)

```js
['a', 'b', 'c'].indexOf('b'); // 1
```

---

## ✅ 12. `flat()`

- **형식**: `arr.flat(depth)`
- **설명**: 다차원 배열을 평평하게 펼침

```js
[1, [2, 3], [4, 5]].flat(); // [1, 2, 3, 4, 5]
```

---

## ✅ 13. `slice()`

- **형식**: `arr.slice(start, end)`
- **설명**: 배열의 일부분 추출 (원본 유지)

```js
[1, 2, 3, 4].slice(1, 3); // [2, 3]
```

---

## ✅ 14. `splice()`

- **형식**: `arr.splice(start, deleteCount, item1, item2, ...)`
- **설명**: 배열 **수정 (삽입/삭제)**

```js
let arr = [1, 2, 3];
arr.splice(1, 1); // 삭제 → [1, 3]
arr.splice(1, 0, 5); // 삽입 → [1, 5, 3]
```

---

## ✅ 15. `concat()`

- **형식**: `arr1.concat(arr2)`
- **설명**: 배열을 이어붙여 새 배열 반환

```js
[1, 2].concat([3, 4]); // [1, 2, 3, 4]
```

---

## ✅ 16. `reverse()`

- **형식**: `arr.reverse()`
- **설명**: 배열 순서를 반대로 (원본 변경)

```js
[1, 2, 3].reverse(); // [3, 2, 1]
```

---

## ✅ 17. `join()`

- **형식**: `arr.join(separator)`
- **설명**: 배열 → 문자열 변환

```js
['a', 'b', 'c'].join('-'); // 'a-b-c'
```

---

## ✅ 18. `split()`

- **형식**: `str.split(separator)`
- **설명**: 문자열 → 배열 분해

```js
'apple,banana'.split(','); // ['apple', 'banana']
```

---

## ✅ 19. `fill()`

- **형식**: `arr.fill(value, start, end)`
- **설명**: 배열의 일부를 값으로 채우기

```js
new Array(3).fill(0); // [0, 0, 0]
```

---

## ✅ 20. `from()`

- **형식**: `Array.from(iterable)`
- **설명**: 유사 배열/문자열 → 배열로 변환

```js
Array.from("abc"); // ['a', 'b', 'c']
```

---

## ✅ 참고: 전개 연산자 `...`

```js
let arr = [1, 2];
let copy = [...arr];         // 배열 복사
let merged = [...arr, 3, 4]; // 병합
```

---

이 함수들은 **실전 코딩테스트에서 매우 빈번하게 사용되므로**, 형식과 예제를 숙지하고 바로 활용할 수 있도록 연습하세요!