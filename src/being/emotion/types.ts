/**
 * The Emotion Abstract class will be the base class for the rest of the emotions.
 * Thanks to his Class we can create the main emotions that can have a being 
 */
abstract class Emotion {

  protected valencia:number
  protected intensity:number

  constructor(valencia:number, intensity:number) {
    this.valencia = valencia
    this.intensity = intensity
  }
}

export {
  Emotion
}