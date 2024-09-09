import React from 'react'
import './InternShips.css'
import header_bakg from '../../assets/Internships/header-background.webp'

const InternShipCard = ({ image, heading }) => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="header-overlay">
                        <img src={header_bakg} alt="" />
                    </div>
                    <div className='header-content'>
                        <div className="header-content-items">
                            <div className="card-header-text">
                                <p style={{ fontSize: '1.5em', fontWeight: '500', color: 'white' }}>{heading}</p>
                                <p>Ezitech Institute</p>
                            </div>
                            <div className="card-header-image">
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="card-body-items">
                        <i><svg aria-hidden="true" class="e-font-icon-svg e-fas-user-tie" width={12} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path></svg></i>
                        <p>Employment -</p>
                        <p className='body-para'>Hybrid</p>
                    </div>
                    <div className="card-body-items">
                        <i><svg aria-hidden="true" class="e-font-icon-svg e-fas-location-arrow" width={12} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path></svg></i>
                        <p>Location -</p>
                        <p className='body-para'>Rawalpindi</p>
                    </div>
                    <div className="card-body-items">
                        <i><svg aria-hidden="true" class="e-font-icon-svg e-fas-shopping-bag" width={12} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path></svg></i>
                        <p>Jobe Type -</p>
                        <p className='body-para'>Full-Time</p>
                        <p className='body-para'>Part-Time</p>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="btn">Read More</div>
                </div>
            </div>
        </>
    )
}

export default InternShipCard