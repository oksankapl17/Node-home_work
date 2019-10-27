import inquirer from 'inquirer';
import { generalQuestions } from './questions';


async function start() {
    try {
        const {selection} = await inquirer.prompt(generalQuestions);
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
    } catch (e) {
        console.log(e.message);
    }
}
start();
