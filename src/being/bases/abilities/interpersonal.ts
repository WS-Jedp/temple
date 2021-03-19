import { Ability } from './base'
import { Intelligence } from '../intelligences/base'

// --------- LEAD ABILITY --------- 
/**
 * Lead Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of Lead Ability are:
 * - @module Interpersonal 
 * 
 */
class Lead extends Ability {
  private static instance:Lead
  private static defaultIntelligences:Intelligence[] = []
  private constructor(){
    super('Lead')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Lead} Returns the current instance of the Lead Ability on memory
   */
  public static getInstance():Lead {
    if(!Lead.instance) {
      Lead.instance = new Lead()

      // Adding the default intelligences
      Lead.setDefaultIntelligences()
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
   * Get and know which are the Default intellegences that are relate to the Lead Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the Lead Ability
   */
  public static getDefaultIntelligences():Intelligence[] {
    return Lead.defaultIntelligences
  }
}



// --------- EXPRESS ABILITY --------- 
/**
 * Express Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of Express Ability are:
 * - @module Interpersonal 
 * 
 */
 class Express extends Ability {
  private static instance:Express
  private static defaultIntelligences:Intelligence[] = []
  private constructor(){
    super('Express')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Express} Returns the current instance of the Express Ability on memory
   */
  public static getInstance():Express {
    if(!Express.instance) {
      Express.instance = new Express()

      // Adding the default intelligences
      Express.setDefaultIntelligences()
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
   * Get and know which are the Default intellegences that are relate to the Express Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the Express Ability
   */
  public static getDefaultIntelligences():Intelligence[] {
    return Express.defaultIntelligences
  }
}


export {
  Lead,
  Express
}