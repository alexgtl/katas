import { GildedRose } from '@/gilded-rose'
import { AgedBrieItem } from '@/items/agedBrie'
import { AVAILABLE_ITEMS } from '@/items/availableItems'
import { BackstagePassItem } from '@/items/backstagePassItem'
import itemFactory from '@/items/itemFactory'
import { StandardItem } from '@/items/standardItem'
import { SulfurasItem } from '@/items/sulfurasItem'
import { ItemQuality } from '@/items/valueObjects/itemQuality'
import { ItemSellIn } from '@/items/valueObjects/itemSellIn'

describe('Solid Gilded Rose', () => {
  it('should decrease quality and SellIn every day', () => {
    const item: StandardItem = itemFactory.getItem('test',2, 2) as StandardItem
    const expectedQuality = new ItemQuality(1)
    const expectedSellIn = new ItemSellIn(1)

    const gildedRose = new GildedRose([item])
    gildedRose.update()

    expect(item.getSellin()).toStrictEqual(expectedSellIn)
    expect(item.getQuality()).toStrictEqual(expectedQuality)
  })

  it('should decrease double quality if is expired', () => {
    const item: StandardItem = itemFactory.getItem('test',0, 2) as StandardItem
    const expectedSellIn = new ItemSellIn(-1)
    const expectedQuality = new ItemQuality(0)

    const gildedRose = new GildedRose([item])
    gildedRose.update()

    expect(item.getSellin()).toStrictEqual(expectedSellIn)
    expect(item.getQuality()).toStrictEqual(expectedQuality)
  })

  it('should never have quality below 0', () => {
    const item: StandardItem = itemFactory.getItem('test',0, 1) as StandardItem
    const expectedSellIn = new ItemSellIn(-1)
    const expectedQuality = new ItemQuality(0)

    const gildedRose = new GildedRose([item])
    gildedRose.update()

    expect(item.getSellin()).toStrictEqual(expectedSellIn)
    expect(item.getQuality()).toStrictEqual(expectedQuality)
  })

  it('should increase Aged brie item quality as long as sellIn decrease', () => {
    // arrange
    const agedBrieItem: AgedBrieItem = itemFactory.getItem(AVAILABLE_ITEMS.AgedBrie, 2, 2)
    const expectedSellIn = new ItemSellIn(1)
    const expectedQuality = new ItemQuality(3)

    const gildedRose = new GildedRose([agedBrieItem])
    gildedRose.update()

    expect(agedBrieItem.getSellin()).toStrictEqual(expectedSellIn)
    expect(agedBrieItem.getQuality()).toStrictEqual(expectedQuality)
  })

  it('should never have items with quality over 50', () => {
    const agedBrieItem: AgedBrieItem = itemFactory.getItem(AVAILABLE_ITEMS.AgedBrie, 2, 50)
    const expectedQuality = new ItemQuality(50)

    const gildedRose = new GildedRose([agedBrieItem])
    gildedRose.update()

    expect(agedBrieItem.getQuality()).toStrictEqual(expectedQuality)
  })

  it('should never degrade Sulfuras item', () => {
    const sulfurasItem: SulfurasItem = itemFactory.getItem(AVAILABLE_ITEMS.Sulfuras, 2, 2)
    const expectedSellIn = new ItemSellIn(1)
    const expectedQuality = new ItemQuality(2)

    const gildedRose = new GildedRose([sulfurasItem])
    gildedRose.update()

    expect(sulfurasItem.getSellin()).toStrictEqual(expectedSellIn)
    expect(sulfurasItem.getQuality()).toStrictEqual(expectedQuality)
  })

  it('should increment Backstage Pass Item quality as sellin value decrease', () => {
    const backstagePassITem: BackstagePassItem = itemFactory.getItem(AVAILABLE_ITEMS.BackstagePass, 12, 10) as BackstagePassItem
    const expectedSellIn = new ItemSellIn(11)
    const expectedQuality = new ItemQuality(11)

    const gildedRose = new GildedRose([backstagePassITem])
    gildedRose.update()

    expect(backstagePassITem.getSellin()).toStrictEqual(expectedSellIn)
    expect(backstagePassITem.getQuality()).toStrictEqual(expectedQuality)
  })

  it('should increment Backstage Pass Item quality double when less than 10 days', () => {
    const backstagePassITem: BackstagePassItem = itemFactory.getItem(AVAILABLE_ITEMS.BackstagePass, 10, 10) as BackstagePassItem
    const expectedSellIn = new ItemSellIn(9)
    const expectedQuality = new ItemQuality(12)

    const gildedRose = new GildedRose([backstagePassITem])
    gildedRose.update()

    expect(backstagePassITem.getSellin()).toStrictEqual(expectedSellIn)
    expect(backstagePassITem.getQuality()).toStrictEqual(expectedQuality)
  })

  it('should increment Backstage Pass Item quality triple when less than 10 days', () => {
    const backstagePassITem: BackstagePassItem = itemFactory.getItem(AVAILABLE_ITEMS.BackstagePass, 5, 10) as BackstagePassItem
    const expectedSellIn = new ItemSellIn(4)
    const expectedQuality = new ItemQuality(13)

    const gildedRose = new GildedRose([backstagePassITem])
    gildedRose.update()

    expect(backstagePassITem.getSellin()).toStrictEqual(expectedSellIn)
    expect(backstagePassITem.getQuality()).toStrictEqual(expectedQuality)
  })

  it('should set Backstage Pass Item quality to 0 when expired', () => {
    const backstagePassITem: BackstagePassItem = itemFactory.getItem(AVAILABLE_ITEMS.BackstagePass, 0, 999) as BackstagePassItem
    const expectedSellIn = new ItemSellIn(-1)
    const expectedQuality = new ItemQuality(0)

    const gildedRose = new GildedRose([backstagePassITem])
    gildedRose.update()

    expect(backstagePassITem.getSellin()).toStrictEqual(expectedSellIn)
    expect(backstagePassITem.getQuality()).toStrictEqual(expectedQuality)
  })
})