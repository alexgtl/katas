import { Item } from "@/items/item"
import { ItemName } from "@/items/valueObjects/ItemName"
import { ItemSellIn } from "@/items/valueObjects/itemSellIn"
import { ItemStandardQuality } from "@/items/valueObjects/itemStandardQuality"

export class UpdatableItem extends Item {
  protected constructor (name: ItemName, sellIn: ItemSellIn, quality: ItemStandardQuality) {
    super(name, sellIn, quality)
  }

  public update() {}

  public increaseQuality() {
    (this.quality as ItemStandardQuality).increase()
  }

  public decreaseQuality() {
    (this.quality as ItemStandardQuality).decrease()
  }
}
