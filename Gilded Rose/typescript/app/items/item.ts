import { availableQualities } from "./interfaces/availableQualities"
import { ItemName } from "./valueObjects/ItemName"
import { ItemSellIn } from "./valueObjects/itemSellIn"

export abstract class Item {
  private name: ItemName
  private readonly sellIn: ItemSellIn
  protected readonly quality: availableQualities

  private readonly DEFAULT_DAYS_TO_EXPIRE = 0

  protected constructor (name: ItemName, sellIn: ItemSellIn, quality: availableQualities) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  public abstract update()

  public getSellin(): ItemSellIn {
    return this.sellIn
  }

  public getQuality(): availableQualities {
    return this.quality
  }

  public setQualityToMinValue(): void {
      this.quality.resetBaseValue(0)
  }

  public isExpired(daysToExpire = this.DEFAULT_DAYS_TO_EXPIRE): Boolean {
    return this.sellIn.isLessThan(daysToExpire)
  }

  public decreaseSellin(): void {
    this.sellIn.decrease()
  }
}
