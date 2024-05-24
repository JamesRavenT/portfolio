import React from "react";

export  function RelatedSkills() {

    const html5Icon = './assets/icons/Placeholder.png'
    const css3Icon = './assets/icons/Placeholder.png'    
    const jsIcon = './assets/icons/Placeholder.png'
    const nodeJSIcon = './assets/icons/Placeholder.png'
    const reactJSIcon = './assets/icons/Placeholder.png'

    return(
        <>
            <span className='container-relatedskills'>
                <div className="ds-block-01"> 
                    <p>RELATED SKILLS</p>
                </div>
                <div>
                    <ul>
                        <li>
                            <span>
                                <img src={html5Icon} alt='icon'></img>
                                <p>HTML 5</p>
                            </span>
                        </li>
                        <li>
                            <span>
                                <img src={css3Icon} alt='icon'></img>
                                <p>CSS 3</p>
                            </span>
                        </li>
                        <li>
                            <span>
                                <img src={jsIcon} alt='icon'></img>
                                <p>Javascript</p>
                            </span>
                        </li>
                        <li>
                            <span>
                                <img src={nodeJSIcon} alt='icon'></img>
                                <p>NodeJS</p>
                            </span>
                        </li>
                        <li>
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