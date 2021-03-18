import { Capacity } from './base'
import { Logical } from '../intelligences/index'
import { Intelligence } from '../intelligences/base'

// --------- MATH CAPACITY --------- 
/**
 * Math Capacity is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of Math capacity are:
 * - @module Logical 
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

  /**
   * Get and know which are the Default intellegences that are relate to the Math capacity
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the Math Capacity
   */
  public static getDefaultIntelligences():Intelligence[] {
    return Math.defaultIntelligences
  }
}


// --------- REASONING CAPACITY --------- 
/**
 * Reasoning Capacity is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of Reasoning capacity are:
 * - @module Logical 
 */
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

  /**
   * Get and know which are the Default intellegences that are relate to the Reasoning capacity
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the Reasoning Capacity
   */
  public getDefaultIntelligences():Intelligence[] {
    return Reasoning.defaultIntelligences
  }
  
}

export {
  Math,
  Reasoning
}