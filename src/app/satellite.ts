export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
   

    constructor(name: string, type: string, launchDate: string, orbitTyoe: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitTyoe;
        this.operational = operational

    }

    shouldShowWarning(): boolean {
        return this.type === "Space Debris"
    }

}
