import React from 'react';
import { SocialsNContact } from './Fragments/01-SocialsNContacts';
import { DownloadBtn } from './Fragments/02-DownloadResumeBtn';
import { getHeaderBackground, getHeaderWelcomeLine } from '../../_lib/styles/style-header';

import './layout/header-320x.css'
import './layout/header-375x.css'
import './layout/header-425x.css'
import './layout/header-768x.css'
import './layout/header-1024x.css'
import './layout/header-1280x.css'
import './layout/header-1440x.css'


export default function Header(theme) {
    const isDark = theme.color;
    const style = getHeaderBackground(isDark)
    return (
        <div className='header' style={style.bg}>
            <WelcomeLine color={isDark}/>
            <Introduction color={isDark}/>
        </div>
    )
}

export function WelcomeLine(theme) {
    const isDark = theme.color;
    const style = getHeaderWelcomeLine(isDark)
    
    return (
        <div className='container-welcome'> 
            <span className='welcome-ds-line'
                  style={style.line}></span>
            <p className='welcome-text' 
               style={style.color}>W E L C O M E &nbsp; T O &nbsp; M Y &nbsp; W O R L D</p>
            <span className='welcome-ds-line'
                  style={style.line}></span>
        </div>
    )
}

export function Introduction(theme) {

    const isDark = theme.color;
    const color = isDark ? '#f2f3f4' : '#232323'
    const altcolor = isDark? '#232323' : '#f2f3f4' 
    const bordercolor = isDark? '#f2f3f4' : '#232323'


    const lightMode = isDark? {visibility : {display: 'none'}} :  {visibility : {opacity: '1', transition: '1s'}}  
    const darkmode = isDark? {visibility : {opacity: '1', transition: '1s'}} :  {visibility : {display: 'none'}} 
    
    let style = {

        bg :  {
            backgroundColor: color,
            transition: '1s'
        },

        line :  {
            backgroundColor: color,
            transition: '1s'
        },

        border : {
            border: '2px solid ' + bordercolor,
        },

        color : {
            color: color,
            transition: '1s'
        },

        altcolor : {
            color: altcolor,
            transition: '1s'
        }
    }
    return (
        <div className='container-intro'>
            <span className='container-leftblock'>
                <p className='greeting'
                   style={style.color}> 
                   Hello, I'm
                   </p>
                <h1 className='name'
                    style={style.color}>
                    James Raven Tabag
                    </h1>
                <p className='job-description'
                   style={style.color}>
                    An entry-level Software Engineer based in the Philippines. 
                    Currently, I can develop Websites in ReactJS and Android Applications in Java.
                    </p>
                <div className='header-scd' style={lightMode.visibility}>
                    <SocialsNContact theme={isDark} layout={style}/>
                    <DownloadBtn theme={isDark} layout={style}/>
                </div>
                <div className='header-scd' style={darkmode.visibility}>
                    <SocialsNContact theme={isDark} layout={style}/>
                    <DownloadBtn theme={isDark} layout={style}/>
                </div>
       
            </span>
            <span className='container-rightblock'>
                <div className="wrapper-box">
                    <div className="container-box">
                        <div id='front' 
                             className="box" 
                             style={style.border}></div>
                        <div id='back'
                             className="box" 
                             style={style.border}></div>
                        <div id='left'
                             className="box" 
                             style={style.border}></div>
                        <div id='right'
                             className="box" 
                             style={style.border}></div>
                        <div id='top'
                             className="box" 
                             style={style.border}></div>
                        <div id='bottom'
                             className="box" 
                             style={style.border}></div>
                    </div>
                </div>
               
            
            </span>
            
        </div>
    )
}