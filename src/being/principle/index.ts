import { Motivation } from "@Motivation/types";

class Principle {

  protected name:string
  protected description:string
  protected motivation: Motivation

  constructor(name:string, motivation: Motivation, description: string = '') {
    this.motivation = motivation
    this.name = name
    this.description = description 
  }
}

export {
  Principle
}