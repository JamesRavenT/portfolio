import React from "react";

export  function RelatedSkills() {

    const html5Icon = './assets/icons/html5.png'
    const css3Icon = './assets/icons/css3.png'    
    const jsIcon = './assets/icons/javascript.png'
    const nodeJSIcon = './assets/icons/nodejs.png'
    const reactJSIcon = './assets/icons/reactjs.png'
    const vscodeIcon = './assets/icons/vscode.png'

    return(
        <>
            <span className='container-relatedskills'>
                <div className="ds-block-01">
                    <div className='design-arrow'>
                        <p className="design-d01">•</p>
                        <p className="design-d02">•</p>
                        <p className="design-d03">•</p>
                        </div> 
                    <p>Related Skills</p>
                </div>
                <div>
                    <ul className='list-relatedskills'>
                        <li className='item-relatedskills'>
                            <span>
                                <img src={html5Icon} alt='icon'></img>  
                                <p>HTML 5</p>
                            </span>
                        </li>
                        <li className='item-relatedskills'>
                            <span>
                                <img src={css3Icon} alt='icon'></img>
                                <p>CSS 3</p>
                            </span>
                        </li>
                        <li className='item-relatedskills'>
                            <span>
                                <img src={jsIcon} alt='icon'></img>
                                <p>Javascript</p>
                            </span>
                        </li>
                        <li className='item-relatedskills'>
                            <span>
                                <img src={vscodeIcon} alt='icon'></img>
                                <p>VS Code</p>
                            </span>
                        </li>
                        <li className='item-relatedskills'>
                            <span>
                                <img src={nodeJSIcon} alt='icon'></img>
                                <p>NodeJS</p>
                            </span>
                        </li>
                        <li className='item-relatedskills'>
                            <span>
                                <img src={reactJSIcon} alt='icon'></img>
                                <p>ReactJS</p>
                            </span>
                        </li>
                    </ul>
                </div>
   
            </span>
        </>
    )
}