import React from 'react';
import 'layout/navbar-320x.css'
import 'layout/navbar-375x.css'
import 'layout/navbar-425x.css'
import 'layout/navbar-768x.css'
import 'layout/navbar-1025x.css'
import 'layout/navbar-1280x.css'

export default function Navbar(theme){

    const isDark = theme.color
    const icon = isDark? '/assets/icons/dark/raven.png' : '/assets/icons/raven.png';
    const color = isDark? '#f2f3f4' : '#232323'

    let style = {
        textColor : {
            color: color,
            transition: '1s'
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

