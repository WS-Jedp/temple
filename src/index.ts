import { Will } from './being/will'
import { Intrinsic } from './being/motivation'
import { Love } from '@Feelings/index'

import { Principle } from './being/principle'

const learn = new Principle('Learn', 'Never stop learning')
const love = new Love()

const Study = new Will(new Intrinsic([learn], 9), [love])

