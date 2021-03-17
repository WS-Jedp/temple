import { Intelligence } from '@Intelligence/types'
import { Character } from 'being/character'
import { Temparament } from 'being/temperament'

type IntelligencesPersonality = {
  primary: Intelligence,
  secondaries: Intelligence[]
}

class Personality {

  protected character:Character | undefined
  protected temparament:Temparament | undefined
  protected intelligences:IntelligencesPersonality | undefined

  
}

export {
  Personality
}