import { Ability } from '../abilities/base'
import { Intelligence } from './base'

import { Math, Programming, Reasoning } from '../abilities/logical'
import { MusicalInstrument, MusicalInterpretation, Sing } from '../abilities/musical'
import { Plant } from '../abilities/natural'
import { Draw, Sculpt, Driving } from '../abilities/spatial'
import { Calisthenics, Dance, Run, Gymnastics, MartialArt } from '../abilities/knistetic'
import { Independence } from '../abilities/intrapersonal'
import { Express, Lead } from '../abilities/interpersonal'
import { Reading, Speaker, Writing } from '../abilities/linguistic'




// --------- LOGICAL INTELLIGENCE SECTION ---------
// --------- LOGICAL INTELLIGENCE SECTION ---------
/**
 * The Logic Intelligence is one of the 8 intelligences that can have a being. Each intelligence is related by default to some Abilities. 
 * The default Abilities of the Logical Intelligence are:
 * - @module Math
 * - @module Reasoning
 * - @module Programming
 */
class Logical extends Intelligence {

  // The current space on memory of our Instance
  private static instance: Logical
  private static defaultAbilities: Ability[] = []
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

        // Add the default Abilities that are relate to the Logical Intelligence
        Logical.setDefaultAbilities(Math.getInstance(), Reasoning.getInstance(), Programming.getInstance())
      }
      return this.instance
    }

  /**
   * If for some reason we want or need to change the default values this method will define the default Abilities that will Have an intelligence
   * 
   * @param {Ability[]} abilities Add all the Abilities that are relate to the intelligence  
   */
  public static setDefaultAbilities(...abilities:Ability[]):void {
    abilities.forEach(ability => {
      this.defaultAbilities.push(ability)
    })
  }
}
// --------- LOGICAL INTELLIGENCE SECTION ---------
// --------- LOGICAL INTELLIGENCE SECTION ---------





// --------- MUSICAL INTELLIGENCE SECTION ---------
// --------- MUSICAL INTELLIGENCE SECTION ---------
/**
 * The Musical Intelligence is one of the 8 intelligences that can have a being. Each intelligence is related by default to some Abilities. 
 * The default Abilities of the Musical Intelligence are:
 * - @module MusicalInstrument
 * - @module MusicalInstrument
 * - @module Sing
 */
class Musical extends Intelligence {

  // The current space on memory of our Instance
  private static instance: Musical
  private static defaultAbilities: Ability[] = []

  private constructor() {
    super('Musical')
  }

   /**
   * Get the only instance of the Musical Intelligence
   * 
   * @returns {Musical} Return the unique instance of the Intelligence
   */
    public static getInstance():Musical {
      if(!Musical.instance) {
        Musical.instance = new Musical()

        // Add the default Abilities that are relate to the Musical Intelligence
        Musical.setDefaultAbilities(Sing.getInstance(), MusicalInstrument.getInstance(), MusicalInterpretation.getInstance())
      }
      return this.instance
    }

  /**
   * If for some reason we want or need to change the default values this method will define the default Abilities that will Have an intelligence
   * 
   * @param {Ability[]} abilities Add all the Abilities that are relate to the intelligence  
   */
  public static setDefaultAbilities(...abilities:Ability[]):void {
    abilities.forEach(ability => {
      this.defaultAbilities.push(ability)
    })
  }
}
// --------- MUSICAL INTELLIGENCE SECTION ---------
// --------- MUSICAL INTELLIGENCE SECTION ---------





// --------- NATURAL INTELLIGENCE SECTION ---------
// --------- NATURAL INTELLIGENCE SECTION ---------
/**
 * The Natural Intelligence is one of the 8 intelligences that can have a being. Each intelligence is related by default to some Abilities. 
 * The default Abilities of the Natural Intelligence are:
 * - @module Plant
 */
 class Natural extends Intelligence {

  // The current space on memory of our Instance
  private static instance: Natural
  private static defaultAbilities: Ability[] = []

  private constructor() {
    super('Natural')
  }

   /**
   * Get the only instance of the Natural Intelligence
   * 
   * @returns {Natural} Return the unique instance of the Intelligence
   */
    public static getInstance():Natural {
      if(!Natural.instance) {
        Natural.instance = new Natural()

        // Add the default Abilities that are relate to the Natural Intelligence
        Natural.setDefaultAbilities(Plant.getInstance())
      }
      return this.instance
    }

  /**
   * If for some reason we want or need to change the default values this method will define the default Abilities that will Have an intelligence
   * 
   * @param {Ability[]} abilities Add all the Abilities that are relate to the intelligence  
   */
  public static setDefaultAbilities(...abilities:Ability[]):void {
    abilities.forEach(ability => {
      this.defaultAbilities.push(ability)
    })
  }
}
// --------- NATURAL INTELLIGENCE SECTION ---------
// --------- NATURAL INTELLIGENCE SECTION ---------






