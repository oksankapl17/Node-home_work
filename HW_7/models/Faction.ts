import inquirer from 'inquirer';
import {Deputy} from "./Deputy";
import {factionQuestions, factionQuestionsDeleteDeputy} from "../questions";

export class Faction {
    public listOfDeputies: Deputy[] = [];

    constructor(listOfDeputies: Deputy[]) {
        this.listOfDeputies = listOfDeputies;
    }

    async addDeputy() {
        const {weight, height, surname, name, age, amountOfBribe, bribeTaker} = await inquirer.prompt(factionQuestions);
        const newDeputy = new Deputy(weight, height, surname, name, age, amountOfBribe, bribeTaker);
        this.listOfDeputies.push(newDeputy);
    }

    async deleteDeputy() {
        const {index} = await inquirer.prompt(factionQuestionsDeleteDeputy(this.listOfDeputies));
        this.listOfDeputies.splice(index, 1);
    }

    deleteAllBribeTakers() {
        this.listOfDeputies = this.listOfDeputies.filter(el => !el.bribeTaker);
    }

    showTheBiggerBribeTaker() {
        const [biggestBriber] = this.listOfDeputies.sort((a, b) => b.amountOfBribe - a.amountOfBribe);
        console.log(biggestBriber);
    }

    showAllDeputies() {
        console.log(this.listOfDeputies);
    }

    deleteAllDeputies() {
        this.listOfDeputies = [];
    }

    showGeneralAmountOfBribes() {
        let sum: number = 0;
        this.listOfDeputies.map(el => sum += el.amountOfBribe);
        console.log(`Total amount of bribes is ${sum}`);
    }
}
