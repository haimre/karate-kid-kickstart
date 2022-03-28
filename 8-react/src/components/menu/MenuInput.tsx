import React, { KeyboardEvent, ChangeEvent } from "react";
import Item from "../../../interfaces/Item";
export default function MenuInput(props: {
    getMenuItem: () => Item,
    setMenuItem: (item: Partial<Item>) => void
}) {
    function onTitleKeyPress(event: ChangeEvent): void {
        props.setMenuItem({ title: (event.target as HTMLInputElement).value })
    }
    function onContentKeyPress(event: ChangeEvent): void {
        props.setMenuItem({ content: (event.target as HTMLInputElement).value })
    }
    return (<div className='menuForm'>
        <br />
        <div className='menuInput'>
            <span>Title: </span>
            <input
                id='title-input'
                className='title-input'
                type='text'
                placeholder='Enter title...'
                value={props.getMenuItem().title}
                onChange={onTitleKeyPress} />
        </div>
        <div className='menuInput'>
            <span>Content: </span>
            <input
                id='content-input'
                className='content-input'
                type='textarea'
                placeholder='Enter item description...'
                value={props.getMenuItem().content}
                onChange={onContentKeyPress} />
        </div>
    </div>)
}