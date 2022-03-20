import React from "react";
import TODOList from "./TODOList";
import Item from "../../interfaces/Item";
import '../../styles/display/display.css';
import '../../styles/buttons.css'
const Display = () =>{
    const itemList:Partial<Item>[] = []
    return (<div className='display'>
        <TODOList/>
        <button id='add-button' className='btn'>Add a new todo item</button>
        <button id='clean-button' className='btn'>Removed checked</button>
        </div>)
}
export default Display