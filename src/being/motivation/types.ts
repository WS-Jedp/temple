import { Principle } from "@Principle/index"

abstract class Motivation {
  protected principles:Principle[]
  protected valencia:number

  constructor(principles:Principle[], valencia:number) {

    this.principles = principles
    this.valencia = valencia

  }
}


export {
  Motivation
}