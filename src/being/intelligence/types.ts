import { Capacity } from '@Capacity/index'

/**
 * The Intelligence abstract class will define the main structure of the 8 types of intelligences that can have a being
 * This class will be  base of the rest of the Intelligence that are the:
 * - Logical
 * - Natural
 * - Space
 * - Knistetic
 * - Lingüistic
 * - Music
 * - Intrapersonal
 * - Interpersonal
 */
abstract class Intelligence {
  protected capacities:Capacity[]

  /**
   * 
   * @param {Capacity[]} capacities Must receive an Array of capacities that will be relate with the according intelligence
   */
  constructor(capacities:Capacity[]) {
    this.capacities = capacities
  }

  
  /**
   * Add a new capacity to the Intelligence 
   * 
   * @param {Capacity} capacity Define the new capacity that will be added to the Intelligence
   * @returns {Capacity[]} Will return all the current capacities of the Intelligence
   */
  add(capacity:Capacity):Capacity[] {
    this.capacities.push(capacity)
    return this.capacities
  }

  /**
   * Remove one of the current capacities of the Intelligence
   * 
   * @param {string} value Pass the name of the Capacity that you want to remove
   * @returns {Capacity[]} Will return the new current capacities that have the Intelligence
   */
  remove(value:string):Capacity[] {

    const newCapacities = this.capacities.filter(capacity =>  capacity.name !== value)
    this.capacities = newCapacities

    return this.capacities
  }
} 

export {
  Intelligence
}