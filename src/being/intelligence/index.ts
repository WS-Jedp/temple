import { Capacity } from '@Capacity/types'
import { Math, Reasoning } from '../capacity/index'
import { Intelligence } from './types'

/**
 * The Logic Intelligence will is one of the 8 types of intelligences that can have a being. This one will help to the being to be more comfortable with activities or actions related to:
 * - Logical
 * - Natural
 * - Space
 * - Knistetic
 * - Lingüistic
 * - Music
 * - Intrapersonal
 * - Interpersonal
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
   * Will define the default capacities that will Have an intelligence
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