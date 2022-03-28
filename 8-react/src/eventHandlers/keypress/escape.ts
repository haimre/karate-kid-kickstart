import * as constants from '../../modules/constants'
import { KeyboardEvent } from "react"
import cancelEdit from '../click/cancelEdit'
export default function escapeKeyPress(event: KeyboardEvent): void {
    // console.log({ event })
    // if (event.keyCode === constants.escapeKeycode) {
    //     console.log('pressed escape')
    //     cancelEdit()
    //     document.getElementById(constants.titleInputID)!.focus()
    // }
}