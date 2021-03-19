import { Ability } from './base'
import { Intelligence } from '../intelligences/base'
import { Natural } from '../intelligences/extends'

// --------- PLANT ABILITY --------- 
/**
 * Plant Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of Plant Ability are:
 * - @module Natural 
 * 
 */
class Plant extends Ability {
  private static instance:Plant
  private static defaultIntelligences:Intelligence[] = []
  private constructor(){
    super('Plant')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Plant} Returns the current instance of the Plant Ability on memory
   */
  public static getInstance():Plant {
    if(!Plant.instance) {
      Plant.instance = new Plant()

      // Adding the default intelligences
      Plant.setDefaultIntelligences(Natural.getInstance())
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
   * Get and know which are the Default intellegences that are relate to the Plant Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the Plant Ability
   */
  public static getDefaultIntelligences():Intelligence[] {
    return Plant.defaultIntelligences
  }
}

export {
  Plant
}