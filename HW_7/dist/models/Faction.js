"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const Deputy_1 = require("./Deputy");
const questions_1 = require("../questions");
class Faction {
    constructor(listOfDeputies) {
        this.listOfDeputies = [];
        this.listOfDeputies = listOfDeputies;
    }
    async addDeputy() {
        const { weight, height, surname, name, age, amountOfBribe, bribeTaker } = await inquirer_1.default.prompt(questions_1.factionQuestions);
        const newDeputy = new Deputy_1.Deputy(weight, height, surname, name, age, amountOfBribe, bribeTaker);
        this.listOfDeputies.push(newDeputy);
    }
    async deleteDeputy() {
        const { index } = await inquirer_1.default.prompt(questions_1.factionQuestionsDeleteDeputy(this.listOfDeputies));
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
        let sum = 0;
        this.listOfDeputies.map(el => sum += el.amountOfBribe);
        console.log(`Total amount of bribes is ${sum}`);
    }
}
exports.Faction = Faction;
