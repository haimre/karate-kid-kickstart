import React from 'react'
import TODOList from './TODOList'
import Item from '../../../interfaces/Item'
import DisplayProps from '../../../interfaces/types/DisplayProps'
import '../../styles/display/display.css'
import '../../styles/buttons.css'

export default function Display(props: DisplayProps) {
    function addButtonClick(): void {
        if (props.getMenuItem()._id) return alert(`can't add new item while in editing mode`)
        props.setMenuItem({ _id: '', title: '', content: '' })
    }
    function cleanButtonClick(): void {
        if (props.getMenuItem()._id) return alert(`can't delete items while editing in editing mode`)
        props.itemList.forEach((item: Item) => { })
    }
    return (<div className='display'>
        <TODOList
            itemList={props.itemList}
            removeItem={props.removeItem}
            getMenuItem={props.getMenuItem}
            setMenuItem={props.setMenuItem} />
        <button id='add-button' className='btn' onClick={addButtonClick}>Add a new todo item</button>
        {/* <button id='clean-button' className='btn' onClick={cleanButtonClick}>Removed checked</button> */}
    </div>)
}