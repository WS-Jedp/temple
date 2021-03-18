type CharacterCharacteristics = {
  [key:string]: number[],
  emotionality: number[],
  activity: number[],
  repercussion: number[]
}

/**
 * The Character class is one of the most important aspect at the moment of know how a person is affected by a stimulus.
 * The Character is how a person want to behaviours facing a situation and this depends and how is raised
 */
abstract class Character {

  protected name:string
  protected abstract characteristics:CharacterCharacteristics

  /**
   * Create a new Character that can have a being
   * 
   * @param {string} name Define the name of the Character 
   */
  constructor(name:string){
    this.name = name
  }

  /**
   * 
   * @returns {CharacterCharacteristics} Retunrs the characteristics that define a Character
   */
  public getCharacteristics():CharacterCharacteristics {
    return this.characteristics
  }

  /**
   * 
   * @returns {string} Returns the current name of the temperament
   */
  public getName():string {
    return this.name
  }
}




export {
  Character,
  CharacterCharacteristics,
}