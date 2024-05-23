import React from "react";

export default function RelatedLanguages() {
    return(
        <>
            <span className='body-skills-item-languages'>
                <div className='body-skills-item-languages-line'></div>
                <p className='body-skills-item-languages-text'>Languages</p>   
            </span>
            <ul className='body-skills-item-languages-list'>
                <li className='body-skills-item-languages-item'>
                    <img className='body-skills-item-languages-item-logo'></img>
                    <p className='body-skills-item-languages-item-text'>HTML5</p>
                </li>
                <li className='body-skills-item-languages-item'>
                    <img className='body-skills-item-languages-item-logo'></img>
                    <p className='body-skills-item-languages-item-text'>CSS3</p>
                </li>
                <li className='body-skills-item-languages-item'>
                    <img className='body-skills-item-languages-item-logo'></img>
                    <p className='body-skills-item-languages-item-text'>Javascript</p>
                </li>
                <li className='body-skills-item-languages-item'>
                    <img className='body-skills-item-languages-item-logo'></img>
                    <p className='body-skills-item-languages-item-text'>NodeJS</p>
                </li>
                <li className='body-skills-item-languages-item'>
                    <img className='body-skills-item-languages-item-logo'></img>
                    <p className='body-skills-item-languages-item-text'>ReactJS</p>
                </li>
            </ul>
        </>
    )
}