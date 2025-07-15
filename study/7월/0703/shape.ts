// ✅ 1. 추상 클래스 Shape 선언
// 이 클래스는 모든 도형의 '공통 속성'과 '공통 메서드 틀'을 정의합니다.
// 이 클래스 자체로는 객체를 만들 수 없으며, 반드시 상속해서 사용합니다.
abstract class Shape {
    // 모든 도형은 공통적으로 크기(size)를 갖는다고 가정
    size: number;

    // 생성자: 도형을 만들 때 크기를 전달받아 저장
    constructor(size: number) {
        this.size = size;
    }

    // ✅ 추상 메서드: 각 도형의 면적 계산 방법은 다르므로
    // 여기서는 구현하지 않고, '틀만 정의'합니다.
    // 하위 클래스(Rectangle, Circle 등)에서 반드시 구현해야 함
    abstract getArea(): number;
}

// ✅ 2. 직사각형 클래스 Rectangle
// Shape 클래스를 상속받아 직사각형 면적을 계산하는 기능을 구현합니다.
class Rectangle extends Shape {
    width: number;
    height: number;

    // 생성자: 너비와 높이를 받아 초기화
    constructor(width: number, height: number) {
        // 부모 클래스(Shape)의 생성자에 크기 정보를 전달 (선택적)
        super(width * height); // size는 넓이로 지정
        this.width = width;
        this.height = height;
    }

    // ✅ 추상 메서드 getArea()를 실제 구현
    getArea(): number {
        return this.width * this.height;
    }
}

// ✅ 3. 원 클래스 Circle
// Shape 클래스를 상속받아 원의 면적 계산 기능을 구현합니다.
class Circle extends Shape {
    radius: number;

    // 생성자: 반지름을 받아 초기화
    constructor(radius: number) {
        // 부모 클래스(Shape)의 생성자에 넓이를 전달 (선택적)
        super(Math.PI * radius * radius);
        this.radius = radius;
    }

    // ✅ 추상 메서드 getArea()를 실제 구현
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}



// ✅ 4. 사용 예시
const rect = new Rectangle(10, 5);
console.log("직사각형 넓이:", rect.getArea()); // 출력: 50

const circle = new Circle(3);
console.log("원 넓이:", circle.getArea()); // 출력: 약 28.274...
