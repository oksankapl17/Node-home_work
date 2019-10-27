"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Human_1 = require("./Human");
class Deputy extends Human_1.Human {
    constructor(weight, height, surname, name, age, amountOfBribe, bribeTaker) {
        super(weight, height);
        this.bribeTaker = false;
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.bribeTaker = bribeTaker;
        this.amountOfBribe = amountOfBribe;
    }
    giveABribe(bribe) {
        if (!this.bribeTaker) {
            console.log('Go away!!!');
        }
        if (bribe > this.amountOfBribe) {
            console.log('I will think about it. Come later!');
        }
    }
}
exports.Deputy = Deputy;
