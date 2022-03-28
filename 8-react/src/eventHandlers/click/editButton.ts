import { MouseEvent } from 'react'
import * as constants from '../../modules/constants'
import * as docUtil from '../../modules/documentUtility'
export default function editButton(event: MouseEvent<HTMLButtonElement>): void {
    const target: HTMLElement = event.target as HTMLElement
    let editedID = target.id.replace('itemEdit', '').toString()
    // editMode = true

    document.getElementById(constants.cancelButtonID)!.hidden = false
    docUtil.setInnerText(constants.applyButtonID, 'Apply')
    const title: string = docUtil.getInnerText(`title${editedID}`)
    const content: string = docUtil.getInnerText(`content${editedID}`)
    docUtil.setValue(constants.titleInputID, title)
    docUtil.setValue(constants.contentInputID, content)
}