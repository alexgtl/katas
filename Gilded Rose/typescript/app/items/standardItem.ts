import { Item } from "./item"
import { ItemName } from "./valueObjects/ItemName"
import { ItemQuality } from "./valueObjects/itemQuality"
import { ItemSellIn } from "./valueObjects/itemSellIn"

export class StandardItem extends Item {
  private readonly DAYS_TO_EXPIRE = 0

  constructor (name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
    super(name, sellIn, quality);
  }

  public update() {
    this.decreaseSellin()
    this.decreaseQuality()

    if (this.isExpired(this.DAYS_TO_EXPIRE)) {
      this.decreaseQuality()
    }
  }
}