// --------- LINGUISTIC INTELLIGENCE SECTION ---------
// --------- LINGUISTIC INTELLIGENCE SECTION ---------
/**
 * The Linguistic Intelligence is one of the 8 intelligences that can have a being. Each intelligence is related by default to some Abilities. 
 * The default Abilities of the Linguistic Intelligence are:
 * - @module Reading
 * - @module Speaker
 * - @module Writing
 */
 class Linguistic extends Intelligence {

  // The current space on memory of our Instance
  private static instance: Linguistic
  private static defaultAbilities: Ability[] = []

  private constructor() {
    super('Linguistic')
  }

   /**
   * Get the only instance of the Linguistic Intelligence
   * 
   * @returns {Linguistic} Return the unique instance of the Intelligence
   */
    public static getInstance():Linguistic {
      if(!Linguistic.instance) {
        Linguistic.instance = new Linguistic()

        // Add the default Abilities that are relate to the Linguistic Intelligence
        Linguistic.setDefaultAbilities(Speaker.getInstance(), Reading.getInstance(), Writing.getInstance())
      }
      return this.instance
    }

  /**
   * If for some reason we want or need to change the default values this method will define the default Abilities that will Have an intelligence
   * 
   * @param {Ability[]} abilities Add all the Abilities that are relate to the intelligence  
   */
  public static setDefaultAbilities(...abilities:Ability[]):void {
    abilities.forEach(ability => {
      this.defaultAbilities.push(ability)
    })
  }
}
// --------- LINGUISTIC INTELLIGENCE SECTION ---------
// --------- LINGUISTIC INTELLIGENCE SECTION ---------





// --------- SPATIAL INTELLIGENCE SECTION ---------
// --------- SPATIAL INTELLIGENCE SECTION ---------
/**
 * The Spatial Intelligence is one of the 8 intelligences that can have a being. Each intelligence is related by default to some Abilities. 
 * The default Abilities of the Spatial Intelligence are:
 * - @module Draw
 * - @module Driving
 * - @module Sculpt
 */
 class Spatial extends Intelligence {

  // The current space on memory of our Instance
  private static instance: Spatial
  private static defaultAbilities: Ability[] = []

  private constructor() {
    super('Spatial')
  }

   /**
   * Get the only instance of the Spatial Intelligence
   * 
   * @returns {Spatial} Return the unique instance of the Intelligence
   */
    public static getInstance():Spatial {
      if(!Spatial.instance) {
        Spatial.instance = new Spatial()

        // Add the default Abilities that are relate to the Spatial Intelligence
        Spatial.setDefaultAbilities(Driving.getInstance(), Draw.getInstance(), Sculpt.getInstance())
      }
      return this.instance
    }

  /**
   * If for some reason we want or need to change the default values this method will define the default Abilities that will Have an intelligence
   * 
   * @param {Ability[]} abilities Add all the Abilities that are relate to the intelligence  
   */
  public static setDefaultAbilities(...abilities:Ability[]):void {
    abilities.forEach(ability => {
      this.defaultAbilities.push(ability)
    })
  }
}
// --------- SPATIAL INTELLIGENCE SECTION ---------
// --------- SPATIAL INTELLIGENCE SECTION ---------





