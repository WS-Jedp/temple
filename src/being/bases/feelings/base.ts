import { Emotion } from "../emotions/base";

abstract class Feeling {
  protected emotions:Emotion[]
  protected valencia:number
  protected intensity:number

  public constructor(emotions:Emotion[], valencia:number, intensity:number) {
    this.emotions = emotions
    this.valencia = valencia
    this.intensity = intensity
  }
}

export {
  Feeling
}