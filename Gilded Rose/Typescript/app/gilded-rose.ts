import { Item } from "./items/item"

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
