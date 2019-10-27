import inquirer from 'inquirer';

const questions = [{
    type: 'number',
    name: 'selection',
    message: "1 - Верховна рада\n 2 - Фракція\n 3 - Депутат",
    validation: (answer: number) => {
        if (answer < 0 || answer > 3) {
            return 'Please choose valid option';
        }
        return true
    }
}];
async function start() {
    try {
        const {selection} = await inquirer.prompt(questions);
        console.log(selection);
        // switch (selection) {
        //     case 1:
        //     case 2:
        //     case 3:

    } catch (e) {
        console.log(e.message);
    }
}
start();
