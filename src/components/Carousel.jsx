import React from "react";

const Carousel = ({ slides }) => {
    return (
        <>
            <div style={{ height: '100vh', width: '100%' }}>
                {
                    slides.map((slide, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100%',
                                    height: '70%',
                                    display: 'none'
                                }}
                            >
                                <h1>{slide.title}</h1>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}

export default Carousel;