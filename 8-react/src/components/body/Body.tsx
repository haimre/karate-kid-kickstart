import React from 'react'
import Menu from '../menu/Menu'
import Display from '../display/Display'
import BodyProps from '../../../interfaces/types/BodyProps'
import '../../styles/body/main-body.css'

export default function Body(props: BodyProps) {
    return (<div className='main-body'>
        <Menu
            setItem={props.setItem}
            setMenuItem={props.setMenuItem}
            getMenuItem={props.getMenuItem} />
        <Display
            itemList={props.itemList}
            removeItem={props.removeItem}
            setMenuItem={props.setMenuItem}
            getMenuItem={props.getMenuItem} />
    </div>)
}