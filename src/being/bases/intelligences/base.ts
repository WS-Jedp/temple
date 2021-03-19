import { Capacity } from '../capacities/base'
import { Ability } from '../abilities/base'

type IntelligenceCapacities = {
  [key:string]: Capacity
}
type IntelligenceAbilities = {
  [key:string]: Ability
}

/**
 * The Intelligence abstract class will define the main structure of the 8 types of intelligences that can have a being
 * This class will be  base of the rest of the Intelligence that are the:
 * - @module Logical
 * - @module Natural
 * - @module Spatial
 * - @module Knistetic
 * - @module Linguistic
 * - @module Musical
 * - @module Intrapersonal
 * - @module Interpersonal
 * 
 * @class
 */
class Intelligence {
  private name:string
  protected capacities:IntelligenceCapacities = {}
  protected abilities:IntelligenceAbilities = {}

  /**
   * Create a new intelligence that can have a being
   * 
   * @param {string} name Create the name of the Intelligence, will work as an Identifier of the Intelligence 
   */
  constructor(name:string) {
    this.name = name
  }

  /**
   * Get and know the name of the current Intelligence 
   * 
   * @returns {string} Will return the name of the current Intelligence
   */
   public getName():string {
    return this.name
  }


  // --------- CAPACITIES SECTION ---------
  /**
   * Get all the capacities that relate to the intelligence
   * 
   * @returns {Capacity[]} Returns an array with all the capacities of the Intelligence
   */
  public getCapacities():Capacity[] {
    return Object.values(this.capacities)
  }

  /**
   * Add a new capacity to the Intelligence 
   * 
   * @param {Capacity} capacity Define the new capacity that will be added to the Intelligence
   * @returns {Capacity[]} Will return all the current capacities of the Intelligence
   */
  public addCapacity(capacity:Capacity):Capacity[] {
    this.capacities[capacity.name] = capacity
    return Object.values(this.capacities)
  }

  /**
   * Remove one of the current capacities of the Intelligence
   * 
   * @param {string} name Pass the name of the Capacity that you want to remove
   * @returns {Capacity[]} Will return the new current capacities that have the Intelligence
   */
  removeCapacity(name:string):Capacity[] {
    delete this.capacities[name]
    return Object.values(this.capacities)
  }


  // --------- ABILITY SECTION ---------

  /**
   * Get all the Abilities that are relate to the intelligence
   * 
   * @returns {Ability[]} Returns an array with all the abilities of the Intelligence
   */
  public getAbilities():Ability[] {
    return Object.values(this.abilities)
  }

  /**
   * Add a new Ability to the Intelligence 
   * 
   * @param {Ability} Ability Define a new Ability that will be added to the Intelligence
   * @returns {Ability[]} Will return all the current abilities of the Intelligence
   */
  public addAbility(ability:Ability):Ability[] {
    this.abilities[ability.name] = ability
    return Object.values(this.abilities)
  }

  /**
   * Remove one of the current abilities of the Intelligence
   * 
   * @param {string} name Pass the name of the Ability that you want to remove
   * @returns {Ability[]} Will return the new current abilities that have the Intelligence
   */
  removeAbility(name:string):Ability[] {
    delete this.abilities[name]
    return Object.values(this.abilities)
  }
} 

export {
  Intelligence,
  IntelligenceCapacities
}