// class Calculator {
//     add (a:number,b:number):void{
//         console.log(a + b);
//     }


// add(a:string,b:string):void{
//     console.log(a + b);
// }
// }

// let Calculator = new Calculator();
// Calculator.add(1,2);
// Calculator.add("1","2");
//============================  메서드 오버로딩  ===================================
class Calculator {
    // 👉 오버로드 시그니처 (선언만)
    add(a: number, b: number): void;
    add(a: number, b:number, c:number):void;
    add(a: string, b: string): void;

    // 👉 실제 구현 (하나만 작성)
    add(a: any, b: any): void {
        console.log(a + b);
    }

    
}

// 사용 예시
const calculator = new Calculator();
calculator.add(1, 2);       // 3
calculator.add("안녕", "하세요");   // "안녕하세요"

