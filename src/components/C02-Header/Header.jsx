
import './Header.css';
import icon from '/assets/icons/Placeholder.png'
import { Tooltip } from 'react-tooltip'

//Variables
const linkedInLink = 'https://www.linkedin.com/in/james-raven-tabag-004799247/'
const linkedInIcon = '/assets/icons/linkedin.png'
const linkedInToolTip = 'LinkedIn'
//--
const githubLink = 'https://github.com/JamesRavenT'
const githubIcon = '/assets/icons/github.png'
const githubToolTip = 'GitHub'
//--
const gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=jraven.tabag@gmail.com'
const gmailIcon = '/assets/icons/gmail.png'
const gmailToolTip = 'jraven.tabag@gmail.com'
//--
const contactIcon = '/assets/icons/call.png' 
//--
const dlResumeIcon = '/assets/icons/dark/dark_download.png'


//Functions

//Components
export default function Header() {
    return (
        <div className='header'>
            <WelcomeLine />
            <Introduction />
        </div>
    )
}

export function WelcomeLine() {
    return (
        <div className='header-welcome'> 
            <span className='header-welcome-line'></span>
            <p className='header-welcome-text'> W E L C O M E &nbsp; T O &nbsp; M Y &nbsp; W O R L D</p>
            <span className='header-welcome-line'></span>
        </div>
    )
}

export function Introduction() {
    return (
        <div className='header-intro'>
            <span className='header-intro-text-container'>
                <p className='header-intro-text-greet'> Hello, I'm</p>
                <h1 className='header-intro-text-name'>James Raven Tabag</h1>
                <p className='header-intro-text-about'>Software Engineer with an experience in developing small websites, Android, and Windows application</p>
                <div className='header-intro-socials-contact'>
                    <span className='header-intro-socials'>
                        <ul className='header-intro-socials-list'>
                            <li className='header-intro-socials-item'>
                                <Tooltip id='linkedin-tooltip'> </Tooltip>
                                <a href={linkedInLink} data-tooltip-id='linkedin-tooltip' data-tooltip-content={linkedInToolTip} target='_blank'>
                                    <img className='header-intro-socials-icons' src={linkedInIcon} alt="icon"/>
                                </a>
                            </li>
                            <li className='header-intro-socials-item'>
                                <Tooltip id='linkedin-tooltip'> </Tooltip>
                                <a href={githubLink} data-tooltip-id='linkedin-tooltip' data-tooltip-content={githubToolTip} target='_blank'>
                                    <img className='header-intro-socials-icons' src={githubIcon} alt="icon"/>
                                </a>
                            </li>
                            <li className='header-intro-socials-item'>
                                <Tooltip id='gmail-tooltip'> </Tooltip>
                                <a href={gmailLink} data-tooltip-id='linkedin-tooltip' data-tooltip-content={gmailToolTip} target='_blank'>
                                    <img className='header-intro-socials-icons' src={gmailIcon} alt="icon"/>
                                </a>
                            </li>
                        </ul>
                    </span>
                    <div className='header-intro-socials-contact-divider'></div>
                    <span className='header-intro-socials-contact'>
                        <img className='header-intro-socials-contact-icon' src={contactIcon} alt="icon"/>
                        <p className='header-intro-socials-contact-number'>+639068310261</p>
                    </span>
                </div>
                <div className='header-resume'>
                    <span className='header-resume-btn'> 
                        <p className='header-resume-btn-text'> V I E W &nbsp; R E S U M E </p>
                        <img className='header-resume-btn-img' src={dlResumeIcon} alt="icon"/>
                    </span>
                </div>
            </span>

            <span className='header-intro-img-container'>
                <img className='header-intro-img' src={icon} alt="icon"/>
            </span>
            
        </div>
    )
}