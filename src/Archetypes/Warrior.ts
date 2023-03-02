import Archetype from './Archetypes';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _archetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.addarchetypeInstance();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  private static addarchetypeInstance() {
    Warrior._archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._archetypeInstances;
  }
}

export default Warrior;