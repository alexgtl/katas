import { UpdatableItemQuality } from "@/items/valueObjects/UpdatableItemQuality"

export class ItemStandardQuality extends UpdatableItemQuality {
  private MAX_QUALITY_ALLOWED: number = 50
  private MIN_QUALITY_ALLOWED: number = 0

  constructor(itemQuality: number) {
    super(itemQuality)

    if (itemQuality < this.MIN_QUALITY_ALLOWED || itemQuality > this.MAX_QUALITY_ALLOWED) {
      throw new Error(`Item quality is out of range. Min value should be between ${this.MIN_QUALITY_ALLOWED} DOLARINES and ${this.MIN_QUALITY_ALLOWED}`)
    }

    this.resetBaseValue(itemQuality)
  }

  public decrease(): void {
    if (this.isLowerThanMinValue(this.MIN_QUALITY_ALLOWED)) {
      return
    }

    this.decreaseBaseValue()
  }

  public increase(): void {
    if (this.isBiggerThanMaxValue(this.MAX_QUALITY_ALLOWED)) {
      return
    }

    this.increaseBaseValue()
  }

  public setValue(): void {
    this.resetBaseValue(this.MIN_QUALITY_ALLOWED)
  }
}
