type EmotionObject = {
  [key:string]: string | number,
  valencia:number,
  intensity:number
}
type EmotionalState = {
  [key:string]: number,
  valencia: number,
  intensity: number
} 

/**
 * The Emotion Class is the base class of the default emotions of the library also can be used for create more personalized emotions according to each kind of being 
 * 
 * @class
 */
class Emotion {
  private _valencia:number
  private _intensity:number


  /**
   * Create a new Emotion that can affect a being according to his characteristics.
   * - name: The name which will help us to idenfity the emotion  
   * - valencia: the liking value of the emotion, 0 is equal to an unpleasent emotion and 1 to a nice emotion
   * - intensity: The strength of the emotion, 0 is equal to a weak impact of the emotion and 1 a big impact
   * 
   * @param {EmotionObject} emotion Receive an object with the needed information to create a new emotion in a being
   */
  constructor(emotion:EmotionObject) {
    const { valencia, intensity } = emotion
    this._valencia = valencia
    this._intensity = intensity
  }

  /**
   * Get and know what are the original values of the emotion
   * 
   * @returns {EmotionalState} Returns an object with the defined values at the moment of his creation 
   */
  public getEmotionalValues():EmotionalState {
    const values = {
      valencia: this._valencia,
      intensity: this._intensity
    }
    return values
  }

  /**
   * Modify the current value of a Emotion for new ones
   * 
   * @param {EmotionalState} newValues An Object with the properties valencia and intensity that will define the new values of the Emotion
   * 
   * @returns {EmotionalState} Return an object with the new current values of the emotion
   */
  public setValues({valencia, intensity}:EmotionalState):EmotionalState {
    this._valencia = valencia
    this._intensity = intensity
    return this.getEmotionalValues()
  }
}

export {
  Emotion,
  EmotionObject,
  EmotionalState
}