import { ItemName } from "./valueObjects/ItemName"
import { ItemStandardQuality } from "./valueObjects/itemStandardQuality"
import { ItemSellIn } from "./valueObjects/itemSellIn"
import { UpdatableItem } from "@/items/updatableItem"

export class ConjuredItem extends UpdatableItem {
  constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemStandardQuality) {
    super(name, sellIn, quality)
  }

  update() {
    this.decreaseSellin()
    this.doubleDecreaseQuality()

    if (this.getSellin().isExpired()) {
      this.doubleDecreaseQuality()
    }
  }

  private doubleDecreaseQuality(): void {
    this.decreaseQuality()
    this.decreaseQuality()
  }
}
