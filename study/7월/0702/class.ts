// 1. 인터페이스 정의: 차량 구조를 규정
interface Vehicle {
    drive(): void;
    brake(): void;
    trunk(): void;
}

// 2. Car 클래스: Vehicle 인터페이스 구현
class Car implements Vehicle {
    carModel: string;
    owner: string;
    carWeight: number;
    buyYear: number;
    isSunk: boolean;

    constructor(
        carModel: string,
        owner: string,
        carWeight: number,
        buyYear: number,
        isSunk: boolean
    ) {
        this.carModel = carModel;
        this.owner = owner;
        this.carWeight = carWeight;
        this.buyYear = buyYear;
        this.isSunk = isSunk;
    }

    // 인터페이스에 명시된 메서드 구현
    drive() {
        console.log(`${this.carModel} is driving 🚗`);
    }

    brake() {
        console.log("Braking... 🛑");
    }

    trunk() {
        console.log("Opening trunk... 📦");
    }

    // 추가 메서드
    alarm() {
        console.log("BEEP! 🚨");
    }

    back() {
        console.log("Backing up... 🔙");
    }

    wipe() {
        console.log("Wiping windshield... 💦");
    }
}

// 3. 테스트 코드: Car 인스턴스 생성 + 메서드 출력
const myCar = new Car("K5", "Jeman", 1400, 2023, false);

console.log("=== 차량 정보 출력 ===");
console.log(`모델명: ${myCar.carModel}`);
console.log(`소유자: ${myCar.owner}`);
console.log(`중량: ${myCar.carWeight}kg`);
console.log(`구매연도: ${myCar.buyYear}`);
console.log(`침수 여부: ${myCar.isSunk}`);

console.log("=== 기능 실행 ===");
myCar.drive();
myCar.brake();
myCar.trunk();
myCar.alarm();
myCar.back();
myCar.wipe();
