export default interface ItemQualityInterface {
  decreaseBaseValue: () => void,
  increaseBaseValue: () => void,
  resetBaseValue: (value: number) => void,
  isLowerThanMinValue: (minValue: number) => Boolean,
  isBiggerThanMaxValue: (maxValue: number) => Boolean
}

export interface UpdatableItemQualityInterface {
  increase: () => void,
  decrease: () => void,
  setValue: () => void,
}
