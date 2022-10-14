import React from "react";
import './Carousel.css';

const Carousel = () => {
    return (
        <>
            <div style={{ minHeight: '50vh', width: '100%' }}>
                <div className="py-5 service-11">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 wrap-service11-box">
                                <div className="card card-shadow border-0 mb-4">
                                    <div className="p-4">
                                        <div className="icon-space">
                                            <div
                                                className="icon-round text-center d-inline-block rounded-circle bg-success-gradiant">
                                                <i className="fa-duotone fa-forward-fast"></i>
                                            </div>
                                        </div>
                                        <h6 className="font-weight-medium">Speed</h6>
                                        <p className="mt-3">Gives you the speed of light that could match with your thoughts!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 wrap-service11-box">
                                <div className="card card-shadow border-0 mb-4">
                                    <div className="p-4">
                                        <div className="icon-space">
                                            <div
                                                className="icon-round text-center d-inline-block rounded-circle bg-success-gradiant">
                                                <i className="fa-duotone fa-bolt-lightning"></i>
                                            </div>
                                        </div>
                                        <h6 className="font-weight-medium">Power</h6>
                                        <p className="mt-3">You can relay on our amazing customizable features and get your own experience</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 wrap-service11-box">
                                <div className="card card-shadow border-0 mb-4">
                                    <div className="p-4">
                                        <div className="icon-space">
                                            <div
                                                className="icon-round text-center d-inline-block rounded-circle bg-success-gradiant">
                                                <i className="fa-duotone fa-paintbrush-pencil"></i>
                                            </div>
                                        </div>
                                        <h6 className="font-weight-medium">Looks</h6>
                                        <p className="mt-3">Looks all amazing as you would like it.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carousel;