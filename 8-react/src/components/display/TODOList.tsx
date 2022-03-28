import React from "react";
import TODOItem from "./TODOItem";
import Item from '../../../interfaces/Item'
export default function ItemList(props: {
    items: Item[],
    setMenuItem: (item: Partial<Item>) => void,
    getMenuItem: () => Item,
    removeItem: (_id: string) => void
}) {
    let checked = false
    return (<ul id='list' className='list'>
        {props.items.map((item: Item) => (
            <TODOItem
                key={item._id}
                item={item}
                checked={checked}
                removeItem={props.removeItem}
                setMenuItem={props.setMenuItem}
                getMenuItem={props.getMenuItem} />
        ))}
    </ul>)
}