import React from "react";

const Hero = ({children}) => {
    return (
        <>
            <div className="hero">
                {children}
                <div className="hero-inner">
                    <h1>The Better You</h1>
                </div>
            </div>
        </>
    );
}

export default Hero;