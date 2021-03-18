import { Emotion, EmotionValues } from '../emotions/base';
import { Feeling, FeelingValues } from '../feelings/base';
import { Intelligence } from '../intelligences/base';


type CapacityIntelligences = {
  [key:string]: Intelligence
}
type CapacityEmotionalValues = {
  [key:string]: FeelingValues | EmotionValues |undefined,
  emotion: EmotionValues | undefined,
  feeling: FeelingValues | undefined
}
type CapacityEmotional = {
  [key:string]: Emotion | Feeling,
  emotion: Emotion,
  feeling: Feeling
} 

/**
 * The Capacity class will define the capacities that can have a being, each capacity should be relate to:
 * 
 * - @module Intelligence Will help us to idenfity which kind of Intelligence is relate to the capacity
 * - @module Emotion Will help us to identify which Emotion can feel a Being with the capacity
 * - @module Feeling Will help us to idenfit which Feeling can feel a Being with the capacity
 * 
 * @class
 */
 class Capacity {

  protected _name:string
  protected _skill: number = 0
   
  private _emotion:Emotion | undefined
  private _feeling: Feeling | undefined
  
  private _intelligences:CapacityIntelligences = {}
  /**
   * Create a new instance of Capacity, helpful to create a more personalize Capacity according to the being
   * 
   * @param {string} name Define the name of the Capacity for can be idetified easier  
   */
  public constructor(name: string) {
    this._name = name
  }

  /**
   * Get and know the name of the current Capacity
   * 
   * @returns {string} Returns the name of the current capacity
   */
  public get name() {
    return this._name
  }

  // ------ EMOTION SECTION -------
  /**
   * Define the Emotion that is relate with the capacity 
   * 
   * @param {Emotion} emotion Emotion that will define the new Emotion that cause the capacity  
   * @returns {Emotion} Return the Emotion that was defined to the capacity
   */
  public setEmotion(emotion:Emotion):Emotion {
    this._emotion = emotion
    return this._emotion
  }

  /**
   * Get the defined emotion of the capacity
   * 
   * @returns {Emotion | undefined} Returns the emotions defined to the capacity, if there is no emotion defined yet the return will be undefined
   */
  public get emotion():Emotion | undefined {
    if(this._emotion) return this._emotion
    return undefined
  }
  public getEmotion():Emotion | undefined {
    return this._emotion
  }

  // ------ FEELING SECTION -------
   /**
   * Define the Feeling that that have the being about the capacity 
   * 
   * @param {Feeling} feeling Feeling Type that will define the new Feeling that cause the capacity  
   * @returns 
   */
    public setFeeling(feeling:Feeling):Capacity {
      this._feeling = feeling
      return this
    }

    /**
     * Get and know the feeling that is related to the capacity
     * 
     * @returns {Feeling | undefined} Will return current feeling relate to the capacity
     */
    public get feeling():Feeling | undefined {
      return this._feeling
    }
    public getFeeling():Feeling | undefined {
      return this._feeling
    }
    
  // ------ EMOTIONAL VALUES -------
    /**
     * Get the emotional values of the capacity
     * @returns {CapactyEmotionalValues | undefined} Returns the an Obejct with the emotional values of the capacity (Emotion and feeling) in case that there is no Emotion or Feeling the value returned will undefined
     */
    public getEmotionalValues():CapacityEmotionalValues {
        return {
          emotion: this._emotion?.getEmotionalValues(),
          feeling: this._feeling?.getEmotionalValues()
        }
    }
  
    /**
     * Set all the new emotional state of the capacity and his values
     * 
     * @param {CapacityEmotional} emotional Set all the emotioanl values with a new Emotion and a new Feeling 
     * @returns {CapacityEmotional} Returns the current new emotional state of teh capacity
     */
    public setEmotionalValues(emotional:CapacityEmotional):CapacityEmotional {
      const { emotion, feeling } = emotional
      this._emotion = emotion
      this._feeling = feeling
      return {
        emotion: this._emotion,
        feeling: this._feeling
      }
    }

    


  // ------ SKILLS SECTION -------
  /**
   * Set the new value of the skill of the capacity
   * 
   * @param {number} skill Float from 0 to 1, Defining the new value of the Skill 
   */
  public set skill(skill:number) {
    if(skill < 1 && skill > 0) {
      this._skill = skill
    } else {
      throw new Error('The value of the skill must be between 0 and 1')
    } 
  }

  /**
   * Will help us to increase the skill of the capacity on the being
   * 
   * @param {number} value The quantity that the skill will incrase his value 
   * @returns {number} Will return the new current value of the skill
   */
  public increaseSkill(value:number):number {
    this.skill += value
    return this.skill
  }

  /**
   * Will help us to decrease the skill of the capacity on the being
   * 
   * @param {number} value The quantity that the skill will reduce his value
   * @returns {number} Will return the new current value of the skill
   */
  public decreaseSkill(value:number):number {
    this.skill -= value
    return this.skill
  }


  // ------ INTELLIGENCES SECTION -------

  /**
   * Will add a one or multiple new Intelligences to the array of intelligences relate to the capacity 
   * 
   * @param {Intelligence[]} intelleigences Add all the new Intelligences that are related to the capacity   
   * */
  public addIntelligence(...intelligences:Intelligence[]):CapacityIntelligences {
    intelligences.forEach(intelligence => {
      this._intelligences[intelligence.getName()] = intelligence
    });
    return this._intelligences
  }

  /**
   * Will remove a  Intelligence of the array of intelligences relate to the capacity 
   * 
   * @param {string} name The exact name of the Intelligence that we need to delete
   */
  public removeIntelligence(name:string):CapacityIntelligences {
    delete this._intelligences[name]
    return this._intelligences
  }

  /**
   * Helpful to know the Intelligences that are related to the capacity
   * 
   * @returns {Intelligence[]} Will return all the intelligences that are related to the capacity
   */
  public getIntelligences():Intelligence[]{
    return Object.values(this._intelligences)
  }
}
export {
  Capacity
}