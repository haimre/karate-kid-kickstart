import * as constants from '../../modules/constants'
import * as docUtil from '../../modules/documentUtility'
import { clearMenu } from './clearMenu'
export function cancelEdit(): void {
    clearMenu()
    // editMode = false
    docUtil.setInnerText(constants.applyButtonID, 'Add')
    document.getElementById(constants.cancelButtonID)!.hidden = true
    // editedID = '0'
}