import React from 'react'
import '../../styles/menu/menuButtons.css'
import '../../styles/buttons.css'
import Item from '../../../interfaces/Item'
import * as ServerAPI from '../../modules/serverAPI'
import { v4 as uuid } from 'uuid'
export default function MenuButtons(props: {
    setItem: (item: Item) => void,
    setMenuItem: (item?: Partial<Item> | undefined) => void,
    getMenuItem: () => Item
}) {
    function applyButtonClick(): void {
        let { _id, title, content } = props.getMenuItem()
        if (!title) return alert(`can't set an empty title`)
        if (!_id) _id = uuid()
        ServerAPI.set(_id, title, content)
            .then((item: Item) => {
                props.setItem(item)
                props.setMenuItem()
            }).catch((err) => console.log(err))
    }
    function clearButtonClick() {
        props.setMenuItem({ title: '', content: '' })
    }
    function cancelButtonClick() {
        props.setMenuItem({ _id: '', title: '', content: '' })
    }
    return (<div className='menuButtons'>
        <button
            id='clear-button'
            className='clear-button btn'
            onClick={clearButtonClick}>Clear</button>
        <button
            id='apply-button'
            className='menu-button btn'
            onClick={applyButtonClick}>{!props.getMenuItem()._id ? 'Add' : 'Apply'}</button>
        <button
            id='cancel-button'
            className='menu-button btn'
            onClick={cancelButtonClick}
            hidden={!props.getMenuItem()._id}>Cancel</button>
    </div>)
}