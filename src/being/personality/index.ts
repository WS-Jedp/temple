import { Intelligence } from '@Intelligence/types'
import { Character } from 'being/character/base'
import { Temperament } from 'being/temperament'

type IntelligencesPersonality = {
  primary: Intelligence,
  secondaries: Intelligence[]
}

class Personality {

  protected character:Character | undefined
  protected temparament:Temperament | undefined
  protected intelligences:IntelligencesPersonality | undefined

  
}

export {
  Personality
}