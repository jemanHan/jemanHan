class Car {
    drive(driver: Driver): void {
        console.log(`${driver.name} 운전 시작`);
    }
}

class Driver {
    name!: string;
}

const car = new Car();
const driver = new Driver();
driver.name = "홍길동";
car.drive(driver);
