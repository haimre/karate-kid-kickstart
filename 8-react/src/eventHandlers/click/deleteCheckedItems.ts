import * as constants from '../../modules/constants'
import * as serverAPI from '../../modules/serverAPI'
import Item from '../../../interfaces/Item'
export function deleteCheckedItems(): void {
    // if (editMode) {
    //     alert('cant delete while in edit mode')
    //     return
    // }
    const list: HTMLElement = document.getElementById(constants.todoListID) as HTMLElement
    serverAPI.getAll().then((itemList: Item[]) => {
        itemList.forEach((item: Item) => {
            const checkbox: HTMLInputElement = document.getElementById(`itemCheckbox${item._id}`) as HTMLInputElement
            if (checkbox.checked) {
                serverAPI.remove(item._id).then((deletedItem:Item)=>{
                    const itemElement: HTMLElement = document.getElementById(`${item._id}`) as HTMLElement
                    list.removeChild(itemElement)
                }).catch((err:Error)=>alert(`could not remove item ${item._id}, ${err}`))
            }
        })
    }).catch((err:Error)=>alert(`could not remove all checked items, ${err}`))
}