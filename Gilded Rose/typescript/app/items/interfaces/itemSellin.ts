export default interface ItemSellInInterface {
  increase: () => void,
  decrease: () => void,
  isExpired: () => Boolean
}
