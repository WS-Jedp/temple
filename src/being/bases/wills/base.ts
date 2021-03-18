import { Motivation } from '../motivations/base'
import { Feeling } from '../feelings/base'

type WillObject = {
	[key:string]: string | Motivation | Feeling[];
	name: string;
	motivation: Motivation;
	feelings: Feeling[]
}

class Will {
	protected name:string
	protected motivation: Motivation
	protected feelings: Feeling[]

	constructor (willObejct:WillObject) {
		const {name, feelings, motivation} = willObejct
 		this.name = name
		this.motivation = motivation
		this.feelings = feelings
	}

	public getName():string {
		return this.name
	}
		
}

export {
	Will,
	WillObject
}
