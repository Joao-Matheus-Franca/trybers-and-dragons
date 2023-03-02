import Archetype from './Archetypes';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _archetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.addarchetypeInstance();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  private static addarchetypeInstance() {
    Necromancer._archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._archetypeInstances;
  }
}

export default Necromancer;