import Item from '../Item'
export default interface MenuProps{
    setItem: (item: Item) => void,
    setMenuItem: (item?: Partial<Item> | undefined) => void,
    getMenuItem: () => Item
}