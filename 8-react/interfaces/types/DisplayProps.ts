import Item from '../Item'
export default interface DisplayProps{
    itemList: Item[],
    removeItem: (_id: string) => void
    setMenuItem: (item?: Partial<Item> | undefined) => void,
    getMenuItem: () => Item
}