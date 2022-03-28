import * as constants from '../../modules/constants'
import clearMenu from './clearMenu'
export default function addButton(): void {
    clearMenu()
    document.getElementById(constants.titleInputID)!.focus()
}