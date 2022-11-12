import ItemQualityInterface from "../interfaces/itemQuality"

export class ItemQuality implements ItemQualityInterface {
  private itemQuality: number
  private MAX_QUALITY_ALLOWED: number = 50
  private MIN_QUALITY_ALLOWED: number = 0

  constructor(itemQuality: number) {
    this.itemQuality = itemQuality
  }

  public decrease(): void {
    if (this.itemQuality <= this.MIN_QUALITY_ALLOWED ) {
      return
    }

    this.itemQuality--
  }

  public increase(): void {
    if (this.itemQuality >= this.MAX_QUALITY_ALLOWED) {
      return
    }

    this.itemQuality ++
  }

  public setToMinValue(): void {
    this.itemQuality = this.MIN_QUALITY_ALLOWED
  }
}