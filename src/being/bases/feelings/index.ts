import { DefaultEmotion } from '../emotions/extends'
import { Amazement, Ecstasy } from '../emotions'
import { Feeling } from './base'

type FeelingObject = {
  [key:string]: number | DefaultEmotion[],
  emotions: DefaultEmotion[],
  valencia: number,
  intensity: number
}

class Love extends Feeling {
  constructor(emotionalState:FeelingObject){
    const { emotions, valencia, intensity } = emotionalState
    super({name: 'Love', emotions, valencia, intensity})
  }
}

class Euphoria extends Feeling {
  constructor(emotionalState:FeelingObject){
    const { emotions, valencia, intensity } = emotionalState
    super({name: 'Euphoria', emotions, valencia, intensity})
  }
}

export {
  Love,
  Euphoria
}