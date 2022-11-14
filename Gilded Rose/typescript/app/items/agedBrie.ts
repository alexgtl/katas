import { ItemName } from "./valueObjects/ItemName"
import { ItemStandardQuality } from "./valueObjects/itemStandardQuality"
import { ItemSellIn } from "./valueObjects/itemSellIn"
import { UpdatableItem } from "@/items/updatableItem";

export class AgedBrieItem extends UpdatableItem {
  constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemStandardQuality) {
    super(name, sellIn, quality)
  }

  update() {
    this.decreaseSellin()
    this.increaseQuality()
  }
}
