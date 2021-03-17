import { System } from './types'

type CharacteristicsNervousSystem = {
  [key:string]: number;
  sensibility: number;
  activity: number;
  concentration: number;
  reactivity: number;
  adaptability: number;
}

class Nervous extends System {

  protected sensibility:number
  protected activity:number
  protected concentration:number
  protected reactivity:number
  protected adaptability:number

  /**
   * The nervous system is the most important nervous at the moment of create the personality of the Being.
   * Thanks to this system we can define clearly the Temperament of the being
   */
  public characteristics: CharacteristicsNervousSystem

  /**
   * Will create and define the main values that will characterize the Nervous System of the being
   * 
   * @param {number} sensibility Defines the sensibility of the nervous system 
   * @param {number} activity  Defines the activity of the nervous system
   * @param {number} concentration  Defines the level of concentration of the being in one task
   * @param {number} reactivity Defines the reaction of a being to his environment
   * @param {number} adaptability Defines the flexibility of the Being to the changes of his environment
   */
  constructor(sensibility:number, activity: number, concentration: number, reactivity:number, adaptability:number){
    super('Nervous')

    this.sensibility = sensibility
    this.activity = activity
    this.concentration = concentration
    this.reactivity = reactivity
    this.adaptability = adaptability

    this.characteristics = {
      activity: this.activity,
      sensibility: this.sensibility,
      concentration: this.concentration,
      reactivity: this.reactivity,
      adaptability: this.adaptability
    }
  }
}

export {
  Nervous
}