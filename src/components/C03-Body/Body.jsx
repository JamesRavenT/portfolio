import { WebDev } from './Fragments/WebDev'
import { Android } from './Fragments/Android'
import './Body.css'
import { useState } from 'react'



//VARIABLES


export default function Body() {
    return (
        <div className='body'>
            <Skills />
        </div>
    )
}

export function Skills() {

    //Web Development
    const[selectedWebDev, setWebDevState] = useState(false)
    const onWebDev = () => { setWebDevState(true) }
    const offWebDev = () => { setWebDevState(false)}
    const height_WebDev = selectedWebDev ? '450px' : '350px';
    const width_WebDev = selectedWebDev ? '75%' : '350px';
    const info_WebDevWidth = selectedWebDev ? '90%' : '0';
    const info_WebDevOpacity = selectedWebDev ? '1' : '0';

    //Android Development
    const[selectedAndDev, setAndDevState] = useState(false)
    const onAndDev = () => { setAndDevState(true) }
    const offAndDev = () => { setAndDevState(false)}
    const width_AndDev = selectedAndDev ? '95%' : '350px';
    let style = {

        infoWebDev : {
            height: height_WebDev,
            width: width_WebDev,
            transition: 'height 2s width 2s'
        },    

        infoWebDevDetail : {
            height: height_WebDev,
            width: info_WebDevWidth,
            opacity: info_WebDevOpacity,        
        },

        infoAndDev : {
            width: width_AndDev,
        }

    }

    return(
        <div>
            <div className='container-category'>
                <div className='ds-block-01'>
                     <p> S K I L L S &nbsp; & &nbsp; P R O J E C T S</p>
                </div>     
                <div className='ds-block-02'></div>
                <div className='ds-block-03'></div>     
            </div>
            <div className='container-list'>
                <ul>
                    <li onClick={() => onWebDev()} 
                        onMouseLeave={() => offWebDev()} 
                        style={style.infoWebDev}> <WebDev height={height_WebDev} details={style.infoWebDevDetail}/> </li>
                    <li onClick={() => onAndDev()} 
                        onMouseLeave={() => offAndDev()} 
                        style={style.infoAndDev}> <Android /> </li>
                </ul>
            </div>
        </div>
      
    )
}