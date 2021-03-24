import { DefaultEmotion } from './extends'

/**
 * A Terror Emotion is one the 8 original or atomic emotions that can have or feel a being is characterized for:
 * - Low Valencia: His valencia on of the lowest Valencia that can have an emotion
 * - High Intensity: His intensity use to be hihg according to the experiece 
 * 
 * @class 
 */
class Terror extends DefaultEmotion {  
  // Define the default values that characterize the Terror class
  private static _defaultValencia:number = .2 
  private static _defaultIntensity:number = .8
  private static instanceDefault:Terror | undefined
  
  /**
   * Creates a new Terror Emotion that can feel a Being
   * 
   * @param {number} valencia Float number from 0 to 1 which will define the liking of the emotion 
   * @param {number} intensity Float number from 0 to 1 which will define the strength and impact of the emoiton
   * 
   * @returns {Terror} Returns the a new instance of the Terror Emotion
   */
  constructor(intensity: number = Terror._defaultIntensity) {
    super({name: 'Terror', valencia: Terror._defaultValencia, intensity})
  }

  /**
   * Get the default emotional values of Terror Class
   * @returns {Terror} Return the unique Default Terror values
   */
  public static getInstance():Terror {
    if(!this.instanceDefault) {
      this.instanceDefault = new Terror()
    }
    return this.instanceDefault
  }
}



/**
 * A Ecstasy Emotion is one the 8 original or atomic emotions that can have or feel a being is characterized for:
 * - High Valencia: His valencia on of the lowest Valencia that can have an emotion
 * - Medium-High Intensity: His intensity use to be hihg according to the experiece 
 * 
 * @class 
 */
class Ecstasy extends DefaultEmotion {

  // Define the default values that characterize the Ecstasy class
  private static _defaultValencia:number = .9
  private static _defaultIntensity:number = .5
  private static defaultInstance:Ecstasy | undefined

  /**
   * Creates a new Ecstasy Emotion that can feel a Being
   * 
   * @param {number} valencia Float number from 0 to 1 which will define the liking of the emotion 
   * @param {number} intensity Float number from 0 to 1 which will define the strength and impact of the emoiton
   * 
   * @returns {Fear} Returns the a new instance of the Ecstasy Emotion
   */
  constructor(intensity:number = Ecstasy._defaultIntensity) {
    super({name: 'Ecstasy', valencia: Ecstasy._defaultValencia, intensity})
  }

  /**
   * Get the default emotional values of Ecstasy Class
   * @returns {Ecstasy} Returns the unique instance of he default values of the Ecstasy emotions
   */
  public static getInstance():Ecstasy {
    if(!this.defaultInstance) {
      this.defaultInstance = new Ecstasy()
    }
    return this.defaultInstance
  }
}



/**
 * A Grief Emotion is one the 8 original or atomic emotions that can have or feel a being is characterized for:
 * - Low Valencia: His valencia on of the lowest Valencia that can have an emotion
 * - High Intensity: His intensity use to be hihg according to the experiece 
 * 
 * @class 
 */
class Grief extends DefaultEmotion {

  // Define the default values that characterize the Grief class
  private static _defaultValencia:number = .2
  private static _defaultIntensity:number = .5
  private static defaultInstance:Grief | undefined

  /**
   * Creates a new Grief Emotion that can feel a Being
   * 
   * @param {number} valencia Float number from 0 to 1 which will define the liking of the emotion 
   * @param {number} intensity Float number from 0 to 1 which will define the strength and impact of the emoiton
   * 
   * @returns {Fear} Returns the a new instance of the Grief Emotion
   */
  constructor(intensity:number = Grief._defaultIntensity) {
    super({name: 'Grief', valencia:  Grief._defaultValencia, intensity})
  }

  /**
   * Get the default emotional values of Grief Class
   * @returns {Grief} Returns the unique instance of he default values of the Grief emotions
   */
  public static getInstance():Grief {
    if(!this.defaultInstance) {
      this.defaultInstance = new Grief()
    }
    return this.defaultInstance
  }
}




