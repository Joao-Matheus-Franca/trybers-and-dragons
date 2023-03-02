import Archetype from './Archetypes';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _archetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.addarchetypeInstance();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  private static addarchetypeInstance() {
    Mage._archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._archetypeInstances;
  }
}

export default Mage;