function oldEnough(age:number): never | boolean{
    if(age > 59) {
        throw Error("Too old")
    }
    if (age <=18){
        return false;
    }
    return true;
}

console.log(oldEnough(20))

//유니온 = 둘중 하나
let result: string  | number = 42;

//인터섹션 = 두 타입 모두 만족
type A = {name: string};
type B = {age: number};
type C = A & B;

const user: C = { name:"kim", age: 25};

console.log(user)