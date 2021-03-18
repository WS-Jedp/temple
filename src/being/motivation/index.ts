import { Principle } from '@Principle/index';
import { Motivation } from './types'


type MotivationObject = {
  principles: Principle[],
  valencia: number
}

class Intrinsic extends Motivation {
  constructor(motivation:MotivationObject ){
    const { principles, valencia } = motivation
    super(principles, valencia)
  }
}


class Extrinsic extends Motivation {
  constructor(motivation:MotivationObject ){
    const { principles, valencia } = motivation
    super(principles, valencia)
  }
}

export {
  Intrinsic, 
  Extrinsic
}