
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
        <div className='container-welcome'> 
            <span className='header-welcome-line'></span>
            <p className='header-welcome-text'> W E L C O M E &nbsp; T O &nbsp; M Y &nbsp; W O R L D</p>
            <span className='header-welcome-line'></span>
        </div>
    )
}

export function Introduction() {
    return (
        <div className='container-intro'>
            <span className='container-leftblock'>
                <p className='greeting'> Hello, I'm</p>
                <h1 className='name'>James Raven Tabag</h1>
                <p className='job-description'>Software Engineer with an experience in developing small websites, Android, and Windows application</p>
                <div className='container-socials-n-contact'>
                    <span className='container-socials'>
                        <ul>
                            <li>
                                <Tooltip id='linkedin-tooltip'> </Tooltip>
                                <a href={linkedInLink} data-tooltip-id='linkedin-tooltip' data-tooltip-content={linkedInToolTip} target='_blank'>
                                    <img src={linkedInIcon} alt="icon"/>
                                </a>
                            </li>
                            <li>
                                <Tooltip id='linkedin-tooltip'> </Tooltip>
                                <a href={githubLink} data-tooltip-id='linkedin-tooltip' data-tooltip-content={githubToolTip} target='_blank'>
                                    <img src={githubIcon} alt="icon"/>
                                </a>
                            </li>
                            <li>
                                <Tooltip id='gmail-tooltip'> </Tooltip>
                                <a href={gmailLink} data-tooltip-id='linkedin-tooltip' data-tooltip-content={gmailToolTip} target='_blank'>
                                    <img src={gmailIcon} alt="icon"/>
                                </a>
                            </li>
                        </ul>
                    </span>
                    <div className='divider'></div>
                    <span className='container-contact'>
                        <img src={contactIcon} alt="icon"/>
                        {/* <p>+639068310261</p> */}
                    </span>
                </div>
                <div className='container-btn'>
                        <p> V I E W &nbsp; R E S U M E </p>
                        <img src={dlResumeIcon} alt="icon"/>
                </div>
            </span>
            <span className='container-rightblock'>
            </span>
            
        </div>
    )
}