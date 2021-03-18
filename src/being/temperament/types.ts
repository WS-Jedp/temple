import { Temperament } from './index'
import { Nervous } from "being/systems"

class SanguineTemperament extends Temperament {  
  private static instance:SanguineTemperament
  protected characteristics = {
    sensibility: [0.7, 1],
    activity: [0, .3], 
    concentration: [0, .3], 
    reactivity: [.4, .6],
    adaptability: [.7, 1]
  }

  private constructor() {
    super('Sanguine')
  }

  /**
   * 
   * @returns {SanguineTemperament} Returns the unique instance of Sanguine Temperament
   */
  public static getInstance():SanguineTemperament {
    if(!SanguineTemperament.instance) {
      SanguineTemperament.instance = new SanguineTemperament()
    }
    return this.instance
  }

}

class PhlegmaticTemperament extends Temperament {  
  private static instance:PhlegmaticTemperament
  protected characteristics = {
    sensibility: [0, .3],
    activity: [.7, 1], 
    concentration: [.7, 1], 
    reactivity: [0, .3],
    adaptability: [0, .3]
  }

  private constructor() {
    super('Phlegmatic')
  }

  public static getInstance():PhlegmaticTemperament {
    if(!PhlegmaticTemperament.instance) {
      PhlegmaticTemperament.instance = new PhlegmaticTemperament()
    }
    return this.instance
  }

}

class MelancholicTemperament extends Temperament {  
  private static instance:MelancholicTemperament
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
  public static getInstance():MelancholicTemperament {
    if(!MelancholicTemperament.instance) {
      MelancholicTemperament.instance = new MelancholicTemperament()
    }
    return this.instance
  }

}

class CholericTemperament extends Temperament {  
  private static instance:CholericTemperament
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
  public static getInstance():CholericTemperament {
    if(!CholericTemperament.instance) {
      CholericTemperament.instance = new CholericTemperament()
    }
    return this.instance
  }

}


type Affinity = {
  [key:string]: {value: number | string, temperament: string},
}
type TemperamentsObject = {
  [key:string]: Temperament,
  Sanguine: Temperament,
  Melancholic: Temperament,
  Choleric: Temperament,
  Phlegmatic: Temperament
}
class DefineTemperament {  

  protected system:Nervous

  protected temperaments:TemperamentsObject = {
    "Sanguine": SanguineTemperament.getInstance(),
    "Melancholic": MelancholicTemperament.getInstance(),
    "Choleric": CholericTemperament.getInstance(),
    "Phlegmatic": PhlegmaticTemperament.getInstance()
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
  private selectTemperament(affinity:Affinity):Temperament {
    const arrayAffinity = Object.values(affinity)
    
    // Will identify which is the temperament that the being is relate to, between lower the value more affinity have with that temperament
    const temperamentAffinity = arrayAffinity.reduce((prev, curr) => prev.value < curr.value ? prev : curr)
    const mainCharacter = this.temperaments[temperamentAffinity.temperament]
    return mainCharacter
  } 

}

export {
  DefineTemperament,
  SanguineTemperament,
  PhlegmaticTemperament,
  MelancholicTemperament,
  CholericTemperament
}