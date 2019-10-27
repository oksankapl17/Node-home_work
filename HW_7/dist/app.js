"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const questions_1 = require("./questions");
async function start() {
    try {
        const { selection } = await inquirer_1.default.prompt(questions_1.generalQuestions);
        switch (selection) {
            case "Верховна рада":
                console.log(1);
                break;
            case "Фракція":
                console.log(2);
                break;
            case "Депутат":
                console.log(3);
                break;
            default:
                console.log("default");
        }
    }
    catch (e) {
        console.log(e.message);
    }
}
start();
