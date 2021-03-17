import { Principle } from '@Principle/index';
import { Motivation } from './types'


class Intrinsic extends Motivation {
  constructor(principles:Principle[], valencia:number ){
    super(principles, valencia)
  }
}


class Extrinsic extends Motivation {
  constructor(principles:Principle[], valencia:number){
    super(principles, valencia)
  }
}

export {
  Intrinsic, 
  Extrinsic
}