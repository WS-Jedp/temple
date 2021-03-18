import { Emotion } from '@Emotion/types';
import { Feeling } from '@Feelings/types';
import { Intelligence } from '@Intelligence/types';

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

  private name:string
  
  protected intelligences:Intelligence[] = []
  protected feeling: Feeling | undefined
  protected emotion:Emotion | undefined
  protected skill: number = 0
  
  public constructor(name: string) {
    this.name = name
  }

  /**
   * Get and know the name of the current Capacity
   * 
   * @returns {string} Returns the name of the current capacity
   */
  public getName() {
    return this.name
  }

  // ------ EMOTION SECTION -------
  /**
   * Define the Emotion that that have the being about the capacity 
   * 
   * @param {Emotion} emotion Emotion that will define the new Emotion that cause the capacity  
   * @returns 
   */
  public setEmotion(emotion:Emotion):Capacity {
    this.emotion = emotion
    return this
  }

  // ------ FEELING SECTION -------
   /**
   * Define the Feeling that that have the being about the capacity 
   * 
   * @param {Feeling} feeling Feeling Type that will define the new Feeling that cause the capacity  
   * @returns 
   */
    public setFeeling(feeling:Feeling):Capacity {
      this.feeling = feeling
      return this
    }


  // ------ SKILLS SECTION -------

  /**
   * Set the value of the skill of the capacity
   * 
   * @param {number} skill Define the new value of the Skill 
   * @returns 
   */
  public setSKill(skill:number):number {
    this.skill = skill
    return this.skill
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
   * Will add a new Intelligence to the array of intelligences relate to the capacity 
   * 
   * @param {Intelligence} intelleigence The new intelligence that relate to the capacities
   */
  public addIntelligence(intelleigence:Intelligence):Intelligence[] {
    this.intelligences.push(intelleigence)
    return this.intelligences
  }

  /**
   * Will add a new Intelligence to the array of intelligences relate to the capacity 
   * 
   * @param {Intelligence} intelleigence The new intelligence that relate to the capacities
   */
  public remove(name:string):Intelligence[] {
    this.intelligences.forEach((intelligence, index) => {
      intelligence.getName() === name && delete this.intelligences[index]
    });
    return this.intelligences
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