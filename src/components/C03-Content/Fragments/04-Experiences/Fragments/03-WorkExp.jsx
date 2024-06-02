import React from "react";

export function Work03(pkg) {
    const style = pkg.theme
    const isDark = pkg.color
    const kdbIcon = './assets/icons/kdb.png'

    return(
        <>
         <div className='experiences-container'>
            <div className='experience-header'>
                <div className='experience-icon' style={style.container}>
                    <img className='experience-icon-img-2' src={kdbIcon} alt='icon'></img>
                </div>
                <div className='experience-header-vdivider' style={style.block}></div>
                <div className='experience-header-text'>
                    <p className='experience-role' style={style.color}>Assistant Web Developer</p>
                    <p className='experience-company' style={style.color}>Keep d' Books - Bacoor, Cavite</p>  
                    <p className='experience-date' style={style.color}>Oct 2018 - Nov 2018</p>
                </div>
                
            </div>
            <div className='experience-header-hdivider' style={style.block}></div>
            <div className='experience-divider'></div>
            <p className='experience-category' style={style.color}>Job Description</p>
            <p className='experience-description' style={style.color}>
                My Senior High Work Immersion which took 80 hours to complete. At first, me and my colleagues were assigned to assigned to encoding until the manager requested us to develop a work order management system for them.
                </p>
            <p className='experience-category' style={style.color}>Responsibilities</p>
            <ul className='experience-responsibilities-list'>
                <li className='experience-responsibilities-item'>
                    <div className='experience-responsibilities-item-container'>
                    <div className='experience-responsibilities-item-bullet' style={style.block}></div>
                    <p className='experience-responsibilities-item-text' style={style.color}>Encoded receipts and transactions.</p>
                    </div>
                </li>
                <li className='experience-responsibilities-item'>
                    <div className='experience-responsibilities-item-container'>
                    <div className='experience-responsibilities-item-bullet' style={style.block}></div>
                    <p className='experience-responsibilities-item-text' style={style.color}>Developed a work order management system.</p>
                    </div>
                </li>
            </ul>
        </div>
        </>
       
    )
}