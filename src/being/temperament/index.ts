type CharacteristicsTemperament = {
  [key:string]:number[];
  sensibility: number[];
  activity: number[];
  concentration: number[];
  reactivity: number[];
  adaptability: number[];
}

abstract class Temperament {  
  protected name:string
  protected abstract characteristics:CharacteristicsTemperament
  constructor(name:string) {
    this.name = name
  }

  public getCharacteristics():CharacteristicsTemperament {
    return this.characteristics
  }

  public getName():string {
    return this.name
  }
}

export {
  Temperament
}