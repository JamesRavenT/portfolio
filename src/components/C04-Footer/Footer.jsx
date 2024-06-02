import React from "react";
import './layout/footer-320x.css'
import './layout/footer-375x.css'
import './layout/footer-425x.css'
import './layout/footer-768x.css'
import './layout/footer-1024x.css'
import './layout/footer-1280x.css'
import './layout/footer-1440x.css'

export default function Footer(pkg) {

    const isDark = pkg.color
    const bg = isDark ? 'linear-gradient(to bottom,  #131313, #101010, #080808)'  
                      : 'linear-gradient(to bottom,  #c3c3c3, #c3c3c3, #c3c3c3)'
        
    const color = isDark? '#f2f3f4' : '#232323'

    let style = {
        bg : {
            background: bg,
            borderTop: '1px solid' + color,
            transition: '1s'
        },

        color : {
            color: color,
            transition: '1s'
        }
    }
                
    return(
        <>
        <div className='footer' style={style.bg}>
            <p className='copyright' style={style.color}>Copyright &copy; 2024 James Raven Tabag </p>
        </div>
        </>
    )
}