import * as constants from '../../modules/constants'
import * as docUtil from '../../modules/documentUtility'
export function clearMenu(): void {
    docUtil.setValue(constants.titleInputID, '')
    docUtil.setValue(constants.contentInputID, '')
}