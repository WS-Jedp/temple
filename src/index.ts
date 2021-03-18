import { Logical } from './being/bases/intelligences'
import { Being } from './being'
import { Math } from './being/bases/capacities'
import { Capacity } from './being/bases/capacities/base'
import { Happinness } from './being/bases/emotions'
import { Love } from './being/bases/feelings'

const me = new Being()
const run = new Capacity('Run')

run.addIntelligence(Logical.getInstance())
const math = Math.getInstance()
const happinness = new Happinness(1,1) 
run.skill = .9
run.getIntelligences()

run.setEmotion(happinness)
const emoRun = run.emotion
console.log(run.getEmotionalValues())

