"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VerhovnaRada {
    constructor() {
        this.listOfFaction = [];
    }
    addFaction(faction) {
        this.listOfFaction.push(faction);
    }
    deleteFaction(indexOfFaction) {
        if (indexOfFaction > this.listOfFaction.length || indexOfFaction < 0) {
            throw new Error('Enter valid index');
        }
        this.listOfFaction.splice(indexOfFaction, 1);
    }
    showAllFactions() {
        console.log(this.listOfFaction);
    }
    showSpecialFaction(indexOfFaction) {
        if (indexOfFaction > this.listOfFaction.length || indexOfFaction < 0) {
            throw new Error('Enter valid index');
        }
        console.log(this.listOfFaction[indexOfFaction]);
    }
    async addDeputyToFaction(deputy, indexOfFaction) {
        if (indexOfFaction > this.listOfFaction.length || indexOfFaction < 0) {
            throw new Error('Enter valid index');
        }
        await this.listOfFaction[indexOfFaction].addDeputy();
    }
    async deleteDeputyFromFaction(indexOfFaction) {
        if (indexOfFaction > this.listOfFaction.length || indexOfFaction < 0) {
            throw new Error('Enter valid index');
        }
        await this.listOfFaction[indexOfFaction].deleteDeputy();
    }
    showTheBiggestBribeTakerInFaction(indexOfFaction) {
        const theBiggestBribeTakerInFaction = this.listOfFaction[indexOfFaction].showTheBiggerBribeTaker();
        console.log(theBiggestBribeTakerInFaction);
    }
    showAllBribeTakers() {
        const arrayOfBribeTakers = [];
        this.listOfFaction.forEach((faction) => {
            faction.listOfDeputies.forEach((dep) => {
                if (dep.bribeTaker) {
                    arrayOfBribeTakers.push(dep);
                }
            });
        });
        console.log(arrayOfBribeTakers);
        return arrayOfBribeTakers;
    }
    showTheBiggestBribeTaker() {
        const arrayOfBribeTakers = this.showAllBribeTakers();
        const [theBiggestBribeTaker] = arrayOfBribeTakers.sort(((a, b) => a.amountOfBribe - b.amountOfBribe));
        console.log(theBiggestBribeTaker);
    }
    showAllDeputiesOfFraction(indexOfFaction) {
        console.log(this.listOfFaction[indexOfFaction].listOfDeputies);
    }
}
exports.VerhovnaRada = VerhovnaRada;
