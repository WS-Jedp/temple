import { Intelligence } from '@Intelligence/types'
import { Emotion } from '@Emotion/types'
import { Feeling } from 'being/feeling/types'
/**
 * The Capacity class will define the capacities that can have a being, each capacity must have his own
 * 
 * - name = identifier of the capacity
 * - intelligence = Intelligence related
 * - skill = hability of the capacity
 * - emotion
 * - feeling
 */
class Capacity {

  public name:string

  protected intelligences:Intelligence[]
  protected skill: number
  protected emotion:Emotion;
  protected feeling: Feeling;
  
  public constructor(name: string, intelligence: Intelligence[], skill: number, emotion: Emotion, feeling: Feeling) {

    this.name = name
    this.intelligences = intelligence
    this.skill = skill
    this.emotion = emotion
    this.feeling = feeling

  }

  /**
   * Will help us to increase the skill of the capacity on the being
   * 
   * @param {number} value The quantity that the skill will incrase his value 
   * @returns {number} Will return the new current value of the skill
   */
  public increase(value:number):number {
    this.skill += value
    return this.skill
  }


  /**
   * Will help us to decrease the skill of the capacity on the being
   * 
   * @param {number} value The quantity that the skill will reduce his value
   * @returns {number} Will return the new current value of the skill
   */
  public decrease(value:number):number {
    this.skill -= value
    return this.skill
  }


  /**
   * Helpful to know the Intelligences related to the capacity
   * 
   * @returns {Intelligence[]} Will return all the intelligences that are related to the capacity
   */
  public getIntelligences(){
    return this.intelligences
  }
}

export {
  Capacity
}