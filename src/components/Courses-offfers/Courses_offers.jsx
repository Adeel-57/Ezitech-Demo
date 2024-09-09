import React from 'react'
import './Courses_offers.css'
import course_1 from '../../assets/offers/ads.jpg'
import course_2 from '../../assets/offers/app-tips.webp'
import course_3 from '../../assets/offers/copywriter.webp'
import course_4 from '../../assets/offers/digital-marketing.webp'
import course_5 from '../../assets/offers/fiverr.webp'
import course_6 from '../../assets/offers/javascript.webp'
import course_7 from '../../assets/offers/linkedin.webp'
import course_8 from '../../assets/offers/node.webp'
import course_9 from '../../assets/offers/Seo.jpg'
import course_10 from '../../assets/offers/react.webp'

const Courses_offers = () => {
    return (
        <div className='courses-offer-main'>
            <div className="courses-offer-content">
                <div className="courses-offer-heading">
                    <p className='courses-offer-heading-main'>Limited-Time Summer Course Bundles!</p>
                    <p>Note : All these bundles have recorded luctures</p>
                </div>
                <div className="courses-offer-cards">
                    <div className="course-card">
                        <div className="course-card-header">
                            <p>Web Development Course with Industrial Projects</p>
                            <p style={{ fontWeight: 'initial' }}>4 Courses</p>
                        </div>
                        <div className="course-card-content">
                            <div className="content-box">
                                <div className="box-img">
                                    <img src={course_6} alt="" />
                                </div>
                                <p>From Novice to expert, The Complete JavaScript Course 2024</p>
                                <p className='price'>PKR7,600</p>
                            </div>
                            <div className="content-box">
                                <div className="box-img">
                                    <img src={course_10} alt="" />
                                </div>
                                <p>The Complete Guide to React (incl Hooks, React Router, Redux)</p>
                                <p className='price'>PKR8,000</p>
                            </div>
                            <div className="content-box">
                                <div className="box-img fiverr">
                                    <img src={course_5} alt="" />
                                </div>
                                <p>Sell Fiverr Gigs Like The Top 1% in Freelancing in 2024</p>
                                <p className='price'>PKR4,500</p>
                            </div>
                            <div className="content-box">
                                <div className="box-img">
                                    <img src={course_8} alt="" />
                                </div>
                                <p>The Complete Bootcamp 2024: Node.js, Express, MongoDB, and More</p>
                                <p className='price'>PKR13,000</p>
                            </div>
                        </div>
                        <div className="course-card-footer">PKR200000</div>
                    </div>
                    <div className="course-card">
                        <div className="course-card-header">
                            <p>Digital Marketin Mastery LEarn for the best</p>
                            <p style={{ fontWeight: 'initial' }}>6 Courses</p>
                        </div>
                        <div className="course-card-content">
                        <div className="content-box">
                                <div className="box-img">
                                    <img src={course_2} alt="" />
                                </div>
                                <p>Trip Advisor, Google My Business, and Local SEO</p>
                                <p className='price'>PKR5,000</p>
                            </div>
                            <div className="content-box">
                                <div className="box-img">
                                    <img src={course_1} alt="" />
                                </div>
                                <p>youTube ads and Google ads</p>
                                <p className='price'>PKR5,000</p>
                            </div>
                            <div className="content-box">
                                <div className="box-img">
                                    <img src={course_9} alt="" />
                                </div>
                                <p>Search Engine Optimization(SEO)</p>
                                <p className='price'>PKR6,000</p>
                            </div>
                            <div className="content-box">
                                <div className="box-img">
                                    <img src={course_4} alt="" />
                                </div>
                                <p>Advance Degital Marketing</p>
                                <p className='price'>PKR6,500</p>
                            </div>
                            <div className="content-box">
                                <div className="box-img">
                                    <img src={course_7} alt="" />
                                </div>
                                <p>Linkedin Orientation</p>
                                <p className='price'>PKR5,000</p>
                            </div>
                            <div className="content-box">
                                <div className="box-img">
                                    <img src={course_3} alt="" />
                                </div>
                                <p>Content Marketing & Copywriting</p>
                                <p className='price'>PKR5,000</p>
                            </div>
                        </div>
                        <div className="course-card-footer">PKR200000</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses_offers