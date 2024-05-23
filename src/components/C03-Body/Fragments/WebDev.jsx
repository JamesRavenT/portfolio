import React from "react";
import './_Skills.css'
import ImageNTitle from "./SubFragments/WebDev/01-Title";
import Statistics from "./SubFragments/WebDev/02-Statistics";
import RelatedIDEs from "./SubFragments/WebDev/03-IDE";
import RelatedLanguages from "./SubFragments/WebDev/04-Languages";

export function WebDev(){
    return(
        <>
            <div className='body-skills-item-container'> 
                <ImageNTitle />
                <Statistics />
                <RelatedIDEs />
                <RelatedLanguages />
                <span className='body-skills-item-view'>
                    <p className='body-skills-item-view-text'>View More</p>
                </span>                              
            </div>
        </>
    )
}