// --------- KNISTETIC INTELLIGENCE SECTION ---------
// --------- KNISTETIC INTELLIGENCE SECTION ---------
/**
 * The Knistetic Intelligence is one of the 8 intelligences that can have a being. Each intelligence is related by default to some Abilities. 
 * The default Abilities of the Knistetic Intelligence are:
 * - @module Dance
 * - @module Run
 * - @module MartialArt
 * - @module Gymnastics
 * - @module Calisthenics
 */
 class Knistetic extends Intelligence {

  // The current space on memory of our Instance
  private static instance: Knistetic
  private static defaultAbilities: Ability[] = []

  private constructor() {
    super('Knistetic')
  }

   /**
   * Get the only instance of the Knistetic Intelligence
   * 
   * @returns {Knistetic} Return the unique instance of the Intelligence
   */
    public static getInstance():Knistetic {
      if(!Knistetic.instance) {
        Knistetic.instance = new Knistetic()

        // Add the default Abilities that are relate to the Knistetic Intelligence
        Knistetic.setDefaultAbilities(Run.getInstance(), Dance.getInstance(), MartialArt.getInstance(), Gymnastics.getInstance(), Calisthenics.getInstance())
      }
      return this.instance
    }

  /**
   * If for some reason we want or need to change the default values this method will define the default Abilities that will Have an intelligence
   * 
   * @param {Ability[]} abilities Add all the Abilities that are relate to the intelligence  
   */
  public static setDefaultAbilities(...abilities:Ability[]):void {
    abilities.forEach(ability => {
      this.defaultAbilities.push(ability)
    })
  }
}
// --------- KNISTETIC INTELLIGENCE SECTION ---------
// --------- KNISTETIC INTELLIGENCE SECTION ---------





// --------- INTRAPERSONAL INTELLIGENCE SECTION ---------
// --------- INTRAPERSONAL INTELLIGENCE SECTION ---------
/**
 * The Intrapersonal Intelligence is one of the 8 intelligences that can have a being. Each intelligence is related by default to some Abilities. 
 * The default Abilities of the Intrapersonal Intelligence are:
 * - @module Lead
 * - @module Express
 */
 class Intrapersonal extends Intelligence {

  // The current space on memory of our Instance
  private static instance: Intrapersonal
  private static defaultAbilities: Ability[] = []

  private constructor() {
    super('Intrapersonal')
  }

   /**
   * Get the only instance of the Intrapersonal Intelligence
   * 
   * @returns {Intrapersonal} Return the unique instance of the Intelligence
   */
    public static getInstance():Intrapersonal {
      if(!Intrapersonal.instance) {
        Intrapersonal.instance = new Intrapersonal()

        // Add the default Abilities that are relate to the Intrapersonal Intelligence
        Intrapersonal.setDefaultAbilities(Independence.getInstance(), Writing.getInstance())
      }
      return this.instance
    }

  /**
   * If for some reason we want or need to change the default values this method will define the default Abilities that will Have an intelligence
   * 
   * @param {Ability[]} abilities Add all the Abilities that are relate to the intelligence  
   */
  public static setDefaultAbilities(...abilities:Ability[]):void {
    abilities.forEach(ability => {
      this.defaultAbilities.push(ability)
    })
  }
}
// --------- INTRAPERSONAL INTELLIGENCE SECTION ---------
// --------- INTRAPERSONAL INTELLIGENCE SECTION ---------





// --------- INTERPERSONAL INTELLIGENCE SECTION ---------
// --------- INTERPERSONAL INTELLIGENCE SECTION ---------
/**
 * The Interpersonal Intelligence is one of the 8 intelligences that can have a being. Each intelligence is related by default to some Abilities. 
 * The default Abilities of the Interpersonal Intelligence are:
 * - @module Lead
 * - @module Express
 */
 class Interpersonal extends Intelligence {

  // The current space on memory of our Instance
  private static instance: Interpersonal
  public static defaultAbilities: Ability[] = []

  private constructor() {
    super('Interpersonal')
  }

   /**
   * Get the only instance of the Interpersonal Intelligence
   * 
   * @returns {Interpersonal} Return the unique instance of the Intelligence
   */
    public static getInstance():Interpersonal {
      if(!Interpersonal.instance) {
        Interpersonal.instance = new Interpersonal()

        // Add the default Abilities that are relate to the Interpersonal Intelligence
        Interpersonal.setDefaultAbilities(Lead.getInstance(), Express.getInstance())
      }
      return this.instance
    }

  /**
   * If for some reason we want or need to change the default values this method will define the default Abilities that will Have an intelligence
   * 
   * @param {Ability[]} abilities Add all the Abilities that are relate to the intelligence  
   */
  public static setDefaultAbilities(...abilities:Ability[]):void {
    abilities.forEach(ability => {
      this.defaultAbilities.push(ability)
    })
  }
}
// --------- INTERPERSONAL INTELLIGENCE SECTION ---------
// --------- INTERPERSONAL INTELLIGENCE SECTION ---------

export {
  Logical,
  Musical,
  Natural,
  Spatial,
  Linguistic,
  Knistetic,
  Intrapersonal,
  Interpersonal
}