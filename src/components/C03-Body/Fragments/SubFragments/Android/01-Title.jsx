import React from "react";

//Variables


export default function ImageNTitle(pkg) {
    const iconDefault = 'assets/icons/webdev.png'
    const iconOnHover = 'assets/icons/hover/webdev.png' 
    return(
        <>
            <div className='front'>
                <img className='iconDefault' src={iconDefault} style={pkg.iconDefault} alt='icon'></img>
                <img className='iconOnHover' src={iconOnHover} style={pkg.iconOnHover} alt='icon'></img>
                <p style={pkg.name}> Web Development </p>
                <p style={pkg.name}> Click to View More </p>
            </div>
            
        </>
       
    )
}