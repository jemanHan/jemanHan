//고차 배열 메서드
const nums = [1, 2, 3, 4, 5];

// map
const squares = nums.map( n => n**2);


for (const val of squares){
console.log(`val => ${val}`)
}

console.log("=================================================")

for(let i = 0; i < nums.length; i++){
    console.log(`nums[${i}] => ${nums[i]}, squares[${i}] => ${squares[i]}`)
}

console.log("================================================")
//filter
const evens = nums.filter(n => n % 2 ===0 );

for (const val of evens){
    console.log(`val => ${val}`)
}

console.log("================================================")

//reduce
const sum = nums.reduce((acc, cur) => {
    acc += cur;
    console.log(`acc => ${acc}, cur => ${cur}`)
    return acc;
    //acc + cur 과 동일하다.
}, 0)

console.log(`sum => ${sum}`)

console.log("================================================")
// find
const found = nums.find( n => n>3);
console.log(`found => ${found}`)

console.log("================================================")
//some
const hasNegative = nums.some(n => n < 3)
console.log(hasNegative)

console.log("================================================")
//every
const allPositive = nums.every(n => n > 2)
console.log(allPositive)

console.log("================================================")
//flat
const nested = [1, 2, 3]
const duplicated = nested.flatMap( n => [n,n])

for (let nest of duplicated) {
    console.log(`nest => ${nest}`)
}
console.log(duplicated)

console.log("================================================")