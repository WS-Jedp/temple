type MotivationType = 'intrinsic' | 'extrincsic' 


/**
 * Will let us define the type of a motivation
 */
interface Motivation {
  intensity: number;
  emotion: any;
  feeling: any;
  type: MotivationType;
}

export {
  MotivationType,
  Motivation
}