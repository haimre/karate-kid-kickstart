import React from "react";
import Item from '../../../interfaces/Item'
import ItemText from "./TODOItemText";
import ItemButtons from "./TODOItemButtons";
import '../../styles/display/todoItem.css'
import '../../styles/inputs.css'
export default function TODOItem(props: {
    checked: boolean,
    item: Partial<Item>,
    setMenuItem: (item: Partial<Item>) => void,
    getMenuItem: () => Item,
    removeItem: (_id: string) => void
}) {
    return (<ol id={props.item._id} className='todoItem'>
        <input className='inp' id={`itemCheckbox${props.item._id}`} type='checkbox' checked={props.checked}/>
        <ItemText _id={props.item._id} title={props.item.title} content={props.item.content} />
        <ItemButtons item={props.item} setMenuItem={props.setMenuItem} getMenuItem={props.getMenuItem} removeItem={props.removeItem}/>
    </ol>)
}