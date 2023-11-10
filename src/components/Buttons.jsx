import React from 'react'

const Buttons = ({  children, onselect, isSelected }) => {
    return (
        <div>
            <li className=''>
                <button className={isSelected ? 'active' : ''} onClick={onselect}>{children}</button></li>
        </div>
    )
}

export default Buttons