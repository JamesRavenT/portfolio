import { WebDev } from './Fragments/WebDev'
import './Body.css'
import { Android } from './Fragments/Android'


//VARIABLES


export default function Body() {
    return (
        <div className='body'>
            <Skills />
        </div>
    )
}

export function Skills() {
    return(
        <div className='body-skills'>
            <div className='body-skills-header'>
                <div className='body-skills-header-design01'>
                     <p className='body-skills-header-text'> S K I L L S &nbsp; & &nbsp; P R O J E C T S</p>
                </div>     
                <div className='body-skills-header-design02'></div>
                <div className='body-skills-header-design03'></div>     
            </div>
            <div className='body-skills-container'>
                <ul className='body-skills-list'>
                    <li className='body-skills-item'>
                        <WebDev />
                    </li>
                    <li className='body-skills-item'>
                        <Android />
                    </li>
                </ul>
            </div>
            
        </div>
    )
}