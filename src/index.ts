import { DefineTemperament } from './being/temperament/types'
import { Nervous } from './being/systems/index'
import { AmorphousCharacter } from './being/character/extends'

import { DefineCharacter } from './being/character/extends'


// const testNervous = new Nervous(.2, .7, .7, .0, .2)

// const define = new DefineTemperament(testNervous)
// const temperaments = define.defineTemperament()
// console.log(temperaments)

// const old = AmorphousCharacter.getInstance()
// const new_character = AmorphousCharacter.getInstance()
// console.log(old === new_character)

const character = new DefineCharacter({emotionality: .9, activity: .9, repercussion: .2})
console.log(character.defineCharacter())



