import { ItemName } from "./valueObjects/ItemName"
import { ItemStandardQuality } from "./valueObjects/itemStandardQuality"
import { ItemSellIn } from "./valueObjects/itemSellIn"
import { UpdatableItem } from "@/items/updatableItem"

export class BackstagePassItem extends UpdatableItem {
  private readonly DAYS_TO_DUPLICATE_PRICE_TRESHOLD: number = 10
  private readonly DAYS_TO_TRIPLICATE_PRICE_TRESHOLD: number = 5


  constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemStandardQuality) {
    super(name, sellIn, quality)
  }

  update() {
    this.decreaseSellin()
    this.increaseQuality()

    if (this.getSellin().isLessThan(this.DAYS_TO_DUPLICATE_PRICE_TRESHOLD)) {
      this.increaseQuality()
    }

    if (this.getSellin().isLessThan(this.DAYS_TO_TRIPLICATE_PRICE_TRESHOLD)) {
      this.increaseQuality()
    }

    if (this.getSellin().isExpired()) {
      this.setQualityToMinValue()
    }
  }
}
