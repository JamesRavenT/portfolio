import React from "react";

export function DownloadBtn(pkg) {
    const isDark = pkg.theme
    const style = pkg.layout
    const viewIcon = isDark? 'assets/icons/dark/download.png' : 'assets/icons/download.png'
    return(
        <>
        <a href='https://docs.google.com/document/d/1dzSsqBpjQZ5WDe_AOqP2Ozee79v5ErxAYpsefPGlhRA/edit?tab=t.0' style={{textDecoration: 'none'}}>
            <div className='container-btn'
                style={style.bg}>
                <p className='text-btn'
                    style={style.altcolor}> 
                    V I E W &nbsp; R E S U M E </p>
                <img className='icon-btn'
                        src={viewIcon} 
                        alt="icon"/>
            </div>
        </a>
        </>
    )
}