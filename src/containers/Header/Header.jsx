import React from 'react'
import "./Header.scss"

const Header = (props) => {
    const {onReset} = props;
    
    return (
        <div className='header'>
            <h1 className='header__heading'>My Todos</h1>
            <button className="header__button" onClick={onReset}>Reset</button>
        </div>
    )
}

export default Header