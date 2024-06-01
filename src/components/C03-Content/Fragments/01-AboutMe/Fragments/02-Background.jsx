import React from "react";

export function Background(pkg) {
    const style = pkg.theme
    return(
        <>
         <div className='aboutme-container'>
            <p className='aboutme-header'
                style={style.color}>
                    Education
            </p>
            <div className='aboutme-education'>
                <div className='aboutme-diamond' style={style.bg}></div>
                <div className='aboutme-details'> 
                <p className='aboutme-education-date'
                    style={style.color}>
                        2019-2023
                </p>
                <p className='aboutme-education-degree'
                    style={style.color}>
                        BS in  Computer Science
                </p>
                <p className='aboutme-education-university'
                    style={style.color}>
                        AMA Computer College - Cavite
                </p>
                </div>
            </div>
            <div className='aboutme-education'>
                <div className='aboutme-diamond' style={style.bg}></div>
                <div className='aboutme-details'> 
                <p className='aboutme-education-date'
                    style={style.color}>
                        2017-2019
                </p>
                <p className='aboutme-education-degree'
                    style={style.color}>
                        TVL - ICT Programming
                </p>
                <p className='aboutme-education-university'
                    style={style.color}>
                        AMA Computer College - Cavite
                </p>
                </div>
            </div>
        </div>                
        </>
    )
}