import React, { useState, KeyboardEvent } from "react"
import Header from "./components/body/Header"
import Body from "./components/body/Body"
import Item from '../interfaces/Item'
import * as constants from './modules/constants'
import * as docUtil from './modules/documentUtility'
import escapeKeyPress from "./eventHandlers/keypress/escape"
import * as serverAPI from './modules/serverAPI'
export default function App() {
    const emptyItemList: Item[] = [{
        "_id": "1645000964206",
        "userID": "621750a80248c76d9cdf3435",
        "title": "Add items to the list",
        "content": "Try pressing Esc, type a title (content is optional)\n then press Enter or click 'Add' :)"
    }, {
        "_id": "1645000972449",
        "userID": "621750a80248c76d9cdf3435",
        "title": "Edit items",
        "content": "Press the green button to the right\n then edit the item and press enter or click 'Apply'"
    }, {
        "_id": "1645000981606",
        "userID": "621750a80248c76d9cdf3435",
        "title": "Delete items",
        "content": "Press the red button to the right\n or check the item/s and click 'Remove checked'"
    }]
    const emptyMenu = {
        _id: '',
        userID: '',
        title: '',
        content: ''
    }
    const [menuItem, setEditedItem] = useState(emptyMenu)
    const [itemList, setItemList] = useState(emptyItemList)
    const setMenuItem = (newItem: Partial<Item> | undefined): void =>
        !newItem ? setEditedItem(emptyMenu) :
            setEditedItem((oldItem) => { return { ...oldItem, ...newItem } })
    const getMenuItem = (): Item => menuItem
    const setItem = (item: Item): void => {
        setItemList((prevState: Item[]) => {
            const index = prevState.findIndex(prevItem => prevItem._id == item._id)
            index >= 0 ? prevState[index] = item : prevState = [item, ...prevState]
            return [...prevState]
        })
    }
    const removeItem = (_id: string): void => {
        setItemList((prevState: Item[]) => {
            return prevState.filter((itemFromList: Item) => itemFromList._id != _id)
        })
    }
    serverAPI.getAll()
        .then((items: Item[]) => setItemList(items))
        .catch(() => useState(emptyItemList))

    return <div className='App' onKeyUp={escapeKeyPress}>
        <div>
            <br></br>
            _id:'{menuItem._id}', title:'{menuItem.title}', content:'{menuItem.content}'
        </div>
        <Header />
        <Body
            itemList={itemList}
            setItem={setItem}
            removeItem={removeItem}
            setMenuItem={setMenuItem}
            getMenuItem={getMenuItem} />
    </div>
}