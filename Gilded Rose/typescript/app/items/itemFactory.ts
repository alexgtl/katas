import { AgedBrieItem } from "./agedBrie"
import { BackstagePassItem } from "./backstagePassItem"
import { StandardItem } from "./standardItem"
import { SulfurasItem } from "./sulfurasItem"
import { ItemName } from "./valueObjects/ItemName"
import { ItemQuality } from "./valueObjects/itemQuality"
import { ItemSellIn } from "./valueObjects/itemSellIn"

export default class itemFactory {
  static getItem(name: String, sellInValue: number, qualityValue: number) {
    const itemName: ItemName = new ItemName(name)
    const itemSellIn: ItemSellIn = new ItemSellIn(sellInValue)
    const itemQuality: ItemQuality = new ItemQuality(qualityValue)

    if (itemName.isAgedBrie()) {
      return new AgedBrieItem(itemName, itemSellIn, itemQuality)
    }

    if (itemName.isSulfuras()) {
      return new SulfurasItem(itemName, itemSellIn, itemQuality)
    }

    if (itemName.isBackstagePass()) {
      return new BackstagePassItem(itemName, itemSellIn, itemQuality)
    }

    return new StandardItem(itemName, itemSellIn, itemQuality)
  }
}
