import React from 'react'
import { useState } from 'react'
import { getValue } from '../../_lib/helper/value-getter'
import { bodyContent, showCategory, hideCategory} from '../../_lib/styles/style-content.js'
import { AboutMe } from './Fragments/01-AboutMe/AboutMe.jsx'
import { Skills } from './Fragments/02-Skills/Skills.jsx'
import { Projects } from './Fragments/03-Projects/Projects.jsx'
import { Experiences } from './Fragments/04-Experiences/Experiences.jsx'

import './layout/content-320x.css'
import './layout/content-375x.css'
import './layout/content-425x.css'
import './layout/content-768x.css'
import './layout/content-1024x.css'
import './layout/content-1280x.css'
import './layout/content-1440x.css'


export default function Content(pkg) {

    const isDark = pkg.color
    const bg = isDark ? 'linear-gradient(to bottom,  #333333, #131313, #131313)'  
                      : 'linear-gradient(to bottom,  #ffffff, #f2f3f4, #c3c3c3)'
    
    let style = {
        bg : {
            background: bg,
        }
    }

    return (
        <div className='content'
         style={style.bg}>
            <ContentSelector color={isDark}/>
        </div>
    )
}

export function ContentSelector(pkg) {

    const[selectedCategory, setCategory] = useState('About Me');
    const isDark = pkg.color
    const line = isDark? '#f2f3f4' : '#232323'

    const aboutmeIconLight = 'assets/icons/profile.png'
    const aboutmeIconDark = 'assets/icons/dark/profile.png'
    const skillsIconLight = 'assets/icons/skills.png'
    const skillsIconDark = 'assets/icons/dark/skills.png'
    const projectsIconLight = 'assets/icons/portfolio.png'
    const projectsIconDark = 'assets/icons/dark/portfolio.png'
    const experienceIconLight = 'assets/icons/experience.png'
    const experienceIconDark = 'assets/icons/dark/experience.png'
    
    
    const lightMode = isDark? {visibility : {position: 'absolute', zIndex: '2', opacity: '0'}} :  {visibility : {opacity: '1', transition: '1s'}}  
    const darkmode = isDark? {visibility : {opacity: '1', transition: '1s'}} :  {visibility : {position: 'absolute', zIndex: '2', opacity: '0', }} 
    

    let style = {
        line01 : {
            backgroundColor: line,
            transition: '1s'
        },
        line02 : {
            backgroundColor: line,
            transition: '1s'
        },
        line03 : {
            backgroundColor: line,
            transition: '1s'
        },
        line04 : {
            background: line,
            transition: '1s'
        },
        diamond : {
            border: '1px solid' + line,
            transition: '1s'
        },

    }

    return(
        <>
            <div className='content-selector'>
                <div className='content-selector-ds-start'
                     style={style.line01}>
                     </div>
                <div className='content-selector-diamond-container'>
                    <div className='content-selector-diamond'
                        style={style.diamond}
                        onClick={() => setCategory('About Me')}>
                        <img className='content-selector-icon' src={aboutmeIconLight} style={lightMode.visibility} alt='icon '></img>
                        <img className='content-selector-icon' src={aboutmeIconDark} style={darkmode.visibility} alt='icon '></img>
                    </div>
                </div>
              
                <div className='content-selector-ds-mid'
                     style={style.line02}>
                     </div>
                <div className='content-selector-diamond-container'>
                    <div className='content-selector-diamond'
                        style={style.diamond}
                        onClick={() => setCategory('Skills')}>
                        <img className='content-selector-icon' src={skillsIconLight} style={lightMode.visibility} alt='icon '></img>
                        <img className='content-selector-icon' src={skillsIconDark} style={darkmode.visibility} alt='icon '></img>
                     </div>        
                </div>
                        
                <div className='content-selector-ds-mid'
                     style={style.line03}>
                     </div>
                <div className='content-selector-diamond-container'>
                    <div className='content-selector-diamond'
                        style={style.diamond}
                        onClick={() => setCategory('Projects')}>
                        <img className='content-selector-icon' src={projectsIconLight} style={lightMode.visibility} alt='icon '></img>
                        <img className='content-selector-icon' src={projectsIconDark} style={darkmode.visibility} alt='icon '></img>
                    </div>
                </div>
                <div className='content-selector-ds-mid'
                     style={style.line03}>
                     </div>
                <div className='content-selector-diamond-container'>
                    <div className='content-selector-diamond'
                        style={style.diamond}
                        onClick={() => setCategory('Experiences')}>
                        <img className='content-selector-icon' src={experienceIconLight} style={lightMode.visibility} alt='icon '></img>
                        <img className='content-selector-icon' src={experienceIconDark} style={darkmode.visibility} alt='icon '></img>
                     </div>
                </div>
            
                <div className='content-selector-ds-end'
                     style={style.line04}>
                     </div>
            </div>
            <div style={lightMode.visibility}>
                <ContentBody color={isDark} category={selectedCategory}/>
            </div>
            <div style={darkmode.visibility}>
                <ContentBody color={isDark} category={selectedCategory}/>
            </div>
            
        </>
      
    )
}

export function ContentBody(pkg) {
    const isDark = pkg.color;
    const title = pkg.category
    const color = isDark? '#f2f3f4' : '#232323'
    const style = bodyContent(color);
    const aboutMe = title == 'About Me' ? showCategory() : hideCategory()
    const skills = title == 'Skills' ? showCategory() : hideCategory()
    const projects = title == 'Projects' ? showCategory() : hideCategory()
    const experiences = title == 'Experiences' ? showCategory() : hideCategory()
    
    return (
        <>
        <div style={aboutMe.visibility}>
            <AboutMe theme={style}/>
        </div>
        <div style={skills.visibility}>
            <Skills theme={style} />
        </div>
        <div style={projects.visibility}>
            <Projects theme={style} color={isDark}/>
        </div>
        <div style={experiences.visibility}>
            <Experiences theme={style} />
        </div>
        </>
    )

}


