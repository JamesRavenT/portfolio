import './Navbar.css'
import icon from '/assets/icons/Placeholder.png'

export default function Navbar(){
    return (
        <div className="navbar">
            <Logo />
        </div>
    )
}

export function Logo() {
    return (
        <div className='logo'>
            <img src={icon} alt="icon"/>
            <p>J A M E S &nbsp; R A V E N &nbsp; T A B A G</p>
        </div>
    )
}
