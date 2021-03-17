import { Motivation } from '@Motivation/types'
import { Feeling } from 'being/feeling/types'

class Will {
	protected motivation: Motivation
	protected feelings: Feeling[]

	constructor (motivation:Motivation, feelings:Feeling[]) {
		this.motivation = motivation
		this.feelings = feelings
  	}
}

export {
	Will
}
