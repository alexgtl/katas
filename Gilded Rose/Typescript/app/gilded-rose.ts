import { Item } from "./items/item"
import { StandardItem } from "./items/standardItem"

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items
  }

  public update(): void {
    this.items.forEach((item: Item) => {
      item.update()
    });
  }
}
