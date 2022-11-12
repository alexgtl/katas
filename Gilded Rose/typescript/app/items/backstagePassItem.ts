import { Item } from "./item"
import { ItemName } from "./valueObjects/ItemName"
import { ItemQuality } from "./valueObjects/itemQuality"
import { ItemSellIn } from "./valueObjects/itemSellIn"

export class BackstagePassItem extends Item {
  private readonly DAYS_TO_DUPLICATE_PRICE_TRESHOLD: number = 10
  private readonly DAYS_TO_TRIPLICATE_PRICE_TRESHOLD: number = 5


  constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
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