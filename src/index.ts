import { Being } from './being'
import { Nervous } from './being/systems'
import { Math } from './being/capacity'
import { Capacity } from './being/capacity/types'
import { Logical } from './being/intelligence'
import { Extrinsic, Intrinsic } from './being/motivation'
import { Principle } from './being/principle'
import { Intelligence } from '@Intelligence/types'
import { Love } from './being/feeling'
import { Happinness } from './being/emotion/index'


const me = new Being()
const love = new Love([new Happinness(9, 3)], 3, 9) 
const principle = new Principle('Never give up', love)
const intrinsic = new Intrinsic({principles: [principle], valencia: .9})

const wills = me.createWill({name: 'Travel', motivation: intrinsic, feelings: [love] })
const principles = me.addPrinciple(principle)

console.log(wills)
console.log(principles[0].getName())
