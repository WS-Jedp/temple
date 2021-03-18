import { Feeling } from "@Feelings/types";

class Principle {

  protected name:string
  protected feeling:Feeling

  constructor(name:string, feeling: Feeling) {
    this.name = name
    this.feeling = feeling
  }

  public getName():string {
    return this.name
  }
}

export {
  Principle
}