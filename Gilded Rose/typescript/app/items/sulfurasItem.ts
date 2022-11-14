import { Item } from "./item"
import { ItemName } from "./valueObjects/ItemName"
import { ItemSellIn } from "./valueObjects/itemSellIn"
import { ItemSulfurasQuality } from "./valueObjects/itemSulfurasQuality"

export class SulfurasItem extends Item {
  constructor(name: ItemName, sellIn: ItemSellIn) {
    super(name, sellIn, new ItemSulfurasQuality())
  }

  update() {
    this.decreaseSellin()
  }
}
