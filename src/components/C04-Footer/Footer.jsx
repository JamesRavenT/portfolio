import React from "react";
import './layout/footer.css'

export default function Footer(pkg) {

    const isDark = pkg.color
    const bg = isDark ? 'linear-gradient(to bottom,  #131313, #101010, #080808)'  
                      : 'linear-gradient(to bottom,  #c3c3c3, #a3a3a3, #737373)'
    const border = isDark? '#f2f3f4' : '#232323'

    let style = {
        bg : {
            background: bg,
            borderTop: '1px solid' + border,
            transition: '1s'
        }
    }
                
    return(
        <>
        <div className='footer' style={style.bg}></div>
        </>
    )
}