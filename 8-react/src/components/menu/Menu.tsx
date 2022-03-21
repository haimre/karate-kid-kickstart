import React from "react";
import MenuInput from "./MenuInput";
import MenuButtons from "./MenuButtons";
import { KeyboardEvent } from "react"
import '../../styles/menu/menu.css'
const Menu = (props:{onKeyUp:(event: KeyboardEvent)=> void}) => {
    return (<div id='menu' className='menu' onKeyUp={props.onKeyUp}>
        <div className='menu-title'>
            Edit items and add new items
        </div>
        <MenuInput />
        <MenuButtons />
    </div>)
}
export default Menu