/**
 * A Loathing Emotion is one the 8 original or atomic emotions that can have or feel a being is characterized for:
 * - Low Valencia: His valencia on of the lowest Valencia that can have an emotion
 * - High Intensity: His intensity use to be hihg according to the experiece 
 * 
 * @class 
 */
 class Loathing extends DefaultEmotion {

  // Define the default values that characterize the Loathing class
  private static _defaultValencia:number = .2
  private static _defaultIntensity:number = .7
  private static defaultInstance:Loathing | undefined

  /**
   * Creates a new Loathing Emotion that can feel a Being
   * 
   * @param {number} valencia Float number from 0 to 1 which will define the liking of the emotion 
   * @param {number} intensity Float number from 0 to 1 which will define the strength and impact of the emoiton
   * 
   * @returns {Fear} Returns the a new instance of the Loathing Emotion
   */
  constructor(intensity:number = Loathing._defaultIntensity) {
    super({name: 'Loathing', valencia: Loathing._defaultValencia, intensity})
  }

  /**
   * Get the default emotional values of Loathing Class
   * @returns {Loathing} Returns the unique instance of he default values of the Loathing emotions
   */
  public static getInstance():Loathing {
    if(!this.defaultInstance) {
      this.defaultInstance = new Loathing()
    }
    return this.defaultInstance
  }
}



/**
 * A Rage Emotion is one the 8 original or atomic emotions that can have or feel a being is characterized for:
 * - Low Valencia: His valencia on of the lowest Valencia that can have an emotion
 * - High Intensity: His intensity use to be hihg according to the experiece 
 * 
 * @class 
 */
 class Rage extends DefaultEmotion {

  // Define the default values that characterize the Rage class
  private static _defaultValencia:number = .1 
  private static _defaultIntensity:number = .9
  private static defaultInstance:Rage | undefined

  /**
   * Creates a new Rage Emotion that can feel a Being
   * 
   * @param {number} valencia Float number from 0 to 1 which will define the liking of the emotion 
   * @param {number} intensity Float number from 0 to 1 which will define the strength and impact of the emoiton
   * 
   * @returns {Fear} Returns the a new instance of the Rage Emotion
   */
  constructor(intensity:number = Rage._defaultIntensity) {
    super({name: 'Rage', valencia: Rage._defaultValencia, intensity})
  }

  /**
   * Get the default emotional values of Rage Class
   * @returns {Rage} Returns the unique instance of he default values of the Rage emotions
   */
  public static getInstance():Rage {
    if(!this.defaultInstance) {
      this.defaultInstance = new Rage()
    }
    return this.defaultInstance
  }
}


/**
 * A Amazement Emotion is one the 8 original or atomic emotions that can have or feel a being is characterized for:
 * - Medium Valencia: His valencia on of the lowest Valencia that can have an emotion
 * - High Intensity: His intensity use to be hihg according to the experiece 
 * 
 * @class 
 */
 class Amazement extends DefaultEmotion {

  // Define the default values that characterize the Amazement class
  private static _defaultValencia:number = .5
  private static _defaultIntensity:number = .7
  private static defaultInstance:Amazement | undefined

  /**
   * Creates a new Amazement Emotion that can feel a Being
   * 
   * @param {number} valencia Float number from 0 to 1 which will define the liking of the emotion 
   * @param {number} intensity Float number from 0 to 1 which will define the strength and impact of the emoiton
   * 
   * @returns {Fear} Returns the a new instance of the Amazement Emotion
   */
  constructor(intensity:number = Amazement._defaultIntensity) {
    super({name: 'Amazement', valencia: Amazement._defaultValencia, intensity})
  }

  /**
   * Get the default emotional values of Amazement Class
   * @returns {Amazement} Returns the unique instance of he default values of the Amazement emotions
   */
  public static getInstance():Amazement {
    if(!this.defaultInstance) {
      this.defaultInstance = new Amazement()
    }
    return this.defaultInstance
  }
}

export {
  Terror,
  Ecstasy,
  Grief,
  Amazement,
  Rage,
  Loathing,
}