class User {
    constructor(public name: string) {}

    greet(): void {
        console.log(`안녕하세요 제 이름은 ${this.name} 입니다`);
    }
}

const user = new User("홍길동");
user.greet();
