import React from 'react'
import './InternShips.css'
import image_1 from '../../assets/Internships/Html-Css.png'
import image_2 from '../../assets/Internships/graphic-designing.png'
import image_3 from '../../assets/Internships/digital-marketing.png'
import image_4 from '../../assets/Internships/flutter-development.png'
import image_5 from '../../assets/Internships/machine-learning.png'
import image_6 from '../../assets/Internships/MERN-development.png'
import InternShipCard from './InternShipCard'


const InternShips = () => {
    return (
        <div className='intern-main'>
            <div className="intern-content">
                <div className="intern-heading">
                    <p style={{ fontSize: '2em', fontWeight: 'bold' }}>Perfect Internships For You</p>
                </div>
                <div className="intern-cards">
                    <InternShipCard image={image_1} heading={'HTML & CSS Javascript'} />
                    <InternShipCard image={image_2} heading={'GRAPHIC DESIGNING'} />
                    <InternShipCard image={image_3} heading={'DIGITAL MARKETING'} />
                    <InternShipCard image={image_4} heading={'FLUTTER Development'} />
                    <InternShipCard image={image_5} heading={'MACHINE LEARNING'} />
                    <InternShipCard image={image_6} heading={'MERN Development'} />
                </div>
                <div className="card-footer">
                    <div className="btn">Read More</div>
                </div>
            </div>
        </div>
    )
}

export default InternShips