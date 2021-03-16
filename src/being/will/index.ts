import { Motivation } from '@Motivation/types'

class Will {
	protected motivation: Motivation
	protected type: number
	protected feeling: any

	constructor (motivation:Motivation) {
		this.motivation = motivation
		this.type = 0
		this.feeling = 'good'
  	}
}
