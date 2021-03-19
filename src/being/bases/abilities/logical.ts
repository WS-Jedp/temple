import { Ability } from './base'
import { Logical } from '../intelligences/index'
import { Intelligence } from '../intelligences/base'

// --------- MATH ABILITY --------- 
/**
 * Math Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of Math Ability are:
 * - @module Logical 
 * 
 */
class Math extends Ability {
  private static instance:Math
  private static defaultIntelligences:Intelligence[] = []
  private constructor(){
    super('Math')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Math} Returns the current instance of the Math Ability on memory
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
   * Get and know which are the Default intellegences that are relate to the Math Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the Math Ability
   */
  public static getDefaultIntelligences():Intelligence[] {
    return Math.defaultIntelligences
  }
}


// --------- REASONING Ability --------- 
/**
 * Reasoning Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of Reasoning Ability are:
 * - @module Logical 
 */
class Reasoning extends Ability {
  private static instance:Reasoning
  private static defaultIntelligences:Intelligence[] = []

  private constructor() {
    super('Reasoning')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Reasoning} Returns the current instance of the Reasoning Ability on memory
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
   * Get and know which are the Default intellegences that are relate to the Reasoning Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the Reasoning Ability
   */
  public getDefaultIntelligences():Intelligence[] {
    return Reasoning.defaultIntelligences
  }
  
}


// --------- PROGRAMMING ABILITY --------- 
/**
 * Programming Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of Programming Ability are:
 * - @module Logical 
 */
 class Programming extends Ability {
  private static instance:Programming
  private static defaultIntelligences:Intelligence[] = []

  private constructor() {
    super('Programming')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Programming} Returns the current instance of the Programming Ability on memory
   */
  public static getInstance() {
    if(!Programming.instance) {
      Programming.instance = new Programming()

      // Adding the default intelligences
      Programming.setDefaultIntelligences(Logical.getInstance())
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
   * Get and know which are the Default intellegences that are relate to the Programming Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the Programming Ability
   */
  public getDefaultIntelligences():Intelligence[] {
    return Programming.defaultIntelligences
  }
  
}



// --------- REASONING ABILITY --------- 
/**
 * Calculate Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of Calculate Ability are:
 * - @module Logical 
 */
 class Calculate extends Ability {
  private static instance:Calculate
  private static defaultIntelligences:Intelligence[] = []

  private constructor() {
    super('Calculate')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Calculate} Returns the current instance of the Calculate Ability on memory
   */
  public static getInstance() {
    if(!Calculate.instance) {
      Calculate.instance = new Calculate()

      // Adding the default intelligences
      Calculate.setDefaultIntelligences(Logical.getInstance())
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
   * Get and know which are the Default intellegences that are relate to the Calculate Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the Calculate Ability
   */
  public getDefaultIntelligences():Intelligence[] {
    return Calculate.defaultIntelligences
  }
  
}

export {
  Math,
  Reasoning,
  Programming
}