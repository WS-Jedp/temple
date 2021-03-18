import { Character, CharacterCharacteristics } from './base'

class ApatheticCharacter extends Character {
  private static instance:ApatheticCharacter

  protected characteristics:CharacterCharacteristics = {
    emotionality: [0, .5],
    activity: [0,.5],
    repercussion: [0,.5]
  }
  private constructor() {
    super('Apathetic')
  }

  public static getInstance() {
    if(!ApatheticCharacter.instance) {
      ApatheticCharacter.instance = new ApatheticCharacter()
    }
    return ApatheticCharacter.instance
  }
}




class AmorphousCharacter extends Character {
  private static instance:AmorphousCharacter
  protected characteristics:CharacterCharacteristics = {
    emotionality: [0,.5],
    activity: [0,.5],
    repercussion: [.6,1]
  }
  private constructor() {
    super('Amorphous')
  }
  public static getInstance():AmorphousCharacter {
    if(!AmorphousCharacter.instance) {
      AmorphousCharacter.instance = new AmorphousCharacter()
    }
    return AmorphousCharacter.instance
  }
}




class PhlegmaticCharacter extends Character {
  private static instance:PhlegmaticCharacter
  protected characteristics:CharacterCharacteristics = {
    emotionality: [0,.5],
    activity: [.6,1],
    repercussion: [0,.5]
  }
  private constructor() {
    super('Phlegmatic')
  }
  public static getInstace():PhlegmaticCharacter {
    if(!PhlegmaticCharacter.instance) {
      PhlegmaticCharacter.instance = new PhlegmaticCharacter()
    }
    return PhlegmaticCharacter.instance
  }
}




class SanguineCharacter extends Character {
  private static instance:SanguineCharacter
  protected characteristics:CharacterCharacteristics = {
    emotionality: [0,.5],
    activity: [.6,1],
    repercussion: [.6,1]
  }
  private constructor() {
    super('Sanguine')
  }
  public static getInstance():SanguineCharacter {
    if(!SanguineCharacter.instance) {
      SanguineCharacter.instance = new SanguineCharacter()
    }
    return SanguineCharacter.instance
  }
}




class PassionateCharacter extends Character {
  private static instance:PassionateCharacter 
  protected characteristics:CharacterCharacteristics = {
    emotionality: [.6,1],
    activity: [.6,1],
    repercussion: [0,.5]
  }
  private constructor() {
    super('Passionate')
  }
  public static getInstance():PassionateCharacter {
    if(!PassionateCharacter.instance) {
      PassionateCharacter.instance = new PassionateCharacter()
    }
    return PassionateCharacter.instance
  }
}




class CholericCharacter extends Character {
  private static instance:CholericCharacter
  protected characteristics:CharacterCharacteristics = {
    emotionality: [.6,1],
    activity: [.6,1],
    repercussion: [.6,.1]
  }
  private constructor() {
    super('Choleric')
  }
  public static getInstance():CholericCharacter {
    if(!CholericCharacter.instance) {
      CholericCharacter.instance = new CholericCharacter()
    }
    return CholericCharacter.instance
  }
}





class SentimentalCharacter extends Character {
  private static instance:SentimentalCharacter
  protected characteristics:CharacterCharacteristics = {
    emotionality: [.6,1],
    activity: [0,.5],
    repercussion: [0,.5]
  }
  private constructor() {
    super('Sentimental')
  }
  public static getInstance():SentimentalCharacter{
    if(!SentimentalCharacter.instance) {
      SentimentalCharacter.instance = new SentimentalCharacter()
    }
    return SentimentalCharacter.instance
  }
}





class NervousCharacter extends Character {
  private static instance:NervousCharacter
  protected characteristics:CharacterCharacteristics = {
    emotionality: [.6,1],
    activity: [0,.5],
    repercussion: [.6,1]
  }
  private constructor() {
    super('Nervous')
  }
  public static getInstace():NervousCharacter {
    if(!NervousCharacter.instance) {
      NervousCharacter.instance = new NervousCharacter()
    }
    return NervousCharacter.instance
  }
}


// --------- AFFINITY ALGORITHM --------- 
type CharacteresObject = {
  [key:string]:Character,
  Sanguine: SanguineCharacter
  Passionate: PassionateCharacter,
  Sentimental: SentimentalCharacter,
  Choleric: CholericCharacter,
  Amorphous: AmorphousCharacter,
  Apathetic: ApatheticCharacter,
  Nervous: NervousCharacter,
  Phlegmatic: PhlegmaticCharacter
}
type BeingCharacter = {
  [key:string]: number,
  emotionality: number,
  activity: number,
  repercussion: number
}
type Affinity = {
  [key:string]: {value: number | string, name: string},
}
class DefineCharacter {
  private beingCharacter:BeingCharacter
  protected characteres:CharacteresObject = {
    'Sanguine': SanguineCharacter.getInstance(),
    'Passionate': PassionateCharacter.getInstance(),
    'Choleric': CholericCharacter.getInstance(),
    'Amorphous': AmorphousCharacter.getInstance(),
    'Apathetic': ApatheticCharacter.getInstance(),
    'Nervous': NervousCharacter.getInstace(),
    'Phlegmatic': PhlegmaticCharacter.getInstace(),
    'Sentimental': SentimentalCharacter.getInstance(),
  }

  /**
   * 
   * @param {BeingCharacter} character Receive the defined character values of the being 
   */
  constructor(character:BeingCharacter) {
    this.beingCharacter = character
  }

  public defineCharacter() {
    let affinity:Affinity = {}
    Object.values(this.characteres).forEach(character => {
      const characterCharacteristics:CharacterCharacteristics = character.getCharacteristics()
      let currentAffinity:number = 0

      for (const characteristic in characterCharacteristics) {
        let differenceOne:number = Math.abs(characterCharacteristics[characteristic][0] - this.beingCharacter[characteristic]) 
        let differenceTwo:number = Math.abs(characterCharacteristics[characteristic][1] - this.beingCharacter[characteristic]) 
        currentAffinity += differenceOne + differenceTwo
      }

      affinity = {
        ...affinity,
        [character.getName()]: {
          value: currentAffinity.toFixed(1),
          name: character.getName()
        }
      }
    })

    return this.selectCharacter(affinity)
  }

  public selectCharacter(affinity:Affinity):Character {
    const arrayAffinity = Object.values(affinity).reduce((prev, curr) => prev.value <= curr.value ? prev : curr)
    const mainCharacter = this.characteres[arrayAffinity.name]
    return mainCharacter
  }

}

export {
  ApatheticCharacter,
  AmorphousCharacter,
  PhlegmaticCharacter,
  SanguineCharacter,
  PassionateCharacter,
  CholericCharacter,
  SentimentalCharacter,
  NervousCharacter,
  DefineCharacter
}