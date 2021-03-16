import { Emotion } from './types'

/**
 * Fear class
 */
class Fear extends Emotion {

  private _name:string = 'Fear'

  constructor(valencia:number, intensity:number) {
    super(valencia, intensity)
  }

  public name() {
    return this._name
  }
}


/**
 * Happinness class
 */
class Happinness extends Emotion {

  private _name:string = 'Happinness'

  constructor(valencia:number, intensity:number) {
    super(valencia, intensity)
  }

  public name() {
    return this._name
  }
}

export {
  Fear,
  Happinness
}