import React from 'react'
import TODOItem from './TODOItem'
import Item from '../../../interfaces/Item'
import DisplayProps from '../../../interfaces/types/DisplayProps'
export default function ItemList(props: DisplayProps) {
    let checked = false
    return (<ul id='list' className='list'>
        {props.itemList.map((item: Item) => (
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