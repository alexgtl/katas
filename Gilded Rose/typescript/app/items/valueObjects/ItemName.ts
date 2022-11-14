import { AVAILABLE_ITEMS } from "../availableItems"
import ItemNameInterface from "../interfaces/itemName"

export class ItemName implements ItemNameInterface {
  private name: String

  constructor(name: String) {
    this.name = name
  }

  public isAgedBrie(): Boolean {
    return this.name === AVAILABLE_ITEMS.AgedBrie
  }

  public isSulfuras(): Boolean {
    return this.name === AVAILABLE_ITEMS.Sulfuras
  }

  public isBackstagePass(): Boolean {
    return this.name === AVAILABLE_ITEMS.BackstagePass
  }

  public isConjuredItem(): Boolean {
    return this.name === AVAILABLE_ITEMS.Conjured
  }
}