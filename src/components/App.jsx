import './App.css';
import { useState } from 'react';
import Navbar from './C01-Navbar/Navbar.jsx'
import Header from './C02-Header/Header.jsx'
import Content from './C03-Content/Content.jsx';
import Footer from './C04-Footer/Footer.jsx';

//App Builder
export default function App() {

    //LIGHT & DARKMODE
    const [isDark, setMode] = useState(false)
    const toggleIcon = isDark? 'assets/icons/dark.png'  : 'assets/icons/light.png' 
    const webTheme = isDark? true : false;
    
    const backgroundColor = isDark? '#131313' : '#c3c3c3'
    const toggleColor = isDark? '#f2f3f4' : '#232323'
    const iconHeight = isDark? '20px' : '25px'
    const iconWidth = isDark? '20px' : '25px'   
    
    let style = {

        navbar : {
            backgroundColor: backgroundColor,
            
        },
        
        container : {
            border: '1px solid' + toggleColor,
            transition: '1s'
        },

        icon: {
            height: iconHeight, width: iconWidth,
            transition: '1s'
        }


    }

    return (
        <div className='container'>
            <div className='navbar'
                 style={style.navbar}>
                <div className='nav-container'>
                    <Navbar color={webTheme}/>
                    <div className='nav-mode-container'
                         style={style.container}
                         onClick={() => { 
                            isDark? setMode(false) : setMode(true)
                            }}>
                    <img className='mode-img' 
                         style={style.icon}
                         src={toggleIcon} 
                         alt='icon'/>
                </div>
            </div>
            </div>      
            <Header color={webTheme}/>
            <Content color={webTheme}/>
            <Footer color={webTheme}/>
        </div>
    )
}