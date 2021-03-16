import { Emotion } from '@Emotion/types'
import { Fear, Happinness } from '@Emotion/index'
import { Feeling } from './types'

class Love extends Feeling {

  constructor(){
    super([new Fear(1, 1),new Happinness(1, 1)], 1, 1)
  }

}

export {
  Love
}