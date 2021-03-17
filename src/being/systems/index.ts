import { System } from './types'

class Nervous extends System {

  protected sensibility:number
  protected activity:number
  protected concentration:number
  protected reactivity:number
  protected adaptability:number

  constructor(sensibility:number, activity: number, concentration: number, reactivity:number, adaptability:number){
    super('Nervous')

    this.sensibility = sensibility
    this.activity = activity
    this.concentration = concentration
    this.reactivity = reactivity
    this.adaptability = adaptability
  }

} 