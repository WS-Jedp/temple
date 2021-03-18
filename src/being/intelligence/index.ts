import { Math, Reasoning } from '@Capacity/index'
import { Intelligence } from '@Intelligence/types'

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

  private constructor() {
    super('Logical')

    // Add the default capacities that are relate to the Logical Intelligence
    this.capacities = [
      Math.getInstance(),
      Reasoning.getInstance()
    ]
  }

  /**
   * Get the only instance of the Logical Intelligence
   * 
   * @returns {Logical} Return the unique instance of the Intelligence
   */
  public static getInstance():Logical {
    if(!Logical.instance) {
      Logical.instance = new Logical()
    }

    return this.instance
  }
}

export {
  Logical
}