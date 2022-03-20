import React from "react";
import Item from '../../interfaces/Item'
import '../../styles/display/todoItemButtons.css'
const ItemButtons= (props:Partial<Item>) => {
    return (<div className='todoItemButtons'>
        <button className='itemEditButton' id={`title${props._id}`}>edit</button>
        <button className='itemDeleteButton' id={`content${props._id}`}>delete</button>
    </div>)
}
export default ItemButtons