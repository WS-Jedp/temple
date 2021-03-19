import { Capacity } from '../capacities/base'
import { Math, Reasoning } from '../capacities/index'
import { Intelligence } from './base'

/**
 * The Logic Intelligence is one of the 8 intelligences that can have a being. Each intelligence is related by default to some capacities. 
 * The default capacities of the Logical Intelligence are:
 * - @module Math
 * - @module Reasoning
 */
class Logical extends Intelligence {

  // The current space on memory of our Instance
  private static instance: Logical
  private static defaultCapacities: Capacity[] = []

  private constructor() {
    super('Logical')
  }

   /**
   * Get the only instance of the Logical Intelligence
   * 
   * @returns {Logical} Return the unique instance of the Intelligence
   */
    public static getInstance():Logical {
      if(!Logical.instance) {
        Logical.instance = new Logical()

        // Add the default capacities that are relate to the Logical Intelligence
        Logical.setDefaultCapacities(Math.getInstance(), Reasoning.getInstance())
      }
      return this.instance
    }

  /**
   * If for some reason we want or need to change the default values this method will define the default capacities that will Have an intelligence
   * 
   * @param {Capacity[]} capacities Add all the capacities that are relate to the intelligence  
   */
  public static setDefaultCapacities(...capacities:Capacity[]):void {
    capacities.forEach(capacity => {
      this.defaultCapacities.push(capacity)
    })
  }

 
}

export {
  Logical
}