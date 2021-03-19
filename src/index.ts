import { Logical } from './being/bases/intelligences'
import { Being } from './being'
import { Math } from './being/bases/capacities'
import { Capacity } from './being/bases/capacities/base'
import { Ecstasy } from './being/bases/emotions'
import { Feeling } from './being/bases/feelings/base'


const joyful = new Feeling({
  name: 'Joyful',
  intensity: .8,
  valencia: .9,
  emotions: [
    Ecstasy.getDefault(),
  ]
})
const me = new Being()
const run = new Capacity('Run')
run.setFeeling(joyful)


console.log(run.getEmotionalValues())

