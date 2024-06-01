import React from "react";

export function Projects(pkg) {
    const style = pkg.theme
    const isDark = pkg.color
    const wazabiIcon = isDark? './assets/icons/2.png' : './assets/icons/2.png'
    const mywebsiteIcon = isDark?  './assets/icons/dark/raven.png' : './assets/icons/raven.png'

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
                    style={style.textLight}>Projects</p>
                    <p className='content-header-title'
                    style={style.textDark}>Projects</p>
                </div>           
            </div>
        </div>
        <div className='content-body'>
            <div className='content-body-container'
                 style={style.borderBottom}>
                <div className='content-body-slide'>
                    <div className='content-body-panel'>
                    <div className='content-body-divider-half'></div>
                        <div className='projects-container'>
                            <div className='project-header'>
                                <div className='project-icon' style={style.container}>
                                    <img className='project-icon-img' src={mywebsiteIcon} alt='icon'></img>
                                </div>
                                <div className='project-header-vdivider' style={style.block}></div>
                                <div className='project-header-text'>
                                    <p className='project-name' style={style.color}>My Portfolio</p>
                                    <p className='project-typeNstatus' style={style.color}>Website | 2024 - Ongoing</p>  
                                    <a href='https://github.com/JamesRavenT/Website-MyPortfolio' target='_blank' rel='noopener noreferrer' style={style.linkcolor}><p className='project-link'>Link to Github</p></a>
                                </div>
                                
                            </div>
                            <div className='project-header-hdivider' style={style.block}></div>
                            <div className='project-divider'></div>
                            <p className='project-category' style={style.color}>Description</p>
                            <p className='project-description' style={style.color}>
                                Test
                                </p>
                            <p className='project-category' style={style.color}>Features</p>
                            <ul className='project-features-list'>
                                <li className='project-features-item'>
                                    <div className='project-features-item-container'>
                                    <div className='project-features-item-bullet' style={style.block}></div>
                                    <p className='project-features-item-text' style={style.color}>Test</p>
                                    </div>
                                </li>
                                <li className='project-features-item'>
                                    <div className='project-features-item-container'>
                                    <div className='project-features-item-bullet' style={style.block}></div>
                                    <p className='project-features-item-text' style={style.color}>Test</p>
                                    </div>
                                </li>
                                <li className='project-features-item'>
                                    <div className='project-features-item-container'>
                                    <div className='project-features-item-bullet' style={style.block}></div>
                                    <p className='project-features-item-text' style={style.color}>Test</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='content-body-divider' style={style.block}></div>
                        <div className='projects-container'>
                            <div className='project-header'>
                                <div className='project-icon' style={style.container}>
                                    <img className='project-icon-img-2' src={wazabiIcon} alt='icon'></img>
                                </div>
                                <div className='project-header-vdivider' style={style.block}></div>
                                <div className='project-header-text'>
                                    <p className='project-name' style={style.color} >WaZabiPOS</p>
                                    <p className='project-typeNstatus' style={style.color}>Android | 2022 - 2023</p>  
                                    <a href='https://github.com/JamesRavenT/WaZabiPOS' target='_blank' rel='noopener noreferrer' style={style.linkcolor}><p className='project-link'>Link to Github</p></a>
                                </div>
                                
                            </div>
                            <div className='project-header-hdivider' style={style.block}></div>
                            <div className='project-divider'></div>
                            <p className='project-category' style={style.color}>Description</p>
                            <p className='project-description' style={style.color}>
                                Test
                                </p>
                            <p className='project-category' style={style.color}>Features</p>
                            <ul className='project-features-list'>
                                <li className='project-features-item'>
                                    <div className='project-features-item-container'>
                                    <div className='project-features-item-bullet' style={style.block}></div>
                                    <p className='project-features-item-text' style={style.color}>Test</p>
                                    </div>
                                </li>
                                <li className='project-features-item'>
                                    <div className='project-features-item-container'>
                                    <div className='project-features-item-bullet' style={style.block}></div>
                                    <p className='project-features-item-text' style={style.color}>Test</p>
                                    </div>
                                </li>
                                <li className='project-features-item'>
                                    <div className='project-features-item-container'>
                                    <div className='project-features-item-bullet' style={style.block}></div>
                                    <p className='project-features-item-text' style={style.color}>Test</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}