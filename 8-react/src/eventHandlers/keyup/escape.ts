import * as constants from '../../modules/constants'
import { KeyboardEvent } from "react"
export function escapekeyPress(event: KeyboardEvent): void {
    console.log('pressed',event.keyCode)
    if (event.keyCode === constants.escapeKeycode) {
        document.getElementById(constants.cancelButtonID)!.click()
        document.getElementById(constants.titleInputID)!.focus()
    }
}