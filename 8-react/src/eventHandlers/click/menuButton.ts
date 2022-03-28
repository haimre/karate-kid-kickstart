import * as constants from '../../modules/constants'
import * as docUtil from '../../modules/documentUtility'
import * as serverAPI from '../../modules/serverAPI'
import clearMenu from './clearMenu'
import Item from '../../../interfaces/Item'
export default function menuButton(editedID:string): void {
    // if (!editMode) {
    //     addItem()
    // } else {
    if (docUtil.getValue(constants.titleInputID) === '') {
        alert('cant set an empty title')
        return
    }
    const title: string = docUtil.getValue(constants.titleInputID)
    const content: string = docUtil.getValue(constants.contentInputID)
    // docUtil.setInnerText(`title${editedID}`, title)
    // docUtil.setInnerText(`content${editedID}`, content)
    // serverAPI.set(editedID, title, content).then((item: Item) => {
    //     clearMenu()
    //     editMode = false
    //     docUtil.setInnerText(constants.applyButtonID, 'Add')
    //     document.getElementById(constants.cancelButtonID)!.hidden = true
    //     editedID = '0'
    // }).catch((err: Error) => alert(`falied to set changes, ${err}`))
    // }
}