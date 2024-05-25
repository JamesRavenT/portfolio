import React from 'react';
import './layout/navbar-320x.css'
import './layout/navbar-480x.css'
import './layout/navbar-760x.css'
import './layout/navbar-1025x.css'
import './layout/navbar-1280x.css'

export default function Navbar(pkg){

    const isDark = pkg.theme
    const icon = isDark? '/assets/icons/dark/raven.png' : '/assets/icons/raven.png';
    const color = isDark? '#f2f3f4' : '#232323'

    let style = {
        textColor : {
            color: color
        }
    }
    return (
        <>
            <img className='nav-web-icon'
                 src={icon} 
                 alt="icon"/>
            <p  className='nav-web-name'
                style={style.textColor}>James Raven Tabag</p>
        </>
    
    )
}

