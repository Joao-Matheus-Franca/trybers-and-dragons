import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.addRaceInstance();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static addRaceInstance() {
    Orc._racesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._racesInstances;
  }
}

export default Orc;