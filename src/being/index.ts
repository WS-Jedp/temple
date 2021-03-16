import { Capacity } from '@Capacity/index'
import { Principle } from '@Principle/index'

class Being {

  protected principles:Principle[];
  protected capacities:Capacity[];

  constructor(capacities:Capacity[], principles:Principle[]) {
    this.capacities = capacities
    this.principles = principles
  }
  

}

export {
  Being
}