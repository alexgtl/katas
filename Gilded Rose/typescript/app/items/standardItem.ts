import { ItemName } from "./valueObjects/ItemName"
import { ItemStandardQuality } from "./valueObjects/itemStandardQuality"
import { ItemSellIn } from "./valueObjects/itemSellIn"
import { UpdatableItem } from "@/items/updatableItem"

export class StandardItem extends UpdatableItem {
  private readonly DAYS_TO_EXPIRE = 0

  constructor (name: ItemName, sellIn: ItemSellIn, quality: ItemStandardQuality) {
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
