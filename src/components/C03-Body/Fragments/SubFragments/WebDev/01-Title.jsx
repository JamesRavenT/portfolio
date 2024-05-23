import React from "react";

//Variables
const webdevIcon = 'assets/icons/webdev.png'

export default function ImageNTitle() {
    return(
        <>
            <img className='body-skills-item-icon' src={webdevIcon} alt='icon'></img>
            <p className='body-skills-item-text'>Web Development</p>
        </>
    )
}