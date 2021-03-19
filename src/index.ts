import { Ability } from './being/bases/abilities/base'
import { Being } from './being'
import  Intelligences  from './being/bases/intelligences'

const me = new Being()

const basketball = new Ability('Basketaball')
basketball.addIntelligence(Intelligences.Interpersonal.getInstance())
basketball.name

Intelligences.Interpersonal.setDefaultAbilities(basketball)

const intelligence = Intelligences.Interpersonal.getInstance()


// console.log(intelligence.primary?.getAbilities())
console.log(Intelligences.Interpersonal.defaultAbilities)
