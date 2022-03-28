import React from "react";
import MenuInput from "./MenuInput";
import MenuButtons from "./MenuButtons";
import enterKeyPress from "../../eventHandlers/keypress/enter";
import Item from "../../../interfaces/Item";
import '../../styles/menu/menu.css'
export default function Menu(props: {
    setItem: (item: Item) => void,
    setMenuItem: (item?: Partial<Item> | undefined) => void,
    getMenuItem: () => Item
}) {

    return (<div id='menu' className='menu'>
        <div className='menu-title'>
            Edit items and add new items
        </div>
        <MenuInput
            setMenuItem={props.setMenuItem}
            getMenuItem={props.getMenuItem} />
        <MenuButtons
            setItem={props.setItem}
            setMenuItem={props.setMenuItem}
            getMenuItem={props.getMenuItem} />
    </div>)
}