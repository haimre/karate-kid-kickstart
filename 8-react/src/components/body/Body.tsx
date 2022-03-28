import React from "react";
import Menu from "../menu/Menu";
import Display from "../display/Display"
import Item from "../../../interfaces/Item";
import '../../styles/body/main-body.css'

export default function Body(props: {
    itemList: Item[],
    removeItem: (_id: string) => void
    setItem: (item: Item) => void,
    setMenuItem: (item?: Partial<Item> | undefined) => void,
    getMenuItem: () => Item
}) {
    return (<div className='main-body'>
        <Menu
            setItem={props.setItem}
            setMenuItem={props.setMenuItem}
            getMenuItem={props.getMenuItem} />
        <Display
            itemList={props.itemList}
            removeItem={props.removeItem}
            setMenuItem={props.setMenuItem}
            getMenuItem={props.getMenuItem} />
    </div>)
}