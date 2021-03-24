import { Emotion, EmotionObject, EmotionalState } from './base'

type DefaultEmotionObject = {
    [key:string]: string | number,
    name: string,
    valencia:number,
    intensity:number
}

  /**
   * The Emotion Class is the base class of the default emotions of the library also can be used for create more personalized emotions according to each kind of being 
   * 
   * @class
   */
  class DefaultEmotion extends Emotion{
    private _name:string
    /**
     * Create a new Emotion that can affect a being according to his characteristics.
     * - name: The name which will help us to idenfity the emotion  
     * - valencia: the liking value of the emotion, 0 is equal to an unpleasent emotion and 1 to a nice emotion
     * - intensity: The strength of the emotion, 0 is equal to a weak impact of the emotion and 1 a big impact
     * 
     * @param {DefaultEmotionObject} emotion Receive an object with the needed information to create a new emotion in a being
     */
    constructor(emotion:DefaultEmotionObject) {
        const { name, valencia, intensity } = emotion
        super({
            intensity,
            valencia
        })
      this._name = name
    }
  
    /**
     * Get and know the name of the emotion with which help us to identify him
     * 
     * @returns {string} Returns the name of the emotion 
     */
    public get name():string {
      return this._name
    }
  }
  
  export {
    DefaultEmotion,
    EmotionObject,
    EmotionalState
  }