import { Math } from './bases/capacities'
import { Will, WillObject } from './bases/wills/base'
import { Intelligence } from './bases/intelligences/base';
import { Principle } from './bases/principle/base'
import { Personality } from './bases/personality';
import { Capacity } from './bases/capacities/base';
import { Nervous } from './bases/systems';
import { Feeling } from './bases/feelings/base'
import { Motivation } from './bases/motivations/base';



type BeingSystems = {
  nervous: Nervous | undefined
}

type BeingCapacities = {
  [key:string]: Capacity
}

type BeingPrinciples = {
  [key:string]: Principle
}

type BeingWill = {
  [key:string]: Will
}

type BeingMotivations = {
  [key:string]: Motivation
}

class Being {

  protected systems:BeingSystems = {
    nervous: undefined
  }
  protected personality:Personality
  protected principles:BeingPrinciples = {}
  protected capacities:BeingCapacities = {}
  protected wills:BeingWill = {}
  // protected motivations:BeingMotivations = {}
  

  constructor() {
    this.personality = new Personality()
  }


  // --------- NERVOUS SYSTEM SECTION -------------
  public getNervousSystem():Nervous | undefined {
    return this.systems?.nervous ? this.systems.nervous : undefined
  }
  public createNervousSystem(sensibility:number, activity: number, concentration: number, reactivity:number, adaptability:number):BeingSystems {
    const nervousSystem = new Nervous(sensibility, activity, concentration, reactivity, adaptability)
    this.systems.nervous = nervousSystem
    return this.systems
  }
  public setNervousSystem(system:Nervous):BeingSystems {
    this.systems.nervous = system
    return this.systems
  }

  // --------- PERSONALITY SECTION -------------
  public getPersonality():Personality {
    return this.personality
  }

  public setPersonality(personality:Personality):Personality {
    this.personality = personality
    return this.personality
  }

  // --------- CAPACITIES SECTION -------------
  public getCapacities():BeingCapacities {
    return this.capacities
  }
  public addCapacity(capacity:Capacity):Capacity[] {
    this.capacities[capacity.name] = capacity
    return Object.values(this.capacities)
  }
  public addCapacities(...capacities:Capacity[]):Capacity[] {
    capacities.forEach(capacity => {
      this.capacities[capacity.name]= capacity
    });
    return Object.values(this.capacities)
  }
  public removeCapacity(name:string):Capacity[] {
    delete this.capacities[name]
    return Object.values(this.capacities)
  }

  // --------- PRINCIPLES SECTION -------------
  public getPrinciple(name:string):Principle {
    return this.principles[name]
  }
  public getAllPrinciples():Principle[] {
    return Object.values(this.principles)
  }
  public addPrinciple(principle:Principle):Principle[] {
    this.principles[principle.getName()] = principle
    return Object.values(this.principles)
  }
  public createPrinciple(name:string, feeling:Feeling):Principle[] {
    const principle = new Principle(name, feeling)
    this.principles[principle.getName()] = principle
    return Object.values(this.principles)
  }


  // --------- WILL SECTION -------------
  public getWills():Will[] {
    return Object.values(this.wills)
  }
  public addWill(will:Will):Will[] {
    this.wills[will.getName()] = will
    return Object.values(this.wills)
  }
  public createWill(willObject:WillObject):Will[] {
    const will = new Will(willObject)
    this.wills[willObject.name] = will
    return Object.values(this.wills)
  }
  public removeWill(name:string):Will[] {
    delete this.wills[name]
    return Object.values(this.wills)
  }

  // // --------- WILL SECTION -------------
  // public getMotivations():Motivation[] {
  //   return Object.values(this.motivations)
  // }
  // public getMotivation(name:string):Motivation {
  //   return this.motivations[name]
  // }
  // public addMotivation(motivation:Motivation) {
  //   this.motivations[motivation.getNa]
  // }

}

export {
  Being
}