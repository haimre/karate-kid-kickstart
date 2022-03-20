import React from "react";
import MenuInput from "./MenuInput";
import MenuButtons from "./MenuButtons";
import '../../styles/menu/menu.css'
const Menu = () => {
    return (<div id='menu' className='menu'>
        <div className='menu-title'>
            Edit items and add new items
        </div>
        <MenuInput />
        <MenuButtons />
    </div>)
}
export default Menu