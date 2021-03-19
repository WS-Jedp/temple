import { Ability } from './base'
import { Intelligence } from '../intelligences/base'
import { Knistetic, Linguistic } from '../intelligences/extends'

// --------- RUN ABILITY --------- 
/**
 * Run Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of Run Ability are:
 * - @module Knistetic 
 * 
 */
class Run extends Ability {
  private static instance:Run
  private static defaultIntelligences:Intelligence[] = []
  private constructor(){
    super('Run')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Run} Returns the current instance of the Run Ability on memory
   */
  public static getInstance():Run {
    if(!Run.instance) {
      Run.instance = new Run()

      // Adding the default intelligences
      Run.setDefaultIntelligences(Knistetic.getInstance())
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
   * Get and know which are the Default intellegences that are relate to the Run Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the Run Ability
   */
  public static getDefaultIntelligences():Intelligence[] {
    return Run.defaultIntelligences
  }
}


// --------- GYMNASTICS ABILITY --------- 
/**
 * Gymnastics Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of Gymnastics Ability are:
 * - @module Knistetic 
 */
class Gymnastics extends Ability {
  private static instance:Gymnastics
  private static defaultIntelligences:Intelligence[] = []

  private constructor() {
    super('Gymnastics ')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Gymnastics} Returns the current instance of the Gymnastics Ability on memory
   */
  public static getInstance() {
    if(!Gymnastics.instance) {
      Gymnastics.instance = new Gymnastics()

      // Adding the default intelligences
      Gymnastics.setDefaultIntelligences(Knistetic.getInstance())
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
   * Get and know which are the Default intellegences that are relate to the Gymnastics Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the Gymnastics Ability
   */
  public getDefaultIntelligences():Intelligence[] {
    return Gymnastics.defaultIntelligences
  }
  
}


// --------- DANCE ABILITY --------- 
/**
 * Dance Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of Dance Ability are:
 * - @module Knistetic 
 */
 class Dance extends Ability {
  private static instance:Dance
  private static defaultIntelligences:Intelligence[] = []

  private constructor() {
    super('Dance')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Dance} Returns the current instance of the Dance Ability on memory
   */
  public static getInstance() {
    if(!Dance.instance) {
      Dance.instance = new Dance()

      // Adding the default intelligences
      Dance.setDefaultIntelligences(Knistetic.getInstance(), Linguistic.getInstance())
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
   * Get and know which are the Default intellegences that are relate to the Dance Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the Dance Ability
   */
  public getDefaultIntelligences():Intelligence[] {
    return Dance.defaultIntelligences
  }
  
}



// --------- MARTIAL ART ABILITY --------- 
/**
 * MartialArt Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of MartialArt Ability are:
 * - @module Knistetic 
 */
 class MartialArt extends Ability {
  private static instance:MartialArt
  private static defaultIntelligences:Intelligence[] = []

  private constructor() {
    super('Martial Art')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {MartialArt} Returns the current instance of the MartialArt Ability on memory
   */
  public static getInstance() {
    if(!MartialArt.instance) {
      MartialArt.instance = new MartialArt()

      // Adding the default intelligences
      MartialArt.setDefaultIntelligences(Knistetic.getInstance())
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
   * Get and know which are the Default intellegences that are relate to the MartialArt Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the MartialArt Ability
   */
  public getDefaultIntelligences():Intelligence[] {
    return MartialArt.defaultIntelligences
  }
  
}


// --------- CALISTHENICS ART ABILITY --------- 
/**
 * Calisthenics Ability is the one of the default capacities created that can have a being. All default capacities have default intelligences, in this case the default Intelligences of Calisthenics Ability are:
 * - @module Knistetic 
 */
 class Calisthenics extends Ability {
  private static instance:Calisthenics
  private static defaultIntelligences:Intelligence[] = []

  private constructor() {
    super('Calisthenics')
  }

  /**
   * Get the current Ability that is on memory, if you want to create a new one use the Constructor method 
   * 
   * @returns {Calisthenics} Returns the current instance of the Calisthenics Ability on memory
   */
  public static getInstance() {
    if(!Calisthenics.instance) {
      Calisthenics.instance = new Calisthenics()

      // Adding the default intelligences
      Calisthenics.setDefaultIntelligences(Knistetic.getInstance())
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
   * Get and know which are the Default intellegences that are relate to the Calisthenics Ability
   * 
   * @returns {Intelligence[]} Returns the pre-default intelligences related to the Calisthenics Ability
   */
  public getDefaultIntelligences():Intelligence[] {
    return Calisthenics.defaultIntelligences
  }
  
}

export {
  Run,
  Gymnastics,
  Dance,
  MartialArt,
  Calisthenics
}