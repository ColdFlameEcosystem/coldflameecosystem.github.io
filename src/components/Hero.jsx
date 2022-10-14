import React from "react";

const Hero = ({children}) => {
    return (
        <>
            <div className="hero">
                {children}
                <div className="hero-inner">
                    <h1>Your tech, but <span className={'stylize'}><em>better</em></span></h1>
                </div>
                <div className="hero-inner">
                    <button onClick={() => alert('It is in development')} className={'btn btn-success'} style={{ fontSize: '125%' }}>Download Now!</button>
                </div>
            </div>
        </>
    );
}

export default Hero;