import { Intelligence } from '../intelligences/base'
import { Character } from '../characters/base'
import { BeingCharacter, DefineCharacter } from '../characters'
import { Nervous } from '../systems'
import { Temperament } from '../temperaments/base'
import { DefineTemperament } from '../temperaments'

type PersonalitySecondaryIntelligences = {
  [key:string]: Intelligence
}

type IntelligencesPersonality = {
  primary: Intelligence | undefined,
  secondaries: PersonalitySecondaryIntelligences
}

class Personality {

  protected character:Character | undefined
  protected temperament:Temperament | undefined
  protected intelligences:IntelligencesPersonality = {
    primary: undefined,
    secondaries: {}
  }


  public getTemperament():Temperament | undefined {
    if (this.temperament) return this.temperament 

    return undefined
  }

  public setTemperament(temperament:Temperament):Temperament {
    this.temperament = temperament
    return this.temperament
  }

  public getTypeTemperament(system:Nervous):Temperament {
    const temperament = new DefineTemperament(system).defineTemperament()
    return temperament
  }

  public getCharacter():Character | undefined {
    return this.character ? this.character : undefined
  }

  public setCharacter(character:Character):Character {
    this.character = character
    return this.character
  }

  public getTypeCharacter(emotionality:number, activity:number, repercussion:number):Character {
    const character = new DefineCharacter({emotionality, activity, repercussion}).defineCharacter()
    return character
  }


  public getMainIntelligence():Intelligence | undefined {
    return this.intelligences.primary
  }

  public getSecondariesIntelligences():Intelligence[] {
    return Object.values(this.intelligences.secondaries)
  }

  public setMainIntelligence(intelligence:Intelligence):Intelligence {
    this.intelligences.primary = intelligence
    return this.intelligences.primary
  }

  public addSecondaryIntelligence(intelligence:Intelligence):Intelligence[] {
    this.intelligences.secondaries[intelligence.getName()] = intelligence
    return Object.values(this.intelligences.secondaries)
  }

  public removeSecondaryIntelligence(name:string):Intelligence[] {
    delete this.intelligences.secondaries[name]
    return Object.values(this.intelligences.secondaries)
  }

  public getEmotionalState() {
    const temperament = this.getTemperament()?.getCharacteristics()
    const character = this.getCharacter()?.getCharacteristics()
    const mainIntelligence = this.getMainIntelligence()?.getName()

    const emotionalState = {
      temperament,
      character,
      mainIntelligence
    }

    return emotionalState

  }

  
}

export {
  Personality
}