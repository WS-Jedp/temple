import { Capacity } from '@Capacity/index'
import { Intelligence } from '@Intelligence/types'

/**
 * The Logic Intelligence will is one of the 8 types of intelligences that can have a being. This one will help to the being to be more comfortable with activities or actions related to:
 * - Logical
 * - Natural
 * - Space
 * - Knistetic
 * - Lingüistic
 * - Music
 * - Intrapersonal
 * - Interpersonal
 */
class Logical extends Intelligence {

  /**
   * This property will define the default Capacities that is related with this intelligence
   */
  protected defaultCapacities:Capacity[] = [
    new Capacity('math', this, 0, 'good', 'good'),
    new Capacity('logic', this, 0, 'good', 'good'),
    new Capacity('programming', this, 0, 'good', 'good')
  ]

  constructor(capacities:Capacity[]) {
    super(capacities)
  }
}

export {
  Logical
}