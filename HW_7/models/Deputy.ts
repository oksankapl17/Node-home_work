import {Human} from "./Human";

export class Deputy extends Human {
    public surname: string;
    public name: string;
    public age: number;
    public bribeTaker?: boolean = false;
    public amountOfBribe: number;

    constructor(weight: number, height: number, surname: string, name: string, age: number, amountOfBribe: number, bribeTaker?: boolean) {
        super(weight, height);
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.bribeTaker = bribeTaker;
        this.amountOfBribe = amountOfBribe;
    }

    giveABribe(bribe: number) {
        if (!this.bribeTaker) {
            console.log('Go away!!!');
        }
        if (bribe > this.amountOfBribe) {
            console.log('I will think about it. Come later!');
        }
    }
}
