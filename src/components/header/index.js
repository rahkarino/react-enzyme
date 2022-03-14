import React from 'react'
import './styles.scss'
import Logo from '../../assets/logo.png'

const Header = (props) => {
    return (
        <header data-test="header-component">
            <div className="container">
                <div>
                    <img src={Logo} alt='logo' className="logo" data-test="logo" />
                </div>
            </div>
        </header>
    )
}

export default Header
