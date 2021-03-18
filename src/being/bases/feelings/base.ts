import { Emotion } from '../emotions/base'

type FeelingObejct = {
  [key:string]:string | Emotion[] | number,
  name: string,
  emotions: Emotion[],
  valencia: number,
  intensity: number
}

type FeelingValues = {
  [key:string]: number | Emotion[],
  valencia: number,
  intensity: number,
  emotions: Emotion[]
}
type FeelingEmotions = {
  [key:string]: Emotion
}
class Feeling {

  private _name:string

  private _emotions:FeelingEmotions = {}
  private _valencia:number
  private _intensity:number

  public constructor(feelingData:FeelingObejct) {
    const {name, emotions, valencia, intensity} = feelingData
    this._name = name
    this._valencia = valencia
    this._intensity = intensity
    this.addEmotions(...emotions)
  }

  public get name():string {
    return this._name
  }

  private addEmotions(...emotions:Emotion[]):FeelingEmotions {
    emotions.forEach(emotion => {
      this._emotions[emotion.name] = emotion
    });
    return this._emotions
  }

  private getEmotions():Emotion[]{
    return Object.values(this._emotions)
  }

  public getEmotionalValues():FeelingValues {
    const emotionalData:FeelingValues = {
      valencia: this._valencia,
      intensity: this._intensity,
      emotions: this.getEmotions()
    }
    return emotionalData
  }
}

export {
  Feeling,
  FeelingObejct,
  FeelingEmotions,
  FeelingValues
}