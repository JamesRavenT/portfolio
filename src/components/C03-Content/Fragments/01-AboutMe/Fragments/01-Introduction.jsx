import React from "react";

export function Introduction(pkg) {
    const style = pkg.theme
    return(
        <>
        <div className='aboutme-container'>
            <p className='aboutme-header'
                style={style.color}>
                    Hello World!
            </p>
            <p className='aboutme-text'
                style={style.color}>
                    This iconic phrase, universally known among programmers, holds a special place in my heart as it marks the beginning of my coding journey.
                    <br/>
                    <br/>
                    It all began during my second year in junior high.
                    My eyes lit up when I saw how webpages are made as my teacher explains about the different HTML syntaxes. 
                    Ever since then, I started to delve in the world of coding. Eventually taking a degree in Computer Science. 
                    <br/>
                    <br/>
                    Throughout the years, I've utilized personal projects as a means to improve my skills. At times, I apply these abilities to create gifts for my friends during special occassions. As a result, I've acquired the capability to develop softwares across various platforms such as desktop, mobile, and websites.
                    <br/>
                    <br/>
                    What I find most gratifying about programming is the fusion of creativity and problem-solving it demands. 
                    This perpetual challenge fuels my love for the field. I'm also eager to delve into the realms of machine learning and artificial intelligence to create my very own Jarvis-like AI.

            </p>
        </div>
        </>
    )
}