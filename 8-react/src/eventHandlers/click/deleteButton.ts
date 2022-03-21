import { MouseEvent } from 'react'
import * as constants from '../../modules/constants'
import * as serverAPI from '../../modules/serverAPI'
export const deleteButton= async (event: MouseEvent<HTMLButtonElement>): Promise<void> => {
    // if (editMode) {
    //     alert('cant delete while in edit mode')
    //     return
    // }
    const itemID: string = (event.target as HTMLElement).id.replace('itemDelete', '').toString()
    const itemElement: HTMLElement = document.getElementById(itemID) as HTMLElement
    const listElement: HTMLElement = document.getElementById(constants.todoListID) as HTMLElement

    serverAPI.remove(itemID)
        .then(() => listElement!.removeChild(itemElement))
        .catch((error) => alert(`item deletion is denied, ${error}`))
}