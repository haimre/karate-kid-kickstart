import React from "react";
import Item from '../../../interfaces/Item'
import '../../styles/display/todoItemText.css'
export default function ItemText(props: Partial<Item>) {
    return (<div className='todoItemText'>
        <div id={`title${props._id}`} className='todoItemTitle' >{props.title}</div>
        <div id={`content${props._id}`} className='todoItemContent'>{props.content}</div>
    </div>)
}