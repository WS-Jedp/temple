import { Emotion } from '@Emotion/types'
import { Fear, Happinness } from '@Emotion/index'
import { Feeling } from './types'

class Love extends Feeling {

  constructor(emotions:Emotion[], valencia:number, intensity: number){
    super(emotions, valencia, intensity)
  }

}

export {
  Love
}