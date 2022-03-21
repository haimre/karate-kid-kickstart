import React, { useState, KeyboardEvent } from "react"
import Header from "./components/body/Header"
import Body from "./components/body/Body"
import Item from '../interfaces/Item'
import * as constants from './modules/constants'
import * as docUtil from './modules/documentUtility'
import { enterKeyPress } from "./eventHandlers/keyup/enter"
import { escapekeyPress } from "./eventHandlers/keyup/escape"
import { clearMenu } from "./eventHandlers/click/clearMenu"
import { cancelEdit } from "./eventHandlers/click/cancelEdit"
import { addButton } from "./eventHandlers/click/addButton"
import { menuButton } from "./eventHandlers/click/menuButton"
import { deleteCheckedItems } from "./eventHandlers/click/deleteCheckedItems"
import * as serverAPI from './modules/serverAPI'
const App = () => {
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
    const [itemList, setItemList] = useState(emptyItemList)

    const setItem = (item: Item) => {
        setItemList((prevState: Item[]) => {
            const index = prevState.findIndex(prevItem => prevItem._id == item._id)
            index > 0 ? prevState[index]=item : prevState = [item,...prevState]
            return [...prevState]
        })
    }

    window.onload = function (): void {
        // document.body.addEventListener('keyup', enterKeyPress)
        // docUtil.addEvent(constants.menuID, 'keyup', escapekeyPress) 
        docUtil.addEvent(constants.applyButtonID, 'click', menuButton)
        docUtil.addEvent(constants.cancelButtonID, 'click', cancelEdit)
        docUtil.addEvent(constants.cleanButtonID, 'click', deleteCheckedItems)
        serverAPI.getAll()
            .then((items: Item[]) => setItemList(items))
            .catch(()=>useState(emptyItemList))
    }
    return <div className='App' onKeyPress={escapekeyPress}>
        <Header />
        <Body itemList={itemList} setItem={setItem} onKeyUp={enterKeyPress}/>
    </div>
}
export default App