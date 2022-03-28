import React from "react";
import Item from '../../../interfaces/Item'
import '../../styles/display/todoItemButtons.css'
import * as ServerAPI from '../../modules/serverAPI'
export default function ItemButtons(props: {
    item: Partial<Item>,
    getMenuItem: () => Item,
    setMenuItem: (item: Partial<Item>) => void
    removeItem: (_id: string) => void
}) {
    function editButtonClick() {
        props.setMenuItem(props.item)
    }
    function deleteButton() {
        if (props.getMenuItem()._id) return alert(`can't delete items while in editing mode`)
        ServerAPI.remove(props.item._id!)
            .then((deletedItem: Item) => props.removeItem(deletedItem._id))
            .catch((err) => alert('could not delete item'))
    }
    return (<div className='todoItemButtons'>
        <button
            id={`itemEdit${props.item._id}`}
            className='itemEditButton'
            onClick={editButtonClick}>
            edit
        </button>
        <button
            id={`itemDelete${props.item._id}`}
            className='itemDeleteButton'
            onClick={deleteButton}>
            delete
        </button>
    </div>)
}