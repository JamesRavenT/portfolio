import React from "react";
import { Work01 } from "./Fragments/01-WorkExp";
import { Work02 } from "./Fragments/02-WorkExp";
import { Work03 } from "./Fragments/03-WorkExp";

export function Experiences(pkg) {
    const style = pkg.theme
    const isDark = pkg.color
    const wazabiIcon = isDark? './assets/icons/2.png' : './assets/icons/2.png'
    
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
                    style={style.textLight}>Experiences</p>
                    <p className='content-header-title'
                    style={style.textDark}>Experiences</p>
                </div>           
            </div>
        </div>
        <div className='content-body'>
            <div className='content-body-container'
                 style={style.borderBottom}>
                <div className='content-body-slide'>
                    <div className='content-body-panel'>
                    <div className='content-body-divider-half'></div>
                        <Work01 theme={style} />
                        <div className='content-body-divider' style={style.block}></div>
                        <Work02 theme={style} />
                        <div className='content-body-divider' style={style.block}></div>
                        <Work03 theme={style} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}