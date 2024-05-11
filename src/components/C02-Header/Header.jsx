
import './Header.css';
import icon from '/assets/icons/Placeholder.png'

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
                <span className='header-intro-socials'>
                    <ul className='header-intro-socials-list'>
                        <li className='header-intro-socials-item'>
                            <img className='header-intro-socials-icons' src={icon} alt="icon"/>
                        </li>
                        <li className='header-intro-socials-item'>
                            <img className='header-intro-socials-icons' src={icon} alt="icon"/>
                        </li>
                        <li className='header-intro-socials-item'>
                            <img className='header-intro-socials-icons' src={icon} alt="icon"/>
                        </li>
                        <li className='header-intro-socials-item'>
                            <img className='header-intro-socials-icons' src={icon} alt="icon"/>
                        </li>
                        <li className='header-intro-socials-item'>
                            <img className='header-intro-socials-icons' src={icon} alt="icon"/>
                        </li>
                        <li className='header-intro-socials-item'>
                            <img className='header-intro-socials-icons' src={icon} alt="icon"/>
                        </li>
                    </ul>
                </span>
                <div className='header-resume'>
                    <span className='header-resume-btn'> 
                        <p className='header-resume-btn-text'> V I E W &nbsp; R E S U M E </p>
                        <img className='header-resume-btn-img' src={icon} alt="icon"/>
                    </span>
                </div>
            </span>

           

            <span className='header-intro-img-container'>
                <img className='header-intro-img' src={icon} alt="icon"/>
            </span>
            
        </div>
    )
}