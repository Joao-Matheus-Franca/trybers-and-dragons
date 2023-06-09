import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.addRaceInstance();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static addRaceInstance() {
    Dwarf._racesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._racesInstances;
  }
}

export default Dwarf;