import { Ability } from './base'
import { Intelligence } from '../intelligences/base'

// --------- MUSICAL INTERPRETATION ABILITY --------- 
/**
 * MusicalInterpretation Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of MusicalInterpretation Ability are:
 * - @module Musical 
 * 
 */
class MusicalInterpretation extends Ability {
  private static instance:MusicalInterpretation
  private static defaultIntelligences:Intelligence[] = []
  private constructor(){
    super('Musical Interpretation')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {MusicalInterpretation} Returns the current instance of the MusicalInterpretation Ability on memory
   */
  public static getInstance():MusicalInterpretation {
    if(!MusicalInterpretation.instance) {
      MusicalInterpretation.instance = new MusicalInterpretation()

      // Adding the default intelligences
      MusicalInterpretation.setDefaultIntelligences()
    }

    return this.instance
  }

  /**
   * Defines the default intelligences that are relate to the Ability
   * 
   * @param {Ability[]} intelligences Add all the Intelligences that are relate to the Ability
   */
  public static setDefaultIntelligences(...intelligences:Intelligence[]):void {
    intelligences.forEach(intelligence => {
      this.defaultIntelligences.push(intelligence)
    })
  }

  /**
   * Get and know which are the Default intellegences that are relate to the MusicalInterpretation Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the MusicalInterpretation Ability
   */
  public static getDefaultIntelligences():Intelligence[] {
    return MusicalInterpretation.defaultIntelligences
  }
}


// --------- MUSICAL INTERPRETATION ABILITY --------- 
/**
 * MusicalInstrument Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of MusicalInstrument Ability are:
 * - @module Music 
 */
class MusicalInstrument extends Ability {
  private static instance:MusicalInstrument
  private static defaultIntelligences:Intelligence[] = []

  private constructor() {
    super('Musical Instrument')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {MusicalInstrument} Returns the current instance of the MusicalInstrument Ability on memory
   */
  public static getInstance() {
    if(!MusicalInstrument.instance) {
      MusicalInstrument.instance = new MusicalInstrument()

      // Adding the default intelligences
      MusicalInstrument.setDefaultIntelligences()
    }
    return this.instance
  }

  /**
   * Defines the default intelligences that are relate to the Ability
   * 
   * @param {Ability[]} intelligences Add all the Intelligences that are relate to the Ability
   */
  public static setDefaultIntelligences(...intelligences:Intelligence[]):void {
    intelligences.forEach(intelligence => {
      this.defaultIntelligences.push(intelligence)
    })
  }

  /**
   * Get and know which are the Default intellegences that are relate to the MusicalInstrument Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the MusicalInstrument Ability
   */
  public getDefaultIntelligences():Intelligence[] {
    return MusicalInstrument.defaultIntelligences
  }
  
}


// --------- SING ABILITY --------- 
/**
 * Sing Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of Sing Ability are:
 * - @module Logical 
 */
 class Sing extends Ability {
  private static instance:Sing
  private static defaultIntelligences:Intelligence[] = []

  private constructor() {
    super('Sing')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Sing} Returns the current instance of the Sing Ability on memory
   */
  public static getInstance() {
    if(!Sing.instance) {
      Sing.instance = new Sing()

      // Adding the default intelligences
      Sing.setDefaultIntelligences()
    }
    return this.instance
  }

  /**
   * Defines the default intelligences that are relate to the Ability
   * 
   * @param {Ability[]} intelligences Add all the Intelligences that are relate to the Ability
   */
  public static setDefaultIntelligences(...intelligences:Intelligence[]):void {
    intelligences.forEach(intelligence => {
      this.defaultIntelligences.push(intelligence)
    })
  }

  /**
   * Get and know which are the Default intellegences that are relate to the Sing Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the Sing Ability
   */
  public getDefaultIntelligences():Intelligence[] {
    return Sing.defaultIntelligences
  }
  
}

export {
  MusicalInterpretation,
  MusicalInstrument,
  Sing
}