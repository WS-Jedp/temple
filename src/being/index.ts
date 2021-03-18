import { Math } from '@Capacity/index'
import { Will } from './will'
import { Intelligence } from '@Intelligence/types';
import { Logical } from '@Intelligence/index';
import { Principle } from '@Principle/index'
import { Personality } from './personality';
import { Love } from './feeling';
import { Happinness } from './emotion';
import { Capacity } from '@Capacity/types';
import { Nervous } from './systems';



type BeingSystems = {
  nervous: Nervous | undefined
}

class Being {

  protected systems:BeingSystems = {
    nervous: undefined
  }
  protected personality:Personality | undefined
  protected principles:Principle[] = []
  protected capacities:Capacity[] = []
  protected will:Will[] = []

  constructor() {
  
  }

  public setNervousSystem(system:Nervous):BeingSystems {
    this.systems?.nervous && (this.systems.nervous = system)
    return this.systems
  }

}

export {
  Being
}