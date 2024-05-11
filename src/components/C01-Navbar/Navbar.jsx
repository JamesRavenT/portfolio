import './Navbar.css'
import icon from '/assets/icons/Placeholder.png'

export default function Navbar(){
    return (
        <div className="navbar">
            <Logo />
            <ResumeBtn />
        </div>
    )
}

export function Logo() {
    return (
        <div className='navbar-logo'>
            <img className='navbar-logo-img' src={icon} alt="icon"/>
            <p className='navbar-logo-text'>J A M E S &nbsp; R A V E N &nbsp; T A B A G</p>
        </div>
    )
}

export function ResumeBtn() {
    return (
        <div className='navbar-resume'>
            <span className='navbar-resume-btn'> 
                <p className='navbar-resume-btn-text'> V I E W &nbsp; R E S U M E </p>
                <img className='navbar-resume-btn-img' src={icon} alt="icon"/>
            </span>
        </div>
    )
}