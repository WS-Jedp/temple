import { Capacity } from '@Capacity/types'
import { Will } from './will'
import { Intelligence } from '@Intelligence/types';
import { Principle } from '@Principle/index'
import { Personality } from './personality';

class Being {

  protected personality:Personality | null = null
  protected principles:Principle[];
  protected capacities:Capacity[];
  protected will:Will[] | null = null

  constructor(capacities:Capacity[], principles:Principle[]) {
    this.capacities = capacities
    this.principles = principles
  }

}

export {
  Being
}