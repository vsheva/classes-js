"use strict";

class First {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log(`Привет, ${this.name}, я метод родителя!`)
    }
}


class Second extends First {
    constructor(name, position) {
        super(name)
        this.position = position
    }

    hello() {
        super.hello()
        console.log(`А я, ${this.position}, наследуемый метод!`)
    }
}


const test = new Second("Валера", "студент");
test.hello();


