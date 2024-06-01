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
                    I always love creating things. So when I first discovered 
            </p>
        </div>
        </>
    )
}