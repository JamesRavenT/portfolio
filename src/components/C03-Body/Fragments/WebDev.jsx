import React from "react";
import { useState } from "react";
import ImageNTitle from "./SubFragments/WebDev/01-Title";
import './_Skills.css'
import { RelatedSkills } from "./SubFragments/WebDev/02-RelatedSkills";
import { RelatedProjects } from "./SubFragments/WebDev/03-RelatedProjects";

export function WebDev(pkg){

    const [isHovered, setHoverState] = useState(false)
    const glowOn = () => { setHoverState(true) }
    const glowOff = () => { setHoverState(false) }
    const container = isHovered ? '1px solid #00DEFF' : '0'
    const iconDefault = isHovered ? '0' : '1'
    const iconOnHover= isHovered ? '1' : '0'
    const name = isHovered ? '#00DEFF' : '#f2f3f4'
    const view = isHovered ? '#00DEFF' : 'blue'

    let style = {
        setContainerBorder : {
            height: pkg.height,
            border: container,
            transition: 'height 2s, border 2s'
        },

        setIconDefaultState : {
            opacity: iconDefault,
            transition: 'opacity 2s'

        },

        setIconOnHoverState : {
            opacity: iconOnHover,
            transition: 'opacity 2s'
        },

        setTitleColor : {
            color: name,
            transition: 'color 2s'
        },

        setViewMoreColor : {
            color: view,
            transition: 'color 2s'
        },
    }

    return(
        <>  
            <div className='container-skills'
                 onMouseEnter={() => glowOn()}
                 onMouseLeave={() => glowOff()}
                 style={style.setContainerBorder}> 
                <ImageNTitle 
                    iconDefault={style.setIconDefaultState}
                    iconOnHover={style.setIconOnHoverState}
                    name={style.setTitleColor}
                    view={style.setViewMoreColor}
                />
            </div>
            <div className='details'
                 style={pkg.details}>
                <RelatedSkills />
                <RelatedProjects />
            </div>

        </>
    )
}