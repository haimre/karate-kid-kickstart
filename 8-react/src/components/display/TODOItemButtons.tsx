import React from "react";
import Item from '../../../interfaces/Item'
import '../../styles/display/todoItemButtons.css'
import { deleteButton } from "../../eventHandlers/click/deleteButton";
import { editButton } from "../../eventHandlers/click/editButton";
const ItemButtons = (props: Partial<Item>) => {
    return (<div className='todoItemButtons'>
        <button id={`itemEdit${props._id}`} className='itemEditButton' onClick={editButton}>edit</button>
        <button id={`itemDelete${props._id}`} className='itemDeleteButton' onClick={deleteButton}>delete</button>
    </div>)
}
export default ItemButtons