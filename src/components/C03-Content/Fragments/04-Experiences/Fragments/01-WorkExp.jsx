import React from "react";

export function Work01(pkg) {
    const style = pkg.theme
    const isDark = pkg.color
    const caviteIcon = './assets/icons/cavite.png'

    return(
        <>
         <div className='experiences-container'>
            <div className='experience-header'>
                <div className='experience-icon' style={style.container}>
                    <img className='experience-icon-img-2' src={caviteIcon} alt='icon'></img>
                </div>
                <div className='experience-header-vdivider' style={style.block}></div>
                <div className='experience-header-text'>
                    <p className='experience-role' style={style.color}>Information Technology Intern</p>
                    <p className='experience-company' style={style.color}>Provincial Government of Cavite</p>  
                    <p className='experience-date' style={style.color}>June 2023 - July 2023</p>
                </div>
                
            </div>
            <div className='experience-header-hdivider' style={style.block}></div>
            <div className='experience-divider'></div>
            <p className='experience-category' style={style.color}>Job Description</p>
            <p className='experience-description' style={style.color}>
                Test
                </p>
            <p className='experience-category' style={style.color}>Responsibilities</p>
            <ul className='experience-responsibilities-list'>
                <li className='experience-responsibilities-item'>
                    <div className='experience-responsibilities-item-container'>
                    <div className='experience-responsibilities-item-bullet' style={style.block}></div>
                    <p className='experience-responsibilities-item-text' style={style.color}>Test</p>
                    </div>
                </li>
                <li className='experience-responsibilities-item'>
                    <div className='experience-responsibilities-item-container'>
                    <div className='experience-responsibilities-item-bullet' style={style.block}></div>
                    <p className='experience-responsibilities-item-text' style={style.color}>Test</p>
                    </div>
                </li>
                <li className='experience-responsibilities-item'>
                    <div className='experience-responsibilities-item-container'>
                    <div className='experience-responsibilities-item-bullet' style={style.block}></div>
                    <p className='experience-responsibilities-item-text' style={style.color}>Test</p>
                    </div>
                </li>

            </ul>
        </div>
        </>
       
    )
}