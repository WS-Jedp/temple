import { Capacity } from './base'
import { Logical } from '../intelligences/index'
import { Intelligence } from '../intelligences/base'


/**
 * Math class is the one the capacities that have a being. The default intelligences that can have are :
 * - Logical 
 *
 */
class Math extends Capacity {
  private static instance:Math
  private static defaultIntelligences:Intelligence[] = []
  private constructor(){
    super('Math')
  }

  /**
   * Get the current Capacity that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Math} Returns the current instance of the Math capacity on memory
   */
  public static getInstance():Math {
    if(!Math.instance) {
      Math.instance = new Math()

      // Adding the default intelligences
      Math.setDefaultIntelligences(Logical.getInstance())
    }

    return this.instance
  }

  /**
   * Defines the default intelligences that are relate to the capacity
   * 
   * @param {Capacity[]} intelligences Add all the Intelligences that are relate to the capacity
   */
  public static setDefaultIntelligences(...intelligences:Intelligence[]):void {
    intelligences.forEach(intelligence => {
      this.defaultIntelligences.push(intelligence)
    })
  }
  public static getDefaultIntelligences():Intelligence[] {
    return Math.defaultIntelligences
  }
}

class Reasoning extends Capacity {
  private static instance:Reasoning
  private static defaultIntelligences:Intelligence[] = []

  private constructor() {
    super('Reasoning')
  }

  /**
   * Get the current Capacity that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Reasoning} Returns the current instance of the Reasoning capacity on memory
   */
  public static getInstance() {
    if(!Reasoning.instance) {
      Reasoning.instance = new Reasoning()

      // Adding the default intelligences
      Reasoning.setDefaultIntelligences(Logical.getInstance())
    }
    return this.instance
  }

  /**
   * Defines the default intelligences that are relate to the capacity
   * 
   * @param {Capacity[]} intelligences Add all the Intelligences that are relate to the capacity
   */
   public static setDefaultIntelligences(...intelligences:Intelligence[]):void {
    intelligences.forEach(intelligence => {
      this.defaultIntelligences.push(intelligence)
    })
  }
  
}

export {
  Math,
  Reasoning
}