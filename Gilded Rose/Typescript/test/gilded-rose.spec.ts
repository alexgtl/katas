import { Item, GildedRose } from '@/gilded-rose';

const itemList: Array<Item> = [
  new Item("+5 Dexterity Vest", 10, 20), //
  new Item("Aged Brie", 2, 0), //
  new Item("Elixir of the Mongoose", 5, 7), //
  new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  // this conjured item does not work properly yet
  new Item("Conjured Mana Cake", 3, 6)
];

describe('Gilded Rose', () => {
/*   it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('fixme');
  }); */

  it('should decrease quality every day', () => {
    // arrange
    const singleItem: Item = new Item('name', 3, 2);
    const gildedRose = new GildedRose([singleItem]);

    // act
    gildedRose.updateQuality();

    // assert
    const firstItem = gildedRose.items[0];
    expect(firstItem.quality).toBe(1);
  });

  it('should decrease double quality if expired', () => {
    // arrange
    const singleItem: Item = new Item('name', -1, 2);
    const gildedRose = new GildedRose([singleItem]);

    // act
    gildedRose.updateQuality();

    // assert
    const firstItem = gildedRose.items[0];
    expect(firstItem.quality).toBe(0);
  });

  it('should never have negative quality', () => {
    // arrange
    const singleItem: Item = new Item('name', 0, 0);
    const gildedRose = new GildedRose([singleItem]);

    // act
    gildedRose.updateQuality();

    // assert
    const firstItem = gildedRose.items[0];
    expect(firstItem.quality).toBe(0);
  });

  it('should increment price if it is Aged Brie', () => {
    // arrange
    const singleItem: Item = new Item('Aged Brie', 1, 1);
    const gildedRose = new GildedRose([singleItem]);

    // act
    gildedRose.updateQuality();

    // assert
    const firstItem = gildedRose.items[0];
    expect(firstItem.quality).toBe(2);
  });

  it('should increment double price if it is Aged Brie and expired', () => {
    // arrange
    const singleItem: Item = new Item('Aged Brie', 0, 1);
    const gildedRose = new GildedRose([singleItem]);

    // act
    gildedRose.updateQuality();

    // assert
    const firstItem = gildedRose.items[0];
    expect(firstItem.quality).toBe(3);
  });

  it('should never have quality over 50', () => {
    // arrange
    const singleItem: Item = new Item('Aged Brie', 0, 49);
    const gildedRose = new GildedRose([singleItem]);

    // act
    gildedRose.updateQuality();

    // assert
    const firstItem = gildedRose.items[0];
    expect(firstItem.quality).toBe(50);
  });

  it('should never degrade Sulfuras item', () => {
    // arrange
    const singleItem: Item = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
    const gildedRose = new GildedRose([singleItem]);

    // act
    gildedRose.updateQuality();

    // assert
    const firstItem = gildedRose.items[0];
    expect(firstItem.sellIn).toBe(0);
    expect(firstItem.quality).toBe(80);
  });

  it('should increment Backstage pass quality with less than 10 days left', () => {
    // arrange
    const singleItem: Item = new Item("Backstage passes to a TAFKAL80ETC concert", 9, 20);
    const gildedRose = new GildedRose([singleItem]);

    // act
    gildedRose.updateQuality();

    // assert
    const firstItem = gildedRose.items[0];
    expect(firstItem.quality).toBe(22);
  });

  it('should increment Backstage pass quality with less than 5 days left', () => {
    // arrange
    const singleItem: Item = new Item("Backstage passes to a TAFKAL80ETC concert", 4, 20);
    const gildedRose = new GildedRose([singleItem]);

    // act
    gildedRose.updateQuality();

    // assert
    const firstItem = gildedRose.items[0];
    expect(firstItem.quality).toBe(23);
  });

  it('should decrease to 0 the quality of Backstage pass when date is expired', () => {
    // arrange
    const singleItem: Item = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20);
    const gildedRose = new GildedRose([singleItem]);

    // act
    gildedRose.updateQuality();

    // assert
    const firstItem = gildedRose.items[0];
    expect(firstItem.quality).toBe(0);
  });
});
