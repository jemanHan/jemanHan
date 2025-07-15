export function makePerson(name: string, age: number) {
    return {name, age};
}

export function testMakePerson(){
    console.log(
        makePerson("jane", 22),
        makePerson("jack", 33)
    )
}
