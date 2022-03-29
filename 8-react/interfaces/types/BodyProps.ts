import Item from '../Item'
export default interface BodyProps{
    itemList: Item[],
    removeItem: (_id: string) => void
    setItem: (item: Item) => void,
    setMenuItem: (item?: Partial<Item> | undefined) => void,
    getMenuItem: () => Item
}