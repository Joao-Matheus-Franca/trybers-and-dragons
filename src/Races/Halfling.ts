import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.addRaceInstance();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static addRaceInstance() {
    Halfling._racesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._racesInstances;
  }
}

export default Halfling;