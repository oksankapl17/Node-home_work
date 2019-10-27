import {Faction} from "./Faction";
import {Deputy} from "./Deputy";

export class VerhovnaRada {
    public listOfFaction: Faction[] = [];

    constructor() {
    }

    addFaction(faction: Faction) {
        this.listOfFaction.push(faction);
    }

    deleteFaction(indexOfFaction: number) {
        if (indexOfFaction > this.listOfFaction.length || indexOfFaction < 0) {
            throw new Error('Enter valid index')
        }
        this.listOfFaction.splice(indexOfFaction, 1);
    }

    showAllFactions() {
        console.log(this.listOfFaction);
    }

    showSpecialFaction(indexOfFaction: number) {
        if (indexOfFaction > this.listOfFaction.length || indexOfFaction < 0) {
            throw new Error('Enter valid index')
        }
        console.log(this.listOfFaction[indexOfFaction]);
    }

    async addDeputyToFaction(deputy: Deputy, indexOfFaction: number) {
        if (indexOfFaction > this.listOfFaction.length || indexOfFaction < 0) {
            throw new Error('Enter valid index')
        }
        await this.listOfFaction[indexOfFaction].addDeputy();
    }

    async deleteDeputyFromFaction(indexOfFaction: number) {
        if (indexOfFaction > this.listOfFaction.length || indexOfFaction < 0) {
            throw new Error('Enter valid index')
        }
        await this.listOfFaction[indexOfFaction].deleteDeputy();
    }

    showTheBiggestBribeTakerInFaction(indexOfFaction: number) {
        const theBiggestBribeTakerInFaction = this.listOfFaction[indexOfFaction].showTheBiggerBribeTaker();
        console.log(theBiggestBribeTakerInFaction);
    }

    showAllBribeTakers(): Deputy[] {
        const arrayOfBribeTakers: Deputy[] = [];
        this.listOfFaction.forEach((faction: Faction) => {
            faction.listOfDeputies.forEach((dep: Deputy) => {
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

    showAllDeputiesOfFraction(indexOfFaction: number) {
        console.log(this.listOfFaction[indexOfFaction].listOfDeputies);
    }

}



