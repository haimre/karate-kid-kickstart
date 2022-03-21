import * as constants from '../../modules/constants'
import { KeyboardEvent } from "react"
export function enterKeyPress(event: KeyboardEvent):void {
    console.log('pressed',event.keyCode)
    if (event.keyCode === constants.enterKeycode) {
        document.getElementById(constants.applyButtonID)!.click()
        document.getElementById(constants.titleInputID)!.focus()
    }
}