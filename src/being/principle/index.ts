import { Motivation } from "@Motivation/types";

class Principle {

  protected name:string
  protected description:string

  constructor(name:string, description: string = '') {
    this.name = name
    this.description = description 
  }
}

export {
  Principle
}