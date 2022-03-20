import React from "react";
import Menu from "../menu/Menu";
import Display from "../display/Display"
import '../../styles/body/main-body.css'
const Body = () => {
    return (<div className='main-body'>
        <Menu />
        <Display />
    </div>)
}
export default Body