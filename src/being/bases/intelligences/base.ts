import { Capacity } from '@Capacity/types'

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
  private name:string
  protected capacities:Capacity[] = []

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


  /**
   * Get all the capacities that relate to the intelligence
   * 
   * @returns {Capacity[]} Returns an array with all the capacities of the Intelligence
   */
  public getCapacities():Capacity[] {
    return this.capacities
  }

  /**
   * Add a new capacity to the Intelligence 
   * 
   * @param {Capacity} capacity Define the new capacity that will be added to the Intelligence
   * @returns {Capacity[]} Will return all the current capacities of the Intelligence
   */
  addCapacity(capacity:Capacity):Capacity[] {
    this.capacities.push(capacity)
    return this.capacities
  }

  /**
   * Remove one of the current capacities of the Intelligence
   * 
   * @param {string} value Pass the name of the Capacity that you want to remove
   * @returns {Capacity[]} Will return the new current capacities that have the Intelligence
   */
  removeCapacity(value:string):Capacity[] {

    const newCapacities = this.capacities.filter(capacity =>  capacity.getName() !== value)
    this.capacities = newCapacities

    return this.capacities
  }
} 

export {
  Intelligence
}