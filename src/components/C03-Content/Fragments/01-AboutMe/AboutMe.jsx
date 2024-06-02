import React from "react"
import { Introduction } from "./Fragments/01-Introduction"
import { Background } from "./Fragments/02-Background"


export function AboutMe(pkg) {
    const style = pkg.theme
    return(
        <>
        <div className='content-header'>
            <div className='content-header-text'
                 style={style.border}>
                <div className='content-header-ds'>
                    <p className='content-header-dot01'
                        style={style.dot}>•</p>
                    <p className='content-header-dot02'
                        style={style.dot}>•</p>
                    <p className='content-header-dot03'
                        style={style.dot}>•</p>
                </div>
                <div>
                    <p className='content-header-title'
                    style={style.textLight}>About Me</p>
                    <p className='content-header-title'
                    style={style.textDark}>About Me</p>
                </div>           
            </div>
        </div>
        <div className='content-body'>
            <div className='content-body-container'
                 style={style.borderBottom}>
                <div className='content-body-slide'>
                    <div className='content-body-panel'>
                        <div className='content-body-divider-half'></div>
                        <Introduction theme={style}/>
                        <div className='content-body-divider' style={style.block}></div>
                        <Background theme={style} />
                        <div className='content-body-divider-half'></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
