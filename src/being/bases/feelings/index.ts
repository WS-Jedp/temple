import { Emotion } from '@Emotion/types'
import { Fear, Happinness } from '../emotions'
import { Feeling } from './base'

class Love extends Feeling {

  constructor(emotions:Emotion[], valencia:number, intensity: number){
    super(emotions, valencia, intensity)
  }

}

export {
  Love
}