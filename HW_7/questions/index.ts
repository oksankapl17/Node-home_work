import {Deputy} from "../models";

export const generalQuestions = [{
    type: 'rawlist',
    name: 'selection',
    message: "Please choose an option:",
    choices: ["Верховна рада", "Фракція", "Депутат"],
    validation: (answer: string) => {
        if (!["Верховна рада", "Фракція", "Депутат"].includes(answer)) {
            return 'Please choose valid option';
        }
        return true
    }
}];

export const factionQuestions = [{
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
}];

export const factionQuestionsDeleteDeputy = (list: Deputy[]) => [{
    type: 'number',
    name: 'index',
    message: "Please enter index of Deputy that you want to delete",
    validation: (answer: number) => {
        if (answer < 0 || answer > list.length) {
            return 'Please enter valid index';
        }
        return true;
    }
}];
