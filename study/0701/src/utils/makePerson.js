"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePerson = makePerson;
exports.testMakePerson = testMakePerson;
function makePerson(name, age) {
    return { name, age };
}
function testMakePerson() {
    console.log(makePerson("jane", 22), makePerson("jack", 33));
}
