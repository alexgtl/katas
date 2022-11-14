import ItemQualityInterface from "../interfaces/itemStandardQuality"

export abstract class ItemBaseQuality implements ItemQualityInterface {
  private value: number

  protected constructor(itemQuality: number) {
    this.value = itemQuality
  }

  public decreaseBaseValue(): void {
    this.value--
  }

  public increaseBaseValue(): void {
    this.value++
  }

  public resetBaseValue(value: number): void {
    this.value = value
  }

  public isLowerThanMinValue(minValue: number): Boolean {
    return this.value <= minValue
  }

  public isBiggerThanMaxValue(maxValue: number): Boolean {
    return this.value >= maxValue
  }
}
