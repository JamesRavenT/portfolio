
import './Header.css';
import { Tooltip } from 'react-tooltip'

//Variables
const linkedInLink = 'https://www.linkedin.com/in/james-raven-tabag-004799247/'
const linkedInIcon = '/assets/icons/linkedin.png'
const linkedInToolTip = 'LinkedIn'
//--
const githubLink = 'https://github.com/JamesRavenT'
const githubToolTip = 'GitHub'
//--
const gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=jraven.tabag@gmail.com'
const gmailIcon = '/assets/icons/gmail.png'
const gmailToolTip = 'jraven.tabag@gmail.com'
//--


//Functions


//Components
export default function Header(theme) {

    const isDark = theme.color;

    const color = isDark ? '#131313' : '#f2f3f4'

    let style = {
        bg : {
            backgroundColor: color,
            transition: '1s'
        }
    }

    return (
        <div className='header'
             style={style.bg}>
            <WelcomeLine color={isDark}/>
            <Introduction color={isDark}/>
        </div>
    )
}

export function WelcomeLine(theme) {
    const isDark = theme.color;
    const color = isDark ? '#f2f3f4' : '#232323'

    let style = {
        line : {
            backgroundColor: color,
            transition: '1s'
        },

        color : {
            color: color,
            transition: '1s'
        }
    }
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
    const githubIcon = isDark ? '/assets/icons/dark/github.png' : '/assets/icons/github.png'
    const contactIcon = isDark ? '/assets/icons/dark/call.png' : '/assets/icons/call.png' 
    const viewIcon = isDark? '/assets/icons/dark/download.png' : '/assets/icons/download.png'
    let style = {

        bg :  {
            backgroundColor: color
        },

        line :  {
            backgroundColor: color
        },

        border : {
            border: '2px solid ' + bordercolor
        },

        color : {
            color: color
        },

        altcolor : {
            color: altcolor
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
                    An entry-level Software Engineer based in Philippines. 
                    Currently, I can develop Websites in ReactJS and Android Applications in Java.
                    </p>
                <div className='container-socials-n-contact'>
                    <span className='container-socials'>
                        <ul className='list-socials'>
                            <li className='item-socials'>
                                <Tooltip id='linkedin-tooltip'> </Tooltip>
                                <a href={linkedInLink} 
                                   data-tooltip-id='linkedin-tooltip' 
                                   data-tooltip-content={linkedInToolTip} 
                                   target='_blank'>
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
                                   target='_blank'>
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
                                   target='_blank'>
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
                <div className='container-btn'
                     style={style.bg}>
                        <p className='text-btn'
                           style={style.altcolor}> 
                           V I E W &nbsp; R E S U M E </p>
                        <img className='icon-btn'
                             src={viewIcon} 
                             alt="icon"/>
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