import React from 'react'
import './AppDownload.css'
import phone_image from '../../assets/App-download/phone.webp'
import play_store_image from '../../assets/App-download/appstore.webp'
import appstore_image from '../../assets/App-download/Google-play.png'

const AppDownload = () => {
  return (
    <div className='app-main'>
        <div className="app-demo-image">
            <img src={phone_image} alt="" />
        </div>
        <div className="app-download">
            <div className="download-box-text">
                <p className='download-box-text-heading'>Learning <span style={{color:'#2575ED'}}>anytime</span> from anywhere</p>
                <p className='download-box-text-para'>Increase the mobility level with Eziline Technologies LMS App. Take your courses in your pocket and access them whenever you want
                     without any limits. Make your learning more engaging and productive using modern LMS app.</p>
            </div>
            <div className="download-box-images">
                <img src={appstore_image} alt="" />
                <img src={play_store_image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AppDownload