import React from "react";
import './_Skills.css'
import ImageNTitle from "./SubFragments/Android/01-Title";
import Statistics from "./SubFragments/Android/02-Statistics";
import RelatedIDEs from "./SubFragments/Android/03-IDE";
import RelatedLanguages from "./SubFragments/Android/04-Languages";

export function Android(){
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