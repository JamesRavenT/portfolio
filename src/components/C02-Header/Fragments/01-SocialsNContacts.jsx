import React from "react";
import { Tooltip } from 'react-tooltip'

export function SocialsNContact(pkg) {
    const isDark = pkg.theme
    const style = pkg.layout
    //Variables
    const linkedInLink = 'https://www.linkedin.com/in/james-raven-tabag-004799247/'
    const linkedInIcon = 'assets/icons/linkedin.png'
    const linkedInToolTip = 'LinkedIn'
    //--
    const githubLink = 'https://github.com/JamesRavenT'
    const githubToolTip = 'GitHub'
    //--
    const gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=jraven.tabag@gmail.com'
    const gmailIcon = 'assets/icons/gmail.png'
    const gmailToolTip = 'jraven.tabag@gmail.com'
    //--
    const githubIcon = isDark ? 'assets/icons/dark/github.png' : 'assets/icons/github.png'
    const contactIcon = isDark ? 'assets/icons/dark/call.png' : 'assets/icons/call.png' 
    return(
        <>
        <div className='container-socials-n-contact'>
            <span className='container-socials'>
                <ul className='list-socials'>
                    <li className='item-socials'>
                        <Tooltip id='linkedin-tooltip'> </Tooltip>
                        <a href={linkedInLink} 
                            data-tooltip-id='linkedin-tooltip' 
                            data-tooltip-content={linkedInToolTip} 
                            target='_blank'
                            rel='noopener noreferrer'>
                            <img className='icon-socials'
                                    src={linkedInIcon} 
                                    alt="icon"/>
                        </a>
                    </li>
                    <li className='item-socials'>
                        <Tooltip id='linkedin-tooltip'> </Tooltip>
                        <a href={githubLink} 
                            data-tooltip-id='linkedin-tooltip' 
                            data-tooltip-content={githubToolTip} 
                            target='_blank'
                            rel='noopener noreferrer'>
                            <img className='icon-socials'
                                    src={githubIcon} 
                                    alt="icon"/>
                        </a>
                    </li>
                    <li className='item-socials'>
                        <Tooltip id='gmail-tooltip'> </Tooltip>
                        <a href={gmailLink} 
                            data-tooltip-id='linkedin-tooltip' 
                            data-tooltip-content={gmailToolTip} 
                            target='_blank'
                            rel='noopener noreferrer'>
                            <img className='icon-socials'
                            src={gmailIcon} 
                            alt="icon"/>
                        </a>
                    </li>
                </ul>
            </span>
            <div className='divider'
                    style={style.line}></div>
            <span className='container-contact'>
                <img className='icon-contact' 
                    src={contactIcon} 
                    alt="icon"/>
                <p className='text-contact'
                    style={style.color}> 
                    &nbsp;&#10088;+63&#10089; 9068310261
                    </p>
            </span>
        </div>
        </>
    )
}