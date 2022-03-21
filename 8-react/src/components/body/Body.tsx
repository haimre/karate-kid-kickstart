import React from "react";
import Menu from "../menu/Menu";
import Display from "../display/Display"
import Item from "../../../interfaces/Item";
import { KeyboardEvent } from "react"
import '../../styles/body/main-body.css'

const Body = (props: { itemList: Item[], setItem: (item: Item) => void, onKeyUp:(event: KeyboardEvent)=> void }) => {
    return (<div className='main-body'>
        <Menu onKeyUp={props.onKeyUp}/>
        <Display itemList={props.itemList} />
    </div>)
}
export default Body