import { Capacity } from './types'
import { Logical } from '@Intelligence/index'


/**
 * Math class is the one the capacities that have a being. The default intelligences that can have are :
 * - Logical 
 *
 */
class Math extends Capacity {
  private static instance:Math

  private constructor(){
    super('Math')
    this.intelligences = [
      Logical.getInstance()
    ]
  }

  /**
   * Get the current Capacity that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Math} Returns the current instance of the Math capacity on memory
   */
  public static getInstance():Math {
    if(!Math.instance) {
      Math.instance = new Math()
    }

    return Math.instance
  }
}

class Reasoning extends Capacity {
  private static instance:Reasoning
  private constructor() {
    super('Reasoning')
    this.intelligences = [
      Logical.getInstance()
    ]
  }

  /**
   * Get the current Capacity that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Reasoning} Returns the current instance of the Reasoning capacity on memory
   */
  public static getInstance() {
    if(!Reasoning.instance) {
      Reasoning.instance = new Reasoning()
    }
    return Reasoning.instance
  }
  
}

export {
  Math,
  Reasoning
}