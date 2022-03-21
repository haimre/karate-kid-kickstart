import React from "react";
import '../../styles/menu/menuButtons.css'
import '../../styles/buttons.css'
import { clearMenu } from "../../eventHandlers/click/clearMenu";
import { cancelEdit } from "../../eventHandlers/click/cancelEdit";
import { addButton } from "../../eventHandlers/click/addButton";
const MenuButtons = () => {
    return (<div className='menuButtons'>
        <button id='clear-button' className='clear-button btn' onClick={clearMenu}>Clear</button>
        <button id='apply-button' className='menu-button btn' onClick={addButton}>Add</button>
        <button id='cancel-button' className='menu-button btn' onClick={cancelEdit} hidden>Cancel</button>
    </div>)
}
export default MenuButtons