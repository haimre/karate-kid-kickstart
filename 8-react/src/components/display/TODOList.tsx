import React from "react";
import TODOItem from "./TODOItem";
import Item from '../../../interfaces/Item'
const ItemList = (props: { items: Item[] }) => {
    return (<ul id='list' className='list'>
        {props.items.map((item: Item) => (
            <TODOItem
                key={item._id}
                _id={item._id}
                userID={item.userID}
                title={item.title}
                content={item.content} />
        ))}
    </ul>)
}
export default ItemList