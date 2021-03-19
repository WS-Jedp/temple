import { Ability } from './base'
import { Intelligence } from '../intelligences/base'

// --------- INDEPENDENCE ABILITY --------- 
/**
 * Independence Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of Independence Ability are:
 * - @module Intrapersonal 
 * 
 */
class Independence extends Ability {
  private static instance:Independence
  private static defaultIntelligences:Intelligence[] = []
  private constructor(){
    super('Independence')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Independence} Returns the current instance of the Independence Ability on memory
   */
  public static getInstance():Independence {
    if(!Independence.instance) {
      Independence.instance = new Independence()

      // Adding the default intelligences
      Independence.setDefaultIntelligences()
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
   * Get and know which are the Default intellegences that are relate to the Independence Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the Independence Ability
   */
  public static getDefaultIntelligences():Intelligence[] {
    return Independence.defaultIntelligences
  }
}


export {
  Independence
}