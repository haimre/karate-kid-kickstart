import React from 'react'
import MenuInput from './MenuInput'
import MenuButtons from './MenuButtons'
import MenuProps from '../../../interfaces/types/MenuProps'
import '../../styles/menu/menu.css'

export default function Menu(props: MenuProps) {

    return (<div id='menu' className='menu'>
        <div className='menu-title'>
            Edit items and add new items
        </div>
        <MenuInput
            setMenuItem={props.setMenuItem}
            getMenuItem={props.getMenuItem} />
        <MenuButtons
            setItem={props.setItem}
            setMenuItem={props.setMenuItem}
            getMenuItem={props.getMenuItem} />
    </div>)
}