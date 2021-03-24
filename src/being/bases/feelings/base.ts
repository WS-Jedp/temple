import { DefaultEmotion } from '../emotions/extends'

type FeelingObejct = {
  [key:string]:string | DefaultEmotion[] | number,
  name: string,
  emotions: DefaultEmotion[],
  valencia: number,
  intensity: number
}

type FeelingValues = {
  [key:string]: number | DefaultEmotion[],
  valencia: number,
  intensity: number,
  emotions: DefaultEmotion[]
}
type FeelingEmotions = {
  [key:string]: DefaultEmotion
}

/**
 * Will be the base for the Default and personalize Feelings that can have a being
 * This class is the base to all the Feelings that feel, relate or have a Being 
 * @class
 */
class Feeling {

  private _name:string

  private _emotions:FeelingEmotions = {}
  private _valencia:number
  private _intensity:number

  /**
   * Create a new Feeling which a being can feel or relate to another Clasess. The properties that must have are:
   * - name: A string that will help us to identify the feeling
   * - emotions: Array of emotions that create or dominate the feeling
   * - valencia: Float from 0 to 1 he liking value of the feeling
   * - intensity: Float from 0 to 1 that indicates the strength or impact of the feeling
   * 
   * @param {FeelingObejct} feelingData Object that have the properties name, emotions, valencia and intensity 
   * 
   * @constructor
   */
  public constructor(feelingData:FeelingObejct) {
    const {name, emotions, valencia, intensity} = feelingData
    this._name = name
    this._valencia = valencia
    this._intensity = intensity
    this.addEmotions(...emotions)
  }

  /**
   * @returns {string} Get the name of the Feeling
   */
  public get name():string {
    return this._name
  }

  /**
   * @returns {string} Returns the current name of the Feeling
   */
  public getName():string {
    return this._name
  }

  /**
   * Add emotions to the object of emotions relate to the feeling
   * 
   * @param {Emotion[]} emotions Add all the emotions that are relate to the feeling 
   * @returns {FeelingEmotions} Return the object where are saved all the Emotions with his identifiers
   */
  private addEmotions(...emotions:DefaultEmotion[]):FeelingEmotions {
    emotions.forEach(emotion => {
      this._emotions[emotion.name] = emotion
    });
    return this._emotions
  }

  /**
   * Get all the emotions that are related to the feeling
   * 
   * @returns {Emotion[]} Returns an array with all the emotions relatd to the feeling
   */
  private getEmotions():DefaultEmotion[]{
    return Object.values(this._emotions)
  }

  /**
   * Delete one emotion of the Array of Emotions of the feeling
   * 
   * @param {string} name The name of the emotion that you want delete 
   * @returns {DefaultEmotion[]} Returns the new current array of Emotion that made the feeling
   */
  public deleteEmotion(name:string):DefaultEmotion[] {
    delete this._emotions[name]
    return Object.values(this._emotions)
  }

  /**
   * Return the emotional values of teh current emotional state of the feeling
   * @returns {FeelingValues} Return an Obejct with the emotional values of each emotional state of the Feeling
   */
  public getEmotionalState():FeelingValues {
    const emotionalData:FeelingValues = {
      valencia: this._valencia,
      intensity: this._intensity,
      emotions: this.getEmotions()
    }
    return emotionalData
  }


  /**
   * Edit or set a new emotional state of the feeling, this method is perfect when the Being is affected in another way 
   * 
   * @param {FeelingValues} emotionalState An Object that have the properties valencia, intensity and emotions
   * - valencia: Number value that define the liking of the feeling
   * - intensity: Number value that define the impact and strength of the feeling
   * - emotions: Array of DefaulEmotion
   *  
   * @returns {FeelingValues} Returns the current new emotional state of the feeling
   */
  public setEmotionalState(emotionalState:FeelingValues): FeelingValues {
    const { valencia, intensity, emotions } = emotionalState

    this._valencia = valencia
    this._intensity = intensity
    this.addEmotions(...emotions)
    
    const newEmotionalState = {
      valencia: this._valencia,
      intensity: this._intensity,
      emotions: Object.values(this._emotions)
    }
    return newEmotionalState
  }
}

export {
  Feeling,
  FeelingObejct,
  FeelingEmotions,
  FeelingValues
}