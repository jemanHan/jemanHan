class Animal {
    constructor(public name: string) {}

    sound(): void {
        console.log("동물 소리");
    }
}

class Dog extends Animal {
    sound(): void {
        console.log("멍멍");
    }
}

class Cat extends Animal {
    sound(): void {
        console.log("야옹");
    }
}

const dog = new Dog("바둑이");
const cat = new Cat("나비");
dog.sound();
cat.sound();
