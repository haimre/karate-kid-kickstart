import React from "react";
import TODOItem from "./TODOItem";
import Item from '../../interfaces/Item'
const ItemList = (props:Partial<Item>) => {
    return (<ul className='list'>
            <TODOItem _id='1' userID='1' title='title' content='content' />
    </ul>)
}
export default ItemList