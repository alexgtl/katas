import { ItemBaseQuality } from "./itemBaseQuality"

export class ItemSulfurasQuality extends ItemBaseQuality {
  private static QUALITY_VALUE: number = 30

  constructor() {
    super(ItemSulfurasQuality.QUALITY_VALUE)

    this.resetBaseValue(ItemSulfurasQuality.QUALITY_VALUE)
  }
}
