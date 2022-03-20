import React from "react";
const MenuInput = () => {
    return (<div className='menuForm'>
        <br />
        <div className='menuInput'>
            <span>Title: </span>
            <input id='title-input' className='title-input' type='text' placeholder='Enter title...' />
        </div>
        <div className='menuInput'>
            <span>Content: </span>
            <input id='content-input' className='content-input' type='textarea' placeholder='Enter item description...' />
        </div>
    </div>)
}
export default MenuInput