import { Item } from "./item"
import { ItemName } from "./valueObjects/ItemName"
import { ItemQuality } from "./valueObjects/itemQuality"
import { ItemSellIn } from "./valueObjects/itemSellIn"

export class AgedBrieItem extends Item {
  constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
    super(name, sellIn, quality)
  }

  update() {
    this.decreaseSellin()
    this.increaseQuality()
  }
}