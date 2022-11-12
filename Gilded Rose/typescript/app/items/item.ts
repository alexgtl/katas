import { ItemName } from "./valueObjects/ItemName"
import { ItemQuality } from "./valueObjects/itemQuality"
import { ItemSellIn } from "./valueObjects/itemSellIn"

export abstract class Item {
  private name: ItemName
  private sellIn: ItemSellIn
  private quality: ItemQuality

  private readonly DEFAULT_DAYS_TO_EXPIRE = 0

  constructor (name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  public abstract update()

  public getSellin(): ItemSellIn {
    return this.sellIn
  }

  public getQuality(): ItemQuality {
    return this.quality
  }

  public isExpired(daysToExpire = this.DEFAULT_DAYS_TO_EXPIRE): Boolean {
    return this.sellIn.isLessThan(daysToExpire);
  }

  public increaseSellin(): void {
    this.sellIn.increase()
  }

  public decreaseSellin(): void {
    this.sellIn.decrease()
  }

  public increaseQuality(): void {
    this.quality.increase()
  }

  public decreaseQuality(): void {
    this.quality.decrease()
  }

  public setQualityToMinValue(): void {
    this.quality.setToMinValue()
  }
}