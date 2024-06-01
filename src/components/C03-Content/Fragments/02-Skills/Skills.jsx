import React from "react"

export function Skills(pkg) {
    const style = pkg.theme
    //WEBDEV
    const webdevIcon = '/assets/icons/webdev.png'
    const vscodeIcon = './assets/icons/vscode.png'
    const mongoDBIcon = '/assets/icons/mongodb.png'
    const html5Icon = './assets/icons/html5.png'
    const css3Icon = './assets/icons/css3.png'    
    const jsIcon = './assets/icons/javascript.png'
    const nodeJSIcon = './assets/icons/nodejs.png'
    const reactJSIcon = './assets/icons/reactjs.png'
    //ANDROID
    const anddevIcon = './assets/icons/mobdev.png'
    const andstdIcon = './assets/icons/androidstd.png'
    const realmIcon = './assets/icons/realm.png'
    const fsIcon = './assets/icons/firebase.png'
    const javaIcon = './assets/icons/java.png' 
    //DESKTOP
    const deskdevIcon = './assets/icons/windows.png'
    const qtIcon = './assets/icons/qt.png'
    const cppIcon = '/assets/icons/c-plusplus.png'
    const csharpIcon = './assets/icons/c-sharp.png'
    
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
                    style={style.textLight}>Skills</p>
                    <p className='content-header-title'
                    style={style.textDark}>Skills</p>
                </div>           
            </div>
        </div>
        <div className='content-body'>
            <div className='content-body-container'
                 style={style.borderBottom}>
                <div className='content-body-slide'>
                    <div className='content-body-panel'>
                    <div className='content-body-divider-half'></div>
                        <div className='skills-container'>
                            <div className='skill-header'>
                                <div className='skill-bar' style={style.bg}></div>
                                <p className='skill-name' style={style.color}>Web Development</p>
                            </div>
                            <p className='skill-category' style={style.color}>Related Skills</p>
                            <ul className='skill-list'>
                                <li className='skill-item'>
                                    <span className='skill-item-container'>
                                        <img className='skill-item-icon' src={html5Icon} alt='icon'></img>
                                        <p className='skill-item-name' style={style.color}>HTML 5</p>
                                    </span>
                                </li>
                                <li className='skill-item'>
                                    <span className='skill-item-container'>
                                        <img className='skill-item-icon' src={css3Icon} alt='icon'></img>
                                        <p className='skill-item-name' style={style.color}>CSS 3</p>
                                    </span>
                                </li>
                                <li className='skill-item'>
                                    <span className='skill-item-container'>
                                        <img className='skill-item-icon' src={jsIcon} alt='icon'></img>
                                        <p className='skill-item-name' style={style.color}>Javascript</p>
                                    </span>
                                </li>
                                <li className='skill-item'>
                                    <span className='skill-item-container'>
                                        <img className='skill-item-icon' src={nodeJSIcon} alt='icon'></img>
                                        <p className='skill-item-name' style={style.color}>Node JS</p>
                                    </span>
                                </li>
                                <li className='skill-item'>
                                    <span className='skill-item-container'>
                                        <img className='skill-item-icon' src={reactJSIcon} alt='icon'></img>
                                        <p className='skill-item-name' style={style.color}>React JS</p>
                                    </span>
                                </li>
                                <li className='skill-item'>
                                    <span className='skill-item-container'>
                                        <img className='skill-item-icon' src={mongoDBIcon} alt='icon'></img>
                                        <p className='skill-item-name' style={style.color}>Mongo DB</p>
                                    </span>
                                </li>
                                <li className='skill-item'>
                                    <span className='skill-item-container'>
                                        <img className='skill-item-icon' src={vscodeIcon} alt='icon'></img>
                                        <p className='skill-item-name' style={style.color}>VS Code</p>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className='content-body-divider' style={style.block}></div>
                        <div className='skills-container'>
                            <div className='skill-header'>
                                <div className='skill-bar' style={style.bg}></div>
                                <p className='skill-name' style={style.color}>Mobile App Development</p>
                            </div>
                            <p className='skill-category' style={style.color}>Related Skills</p>
                            <ul className='skill-list'>
                                <li className='skill-item'>
                                    <span className='skill-item-container'>
                                        <img className='skill-item-icon' src={javaIcon} alt='icon'></img>
                                        <p className='skill-item-name' style={style.color}>Java</p>
                                    </span>
                                </li>
                                <li className='skill-item'>
                                    <span className='skill-item-container'>
                                        <img className='skill-item-icon' src={realmIcon} alt='icon'></img>
                                        <p className='skill-item-name' style={style.color}>Realm</p>
                                    </span>
                                </li>
                                <li className='skill-item'>
                                    <span className='skill-item-container'>
                                        <img className='skill-item-icon' src={fsIcon} alt='icon'></img>
                                        <p className='skill-item-name' style={style.color}>FireStore</p>
                                    </span>
                                </li>
                                <li className='skill-item'>
                                    <span className='skill-item-container'>
                                        <img className='skill-item-icon' src={andstdIcon} alt='icon'></img>
                                        <p className='skill-item-name' style={style.color}>Android Studio</p>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className='content-body-divider' style={style.block}></div>
                        <div className='skills-container'>
                            <div className='skill-header'>
                                <div className='skill-bar' style={style.bg}></div>
                                <p className='skill-name' style={style.color}>Desktop App Development</p>
                            </div>
                            <p className='skill-category' style={style.color}>Related Skills</p>
                            <ul className='skill-list'>
                                <li className='skill-item'>
                                    <span className='skill-item-container'>
                                        <img className='skill-item-icon' src={csharpIcon} alt='icon'></img>
                                        <p className='skill-item-name' style={style.color}>C#</p>
                                    </span>
                                </li>
                                <li className='skill-item'>
                                    <span className='skill-item-container'>
                                        <img className='skill-item-icon' src={cppIcon} alt='icon'></img>
                                        <p className='skill-item-name' style={style.color}>C++</p>
                                    </span>
                                </li>
                                <li className='skill-item'>
                                    <span className='skill-item-container'>
                                        <img className='skill-item-icon' src={qtIcon} alt='icon'></img>
                                        <p className='skill-item-name' style={style.color}>Qt</p>
                                    </span>
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
