import { AVAILABLE_ITEMS } from "../availableItems"
import ItemNameInterface from "../interfaces/itemName"

export class ItemName implements ItemNameInterface {
  private name: String

  constructor(name: String) {
    this.name = name
  }

  public isAgedBrie(): boolean {
    return this.name === AVAILABLE_ITEMS.AgedBrie
  }

  public isSulfuras(): boolean {
    return this.name === AVAILABLE_ITEMS.Sulfuras
  }

  public isBackstagePass(): boolean {
    return this.name === AVAILABLE_ITEMS.BackstagePass
  }
}