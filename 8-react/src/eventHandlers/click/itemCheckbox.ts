export const itemCheckboxClick = (event: Event): void => {
    const target:HTMLInputElement =  event.target as HTMLInputElement
    const itemID: string = target.id.replace('itemCheckbox', '').toString()
    const titleElement: HTMLElement = document.getElementById(`title${itemID}`) as HTMLElement
    const contentElement: HTMLElement = document.getElementById(`content${itemID}`) as HTMLElement
    const editButtonElement: HTMLElement = document.getElementById(`itemEdit${itemID}`) as HTMLElement
    const action = !target.checked ? 'remove' : 'add'
    titleElement.classList[action]('strike')
    contentElement.classList[action]('invisible')
    editButtonElement.classList[action]('invisible')
}