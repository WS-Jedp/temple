import { Being } from './being'
import { Nervous } from './being/bases/systems'
import { Math } from './being/bases/capacities'
import { Capacity } from './being/bases/capacities/base'
import { Logical } from './being/bases/intelligences'
import { Extrinsic, Intrinsic } from './being/bases/motivations'
import { Principle } from './being/bases/principle/base'
import { Intelligence } from './being/bases/intelligences/base'
import { Love } from './being/bases/feelings'
import { Happinness } from './being/bases/emotions/index'


const me = new Being()
const love = new Love([new Happinness(9, 3)], 3, 9) 
const principle = new Principle('Never give up', love)
const intrinsic = new Intrinsic({principles: [principle], valencia: .9})

const wills = me.createWill({name: 'Travel', motivation: intrinsic, feelings: [love] })
const principles = me.addPrinciple(principle)

console.log(wills)
console.log(principles[0].getName())
