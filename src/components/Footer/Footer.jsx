import React from 'react'
import './Footer.css'
import back_image from '../../assets/Footer/back-image.jpeg'
import footer_main from '../../assets/Footer/footer-main.webp'
import course_1 from '../../assets/Footer/node.webp'
import course_2 from '../../assets/Footer/shutterstock.webp'

const Footer = () => {
    return (
        <div className='footer-main'>
            <div className="back_image">
                <img src={back_image} alt="" />
                <div className="back-image-overlay">
                    <div className="image-overlay-content">
                        <div className="footer-heading">
                            <p>It’s time to start investing in yourself</p>
                        </div>
                        <div className="footer-main-image">
                            <img src={footer_main} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-text-container">
                <div className="about">
                    <p className='footer-text-heading'>ABOUT</p>
                    <p>Ezitech Institute provides a platform for newcomers to launch their IT and freelancing careers. Our emphasis on practical information technology courses that are career and work oriented makes us the top computer institute in Rawalpindi, Islamabad, Pakistan.</p>
                </div>
                <div className="popular-courses">
                    <p className='footer-text-heading'>POPULAR COURSES</p>
                    <div className="courses-box">
                        <div className="course-box-card">
                            <img src={course_1} alt="" />
                            <div className="course-card-text">
                                <p style={{ fontWeight: '700' }}>Online Arbitrage Mastermind 2.0 [R...</p>
                                <p style={{ color: "#A58A97" }}>By Husnain Ali</p>
                            </div>
                        </div>
                        <div className="course-box-card">
                            <img src={course_2} alt="" />
                            <div className="course-card-text">
                                <p style={{ fontWeight: '700' }}>The Complete Bootcamp 2024: Node.js...</p>
                                <p style={{ color: "#A58A97" }}>By Ezitech</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Pages">
                    <p className='footer-text-heading'>PAGES</p>
                    <ul>
                        <li style={{listStylePosition:'inside'}}>BLOG</li>
                        <li style={{listStylePosition:'inside'}}>EZICODING</li>
                        <li style={{listStylePosition:'inside'}}>INTERNSHIP</li>
                        <li style={{listStylePosition:'inside'}}>OUR COURSES</li>
                    </ul>
                </div>
                <div className="contact">
                    <p className='footer-text-heading'>CONTACT</p>
                    <div className="contact-items">
                        <i><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
                            <path fill="#2575ED" d="M16 3.5A7.5 7.5 0 0 0 8.5 11c0 4.143 7.5 18.12 7.5 18.12S23.5 15.144 23.5 11A7.5 7.5 0 0 0 16 3.5m0 11.084a3.583 3.583 0 1 1 0-7.168a3.583 3.583 0 1 1 0 7.168" />
                        </svg></i>
                        <p>Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi, Punjab 46000</p>
                    </div>
                    <div className="contact-items">
                        <i><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="#2575ED" d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317" />
                        </svg></i>
                        <p>+923455555396</p>
                    </div>
                    <div className="contact-items">
                        <i><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="#2575ED" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44" />
                        </svg></i>
                        <p>info@ezitech.org</p>
                    </div>
                </div>
            </div>
            <div className="copyrights">
                <div className="copyrights-text">
                    Copyright © 2024 Ezitech Institute | Design & Develop by Eziline Software House
                </div>
                <div className="icons">
                    <i>+</i>
                    <i>+</i>
                    <i>+</i>
                </div>
            </div>
        </div>
    )
}

export default Footer