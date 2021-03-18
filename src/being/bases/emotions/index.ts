import { Emotion } from './base'

/**
 * A Fear Emotion should be a Emotion that have a low Valencia and a high intensity according to the being  
 */
class Fear extends Emotion {

  /**
   * Creates a new Fear Emotion that can feel a Being
   * 
   * @param {number} valencia Float number from 0 to 1 which will define the liking of the emotion 
   * @param {number} intensity Float number from 0 to 1 which will define the strength and impact of the emoiton
   * 
   * @returns {Fear} Returns the a new instance of the Fear Emotion
   */
  constructor(valencia:number, intensity:number) {
    super({name: 'Fear', valencia, intensity})
  }
}


/**
 * A Happines Emotion should be a Emotion that have a high Valencia and a high intensity according to the being  
 */
class Happinness extends Emotion {

  /**
   * Creates a new Happinness Emotion that can feel a Being
   * 
   * @param {number} valencia Float number from 0 to 1 which will define the liking of the emotion 
   * @param {number} intensity Float number from 0 to 1 which will define the strength and impact of the emoiton
   * 
   * @returns {Fear} Returns the a new instance of the Happinness Emotion
   */
  constructor(valencia:number, intensity:number) {
    super({name: 'Happinness', valencia, intensity})
  }
}

export {
  Fear,
  Happinness
}