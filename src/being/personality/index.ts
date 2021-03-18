import { Intelligence } from '@Intelligence/types'
import { Character } from '../character/base'
import { BeingCharacter, DefineCharacter } from '../character/extends'
import { Nervous } from '../systems'
import { Temperament } from '../temperament'
import { DefineTemperament } from '../temperament/types'

type IntelligencesPersonality = {
  primary: Intelligence | undefined,
  secondaries: Intelligence[] | undefined
}

class Personality {

  protected character:Character | undefined
  protected temperament:Temperament | undefined
  protected intelligences:IntelligencesPersonality = {
    primary: undefined,
    secondaries: []
  }


  public getTemperament():Temperament | undefined {
    if (this.temperament) return this.temperament 

    return undefined
  }
  public setTemperament(system:Nervous):Temperament {
    const temperament = new DefineTemperament(system).defineTemperament()
    this.temperament = temperament
    return this.temperament
  }

  public getCharacter():Character | undefined {
    return this.character ? this.character : undefined
  }
  public setCharacter(emotionality:number, activity:number, repercussion:number):Character {
    const beingCharacter = new DefineCharacter({emotionality, activity, repercussion}).defineCharacter()
    this.character = beingCharacter
    return this.character
  }

  public setMainIntelligence(intelligence:Intelligence):IntelligencesPersonality {
    this.intelligences.primary = intelligence
    return this.intelligences
  }

  public addSecondaryIntelligence(intelligence:Intelligence):Intelligence[] {
    this.intelligences.secondaries?.push(intelligence)
    return this.intelligences.secondaries ? this.intelligences.secondaries : [] 
  }

  
}

export {
  Personality
}