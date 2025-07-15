var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.speak = function () {
        console.log("".concat(this.name, " says: \uBA4D\uBA4D!"));
    };
    Dog.prototype.fetchBall = function () {
        console.log("".concat(this.name, " is fetching the ball! \uD83D\uDC36"));
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.speak = function () {
        console.log("".concat(this.name, " says: \uC57C\uC639~"));
    };
    Cat.prototype.climbTree = function () {
        console.log("".concat(this.name, " climbs the tree! \uD83D\uDC31"));
    };
    return Cat;
}());
var Parrot = /** @class */ (function () {
    function Parrot(name) {
        this.name = name;
    }
    Parrot.prototype.speak = function () {
        console.log("".concat(this.name, " says: \uC548\uB155\uD558\uC138\uC694!"));
    };
    Parrot.prototype.mimicSound = function (sound) {
        console.log("".concat(this.name, " mimics: ").concat(sound, " \uD83E\uDD9C"));
    };
    return Parrot;
}());
// 인스턴스 생성
var dog = new Dog("바둑이");
var cat = new Cat("나비");
var parrot = new Parrot("짹짹이");
// 공통 메서드 출력
console.log("=== 공통 동작 ===");
dog.speak();
cat.speak();
parrot.speak();
// 고유 메서드 출력
console.log("\n=== 고유 기능 ===");
dog.fetchBall();
cat.climbTree();
parrot.mimicSound("헬로");
