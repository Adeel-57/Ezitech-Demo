import React from 'react'
import Nav_bar from '../Nav-bar/Nav-bar'
import './Hero.css'
import back_img from '../../assets/hero_bag.jpg'
import logo_1 from '../../assets/EZIBLOGS.png'
import logo_2 from '../../assets/EZIPOS.png'
import logo_3 from '../../assets/EZICODING.png'

const Hero = () => {
    return (
        <div className='hero-main'>
            <Nav_bar />
            <div style={{position:'relative', display:'flex'}}>
            <div className='img-over'></div>
            <img src={back_img} alt="" />
            <div className="hero-content">
                <div>
                    <div className="content-main-text">
                        <p>Learn the fundamentals with our</p>
                        <p>Experts in &nbsp;&nbsp;&nbsp;&nbsp;<span>Programming</span></p>
                    </div>
                    <h4>Utilize effective Learning to Reach Your Potential</h4>
                    <div className="input"><input type="text" name="" id="search" placeholder='Search courses...' /><i><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="none" stroke="#a2a2a2" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" />
                    </svg></i>
                    </div>
                    <div className="hero-text">
                        <h4>Explore our more useful products</h4>
                        <i><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="white" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z" />
                        </svg></i>
                    </div>
                    <div className="content-logos">
                        <div className="logo-1">
                            <img src={logo_1} alt="" />
                        </div>
                        <div className="logo-2">
                            <img src={logo_2} alt="" />
                        </div>
                        {/* <div> */}
                            <div className="logo-3">
                                <img src={logo_3} alt="" />
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            </div>
            {/* <Nav_bar /> */}
        </div>
    )
}

export default Hero