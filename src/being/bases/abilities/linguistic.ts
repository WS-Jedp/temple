import { Ability } from './base'
import { Intelligence } from '../intelligences/base'

// --------- WRITING ABILITY --------- 
/**
 * Writing Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of Writing Ability are:
 * - @module Linguistic 
 * 
 */
class Writing extends Ability {
  private static instance:Writing
  private static defaultIntelligences:Intelligence[] = []
  private constructor(){
    super('Writing')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Writing} Returns the current instance of the Writing Ability on memory
   */
  public static getInstance():Writing {
    if(!Writing.instance) {
      Writing.instance = new Writing()

      // Adding the default intelligences
      Writing.setDefaultIntelligences()
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
   * Get and know which are the Default intellegences that are relate to the Writing Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the Writing Ability
   */
  public static getDefaultIntelligences():Intelligence[] {
    return Writing.defaultIntelligences
  }
}


// --------- READING ABILITY --------- 
/**
 * Reading Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of Reading Ability are:
 * - @module Linguistic 
 */
class Reading extends Ability {
  private static instance:Reading
  private static defaultIntelligences:Intelligence[] = []

  private constructor() {
    super('Reading')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Reading} Returns the current instance of the Reading Ability on memory
   */
  public static getInstance() {
    if(!Reading.instance) {
      Reading.instance = new Reading()

      // Adding the default intelligences
      Reading.setDefaultIntelligences()
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
   * Get and know which are the Default intellegences that are relate to the Reading Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the Reading Ability
   */
  public getDefaultIntelligences():Intelligence[] {
    return Reading.defaultIntelligences
  }
  
}


// --------- SPEAKER ABILITY --------- 
/**
 * Speaker Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of Speaker Ability are:
 * - @module Linguistic 
 */
 class Speaker extends Ability {
  private static instance:Speaker
  private static defaultIntelligences:Intelligence[] = []

  private constructor() {
    super('Speaker')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Speaker} Returns the current instance of the Speaker Ability on memory
   */
  public static getInstance() {
    if(!Speaker.instance) {
      Speaker.instance = new Speaker()

      // Adding the default intelligences
      Speaker.setDefaultIntelligences()
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
   * Get and know which are the Default intellegences that are relate to the Speaker Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the Speaker Ability
   */
  public getDefaultIntelligences():Intelligence[] {
    return Speaker.defaultIntelligences
  }
  
}
export {
  Writing,
  Reading,
  Speaker
}