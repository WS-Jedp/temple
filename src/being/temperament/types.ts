import { Temperament } from './index'
import { Nervous } from "being/systems"

class SanguineTemperament extends Temperament {  

  protected characteristics = {
    sensibility: [0.7, 1],
    activity: [0, .3], 
    concentration: [0, .3], 
    reactivity: [.4, .6],
    adaptability: [.7, 1]
  }

  constructor() {
    super('Sanguine')
  }

}

class PhlegmaticTemperament extends Temperament {  

  protected characteristics = {
    sensibility: [0, .3],
    activity: [.7, 1], 
    concentration: [.7, 1], 
    reactivity: [0, .3],
    adaptability: [0, .3]
  }

  constructor() {
    super('Phlegmatic')
  }

}

class MelancholicTemperament extends Temperament {  

  protected characteristics = {
    sensibility: [.7, 1],
    activity: [.7, 1], 
    concentration: [.7, 1], 
    reactivity: [0, .3],
    adaptability: [0, .3]
  }

  constructor() {
    super('Melancholic')
  }

}

class CholericTemperament extends Temperament {  

  protected characteristics = {
    sensibility: [0, .3],
    activity: [.7, 1], 
    concentration: [.7, 1], 
    reactivity: [.7, 1],
    adaptability: [.7, 1]
  }

  constructor() {
    super('Choleric')
  }

}


type Affinity = {
  [key:string]: {value: number | string, temperament: string},
}
class DefineTemperament {  

  protected system:Nervous

  protected temperaments = {
    sanguine: new SanguineTemperament(),
    melancholic: new MelancholicTemperament(),
    choleric: new CholericTemperament(),
    phlematic: new PhlegmaticTemperament()
  }

  constructor(system:Nervous) {
   this.system = system
  }

  public defineTemperament() {

    let affinity:Affinity = {}
    

    /**
     * The Affinity Algorithm is the one in charge to pass for each one of the temperaments that can have a person and calculate the difference between the Nervous System Given and with the Temperament Characteristics.
     * Between lower is the Affinity more affinity have with that temperament.
     */
    Object.values(this.temperaments).forEach(temperament => {
      const temperamentCharacteristics = temperament.getCharacteristics()
      let currentAffinity:number = 0

      for(const characteristicTemperament in temperamentCharacteristics) {
        let differenceOne:number = 0
        let differenceTwo:number = 0
        
          differenceOne = Math.abs(temperamentCharacteristics[characteristicTemperament][0] - this.system.characteristics[characteristicTemperament])
          differenceTwo = Math.abs(temperamentCharacteristics[characteristicTemperament][1] - this.system.characteristics[characteristicTemperament])
          currentAffinity += differenceOne + differenceTwo
      }

      affinity = {
        ...affinity,
        [temperament.getName()]: {
          value: currentAffinity.toFixed(1),
          temperament: temperament.getName() 
        }
      }
      
    });

    
    return this.selectTemperament(affinity)
  }


  /**
   * 
   * Will return the Object of the according temperament of the being according to the Affinitiy Algorithm
   * 
   * @param {Affinity} affinity The Affinity object is the result of defineTemperament() where execute the Affinity algorithm 
   * @returns {Temperament} Will return the main temperament of the being according to the algorithm
   */
  private selectTemperament(affinity:Affinity) {

    const arrayAffinity = Object.values(affinity)
    
    // Will identify which is the temperament that the being is relate to, between lower the value more affinity have with that temperament
    const mainTemperament = arrayAffinity.reduce((prev, curr) => prev.value < curr.value ? prev : curr)

    switch (mainTemperament.temperament) {
      case "Melancholic":
        return this.temperaments.melancholic
        
      case "Choleric":
        return this.temperaments.choleric

      case "Phlegmatic":
        return this.temperaments.phlematic
      case "Sanguine":
        return this.temperaments.sanguine        
    }

  } 

}

export {
  DefineTemperament,
  SanguineTemperament,
  PhlegmaticTemperament,
  MelancholicTemperament,
  CholericTemperament
}