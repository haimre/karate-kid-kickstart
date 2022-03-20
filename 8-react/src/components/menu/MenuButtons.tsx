import React from "react";
import '../../styles/menu/menuButtons.css'
import '../../styles/buttons.css'
const MenuButtons = () => {
    return (<div className='menuButtons'>
        <button id='clear-button' className='clear-button btn'>Clear</button>
        <button id='apply-button' className='menu-button btn'>Add</button>
        <button id='cancel-button' className='menu-button btn' hidden>Cancel</button>
    </div>)
}
export default MenuButtons