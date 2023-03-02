import Archetype from './Archetypes';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _archetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.addarchetypeInstance();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  private static addarchetypeInstance() {
    Ranger._archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._archetypeInstances;
  }
}

export default Ranger;