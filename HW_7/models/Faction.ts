import inquirer from 'inquirer';
import {Deputy} from "./Deputy";

export class Faction {
    public listOfDeputies: Deputy[];

    constructor(listOfDeputies: Deputy[]) {
        this.listOfDeputies = listOfDeputies;
    }

    async addDeputy() {
        const questions = [{
            type: 'number',
            name: 'weight',
            message: "Please enter weight of Deputy",
        }, {
            type: 'number',
            name: 'height',
            message: "Please enter height of Deputy",
        }, {
            type: 'input',
            name: 'surname',
            message: "Please enter surname of Deputy",
        }, {
            type: 'input',
            name: 'name',
            message: "Please enter name of Deputy",
        }, {
            type: 'number',
            name: 'age',
            message: "Please enter age of Deputy",
        }, {
            type: 'number',
            name: 'amountOfBribe',
            message: "Please enter amount of bribe",
        }, {
            type: 'checkbox',
            name: 'bribeTaker',
            message: "Please check if Deputy is a bribe-taker",
        },];
        const {weight, height, surname, name, age, amountOfBribe, bribeTaker} = await inquirer.prompt(questions);
        const newDeputy = new Deputy(weight, height, surname, name, age, amountOfBribe, bribeTaker);
        this.listOfDeputies.push(newDeputy);
    }

    async deleteDeputy() {
        const questions = [{
            type: 'number',
            name: 'index',
            message: "Please enter index of Deputy that you want to delete",
            validation: (answer: number) => {
                if (answer < 0 || answer > this.listOfDeputies.length) {
                    return 'Please enter valid index';
                }
                return true
            }
        }];
        const {index} = await inquirer.prompt(questions);
        this.listOfDeputies.splice(index, 1);
    }

    deleteAllBribeTakers() {
        this.listOfDeputies = this.listOfDeputies.filter(el => !el.bribeTaker);
    }

    showTheBiggerBribeTaker() {
        const [biggestBriber] = this.listOfDeputies.sort((a,b) => b.amountOfBribe - a.amountOfBribe);
        console.log(biggestBriber);
    }
    showAllDeputies() {
        console.log(this.listOfDeputies);
    }

    deleteAllDeputies() {
        this.listOfDeputies = [];
    }

    showGeneralAmountOfBribes() {
        let sum:number = 0;
        this.listOfDeputies.map(el => sum += el.amountOfBribe);
        console.log(`Total amount of bribes is ${sum}`);
    }
}
