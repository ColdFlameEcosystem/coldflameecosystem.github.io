import React from "react";

const Footer = () => {
    return (
        <>
            <div className="footer bg-dark text-white p-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="full">
                                <div className="footer_logo">
                                    <a href="index.html"><img src="/coldflameos.png" style={{ height: '50px', width: 'auto' }} alt="#" /></a>
                                </div>
                                <br/>
                                <div className="footer_menu">
                                        <a className={'d-block text-white'} href="about.html">About</a>
                                        <a className={'d-block text-white'} href="contact.html">Contact Us</a>
                                        <a className={'d-block text-white'} href="privacy_policy.html">Privacy Policy</a>
                                        <a className={'d-block text-white'} href="terms_and_conditions.html">Terms & Conditions</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="full">
                                <div className="footer_blog full white_fonts">
                                    <h3>Blog</h3>
                                    <br/>
                                        <a className={'d-block text-white'} href="blog.html">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                        <a className={'d-block text-white'} href="blog.html">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                        <a className={'d-block text-white'} href="blog.html">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="full">
                                <div className="footer_blog full white_fonts">
                                    <h3>Team ColdFlame OS</h3>
                                    <br/>
                                    Website Contributor - <a target={'__blank'} href="https://github.com/coder-examples">Aayush Shah</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;