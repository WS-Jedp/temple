import { Capacity } from './types'
import { Logical } from '@Intelligence/index'
import { Happinness } from '@Emotion/index'
import { Love } from '@Feelings/index'
import { Emotion } from '@Emotion/types'
import { Feeling } from '@Feelings/types'
import { Intelligence } from '@Intelligence/types'

class Math extends Capacity {
  constructor(emotion:Emotion, feeling:Feeling, intelligences:Intelligence[]){
    super('Math', intelligences, 0, emotion, feeling)
  }
}

export {
  Math
}