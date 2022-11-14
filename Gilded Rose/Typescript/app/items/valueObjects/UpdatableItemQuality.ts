import { ItemBaseQuality } from "./itemBaseQuality"
import UpdatableItemQualityInterface from "@/items/interfaces/itemStandardQuality"

export abstract class UpdatableItemQuality extends ItemBaseQuality implements UpdatableItemQualityInterface {

 protected constructor(itemQuality: number) {
    super(itemQuality)
  }

  public abstract increase()
  public abstract decrease()
  public abstract setValue()
}
