import React from "react";

export function RelatedProjects() {
    return(
        <>
            <span className='container-relatedprojects'>
            <div className="ds-block-01">
                    <div className='design-arrow'>
                        <p className="design-d01">•</p>
                        <p className="design-d02">•</p>
                        <p className="design-d03">•</p>
                        </div> 
                    <p>Related Projects</p>
                </div>
                <div>
                    <ul>
                        <li>
                            <div className='container-project'></div>
                        </li>

                        <li>
                            <div className='container-project'></div>
                        </li>
                        <li>
                            <div className='container-project'></div>
                        </li>
                    </ul>
                </div>
            </span>
        </>
    )
}