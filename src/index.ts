import { DefineTemperament } from './being/temperament/types'
import { Nervous } from './being/systems/index'

const testNervous = new Nervous(.2, .7, .7, .0, .2)

const define = new DefineTemperament(testNervous)
const temperaments = define.defineTemperament()
console.log(temperaments)
