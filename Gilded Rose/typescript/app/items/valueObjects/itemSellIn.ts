import ItemSellInInterface from "../interfaces/itemSellin"

export class ItemSellIn implements ItemSellInInterface {
  private value: number

  constructor(value: number) {
    this.value = value;
  }

  public decrease(): void {
    this.value--
  }

  public increase(): void {
    this.value++
  }

  public isExpired(): Boolean {
    return this.value < 0
  }

  public isLessThan(days: number): Boolean {
    return this.value <= days;
  }
}
