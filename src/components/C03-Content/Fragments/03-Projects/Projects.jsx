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
                                This Website. Developed in HTML5, CSS3 and ReactJS. Planned features includes a chatbot, and a PC client for easier data management of Skills, Projects and Experiences.
                                </p>
                            <p className='project-category' style={style.color}>Features</p>
                            <ul className='project-features-list'>
                                <li className='project-features-item'>
                                    <div className='project-features-item-container'>
                                    <div>
                                        <div className='project-features-item-bullet' style={style.block}></div>
                                    </div>  
                                    <p className='project-features-item-text' style={style.color}>Information about me, displayed with a user-friendly UI.</p>
                                    </div>
                                </li>
                                <li className='project-features-item'>
                                    <div className='project-features-item-container'>
                                    <div>
                                        <div className='project-features-item-bullet' style={style.block}></div>
                                    </div>  
                                    <p className='project-features-item-text' style={style.color}>Night/Day mode switch.</p>
                                    </div>
                                </li>
                                <li className='project-features-item'>
                                    <div className='project-features-item-container'>
                                    <div>
                                        <div className='project-features-item-bullet' style={style.block}></div>
                                    </div>  
                                    <p className='project-features-item-text' style={style.color}>Download my resume on site.</p>
                                    </div>
                                </li>
                                <li className='project-features-item'>
                                    <div className='project-features-item-container'>
                                    <div>
                                        <div className='project-features-item-bullet' style={style.block}></div>
                                    </div>  
                                    <p className='project-features-item-text' style={style.color}>A rotating and hoverable cube made of pure CSS.</p>
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
                                My undergraduate final-year thesis. An mPOS designed for dining businesses, integrated with a machine-learning algorithm to predict consumer behavior. Done in collaboration with <a href='https://www.linkedin.com/in/jacob-saucelo-594622286/' target='_blank' rel='noopener noreferrer' style={style.linkcolor}>
                                    Jacob Saucelo
                                </a> 
                                's website for the same beneficiary.
                                </p>
                            <p className='project-category' style={style.color}>Features</p>
                            <ul className='project-features-list'>
                                <li className='project-features-item'>
                                    <div className='project-features-item-container'>
                                    <div>
                                        <div className='project-features-item-bullet' style={style.block}></div>
                                    </div>  
                                    <p className='project-features-item-text' style={style.color}>AI that recommends popular combinations of products on the device.</p>
                                    </div>
                                </li>
                                <li className='project-features-item'>
                                    <div className='project-features-item-container'>
                                    <div>
                                        <div className='project-features-item-bullet' style={style.block}></div>
                                    </div>  
                                    <p className='project-features-item-text' style={style.color}>Data is in sync with <a href='https://www.linkedin.com/in/jacob-saucelo-594622286/' target='_blank' rel='noopener noreferrer' style={style.linkcolor}>
                                    Jacob Saucelo
                                </a> 
                                's website to recommend products.</p>
                                    </div>
                                </li>
                                <li className='project-features-item'>
                                    <div className='project-features-item-container'>
                                    <div>
                                        <div className='project-features-item-bullet' style={style.block}></div>
                                    </div>  
                                    <p className='project-features-item-text' style={style.color}>mPOS features such as Cart, Refund, Discount and Table Management.</p>
                                    </div>
                                </li>
                                <li className='project-features-item'>
                                    <div className='project-features-item-container'>
                                    <div>
                                        <div className='project-features-item-bullet' style={style.block}></div>
                                    </div>  
                                    <p className='project-features-item-text' style={style.color}>Inventory Management system & Sales Report.</p>
                                    </div>
                                </li>
                                <li className='project-features-item'>
                                    <div className='project-features-item-container'>
                                    <div>
                                        <div className='project-features-item-bullet' style={style.block}></div>
                                    </div>  
                                    <p className='project-features-item-text' style={style.color}>Data is Syncable with different devices.</p>
                                    </div>
                                </li>
                                <li className='project-features-item'>
                                    <div className='project-features-item-container'>
                                    <div>
                                        <div className='project-features-item-bullet' style={style.block}></div>
                                    </div>  
                                    <p className='project-features-item-text' style={style.color}>Can fully operate offline. Data will be synced once online.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='content-body-divider-half'></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}