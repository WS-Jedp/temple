type CharacteristicsTemperament = {
  [key:string]:number[];
  sensibility: number[];
  activity: number[];
  concentration: number[];
  reactivity: number[];
  adaptability: number[];
}

/**
 * The temperament class will help to create a new Temperament, the temperament is one of the most fundamental reasons of how the being is being affected by some stimulus.
 */
abstract class Temperament {  
  protected name:string

  // The characteristics of the temperament are the features that explains the why of the temperament
  protected abstract characteristics:CharacteristicsTemperament
  constructor(name:string) {
    this.name = name
  }

  /**
   * @returns {CharacteristicsTemperament} Returns all the characteristics that define the Temperament
   */
  public getCharacteristics():CharacteristicsTemperament {
    return this.characteristics
  }

  /**
   * 
   * @returns {string} Returns the name of the Temperamnet
   */
  public getName():string {
    return this.name
  }
}

export {
  Temperament,
  CharacteristicsTemperament
}