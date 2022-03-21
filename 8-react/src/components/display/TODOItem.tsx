import React from "react";
import Item from '../../../interfaces/Item'
import ItemText from "./TODOItemText";
import ItemButtons from "./TODOItemButtons";
import '../../styles/display/todoItem.css'
import '../../styles/inputs.css'
const TODOItem = (props: Partial<Item>) => {
    return (<ol id={props._id} className='todoItem'>
        <input className='inp' id={`itemCheckbox${props._id}`} type='checkbox' />
        <ItemText _id={props._id} title={props.title} content={props.content} />
        <ItemButtons _id={props._id} />
    </ol>)
}
export default TODOItem