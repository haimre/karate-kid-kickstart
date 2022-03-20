import React from "react";
import Item from '../../interfaces/Item'
import '../../styles/display/todoItemText.css'
const ItemText = (props:Partial<Item>) => {
    return (<div className='todoItemText'>
        <div className='todoItemTitle' id={`title${props._id}`}>{props.title}</div>
        <div className='todoItemContent' id={`content${props._id}`}>{props.content}</div>
    </div>)
}
export default ItemText