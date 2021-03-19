import { Ability } from './base'
import { Intelligence } from '../intelligences/base'
import { Spatial } from '../intelligences/extends'
// --------- DRAW ABILITY --------- 
/**
 * Draw Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of Draw Ability are:
 * - @module Spatial 
 * 
 */
class Draw extends Ability {
  private static instance:Draw
  private static defaultIntelligences:Intelligence[] = []
  private constructor(){
    super('Draw')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Draw} Returns the current instance of the Draw Ability on memory
   */
  public static getInstance():Draw {
    if(!Draw.instance) {
      Draw.instance = new Draw()

      // Adding the default intelligences
      Draw.setDefaultIntelligences(Spatial.getInstance())
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
   * Get and know which are the Default intellegences that are relate to the Draw Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the Draw Ability
   */
  public static getDefaultIntelligences():Intelligence[] {
    return Draw.defaultIntelligences
  }
}


// --------- DRIVING ABILITY --------- 
/**
 * Driving Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of Driving Ability are:
 * - @module Spatial 
 */
class Driving extends Ability {
  private static instance:Driving
  private static defaultIntelligences:Intelligence[] = []

  private constructor() {
    super('Driving ')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Driving} Returns the current instance of the Driving Ability on memory
   */
  public static getInstance() {
    if(!Driving.instance) {
      Driving.instance = new Driving()

      // Adding the default intelligences
      Driving.setDefaultIntelligences(Spatial.getInstance())
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
   * Get and know which are the Default intellegences that are relate to the Driving Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the Driving Ability
   */
  public getDefaultIntelligences():Intelligence[] {
    return Driving.defaultIntelligences
  }
  
}


// --------- SCULPT ABILITY --------- 
/**
 * Sculpt Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of Sculpt Ability are:
 * - @module Spatial 
 */
 class Sculpt extends Ability {
  private static instance:Sculpt
  private static defaultIntelligences:Intelligence[] = []

  private constructor() {
    super('Sculpt')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Sculpt} Returns the current instance of the Sculpt Ability on memory
   */
  public static getInstance() {
    if(!Sculpt.instance) {
      Sculpt.instance = new Sculpt()

      // Adding the default intelligences
      Sculpt.setDefaultIntelligences(Spatial.getInstance())
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
   * Get and know which are the Default intellegences that are relate to the Sculpt Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the Sculpt Ability
   */
  public getDefaultIntelligences():Intelligence[] {
    return Sculpt.defaultIntelligences
  }
  
}

export {
  Draw,
  Driving,
  Sculpt
}