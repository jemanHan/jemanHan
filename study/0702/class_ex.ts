// 1. 인터페이스
interface Animal {
  name: string;
  speak(): void;
}

// 2. 클래스 정의
class Dog implements Animal {
  constructor(public name: string) {}

  speak() {
    console.log(`${this.name} says: 멍멍!`);
  }

  fetchBall() {
    console.log(`${this.name} is fetching the ball! 🐶`);
  }
}

class Cat implements Animal {
  constructor(public name: string) {}

  speak() {
    console.log(`${this.name} says: 야옹~`);
  }

  climbTree() {
    console.log(`${this.name} climbs the tree! 🐱`);
  }
}

class Parrot implements Animal {
  constructor(public name: string) {}

  speak() {
    console.log(`${this.name} says: 안녕하세요!`);
  }

  mimicSound(sound: string) {
    console.log(`${this.name} mimics: ${sound} 🦜`);
  }
}


const animals: Animal[] = [
  new Dog("바둑이"),
  new Dog("초코"),
  new Cat("나비"),
  new Cat("루비"),
  new Parrot("짹짹이"),
  new Parrot("토크")
];

console.log("=== 공통 speak() ===");
for (const animal of animals) {
  animal.speak();
}

console.log("\n=== 각 동물의 고유 기능 ===");
for (const animal of animals) {
  if (animal instanceof Dog) {
    animal.fetchBall();
  } else if (animal instanceof Cat) {
    animal.climbTree();
  } else if (animal instanceof Parrot) {
    animal.mimicSound("헬로!");
  }
}
