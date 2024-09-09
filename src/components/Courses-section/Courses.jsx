import React from 'react'
import './Courses.css'
import c_1 from '../../assets/Course-artificial-intelligence.png'
import c_2 from '../../assets/Course-blockchain.png'
import c_3 from '../../assets/Course-amazon.png'
import c_4 from '../../assets/Course-Cybersecurity.png'
import c_5 from '../../assets/Course-Development.png'
import c_6 from '../../assets/Course-Designing.png'
import c_7 from '../../assets/Course-Gaming.png'
import c_8 from '../../assets/Course-Architecture.png'
import c_9 from '../../assets/Course-IOS_AND.png'
import c_10 from '../../assets/Course-Marketing.png'
import c_11 from '../../assets/Course-3d.png'
import c_12 from '../../assets/Course-animation.png'

const Courses = () => {
  return (
    <div className='courses-main'>
        <div className="courses-content">
            <div className="course-box">
                <img src={c_1} alt="" />
                <p>ML & AI</p>
            </div>
            <div className="course-box">
                <img src={c_2} alt="" />
                <p>Block Chain</p>
            </div>
            <div className="course-box">
                <img src={c_3} alt="" />
                <p>Amazon</p>
            </div>
            <div className="course-box">
                <img src={c_4} alt="" />
                <p>Cyber Security</p>
            </div>
            <div className="course-box">
                <img src={c_5} alt="" />
                <p>Development</p>
            </div>
            <div className="course-box">
                <img src={c_6} alt="" />
                <p>Designing</p>
            </div>
            <div className="course-box">
                <img src={c_7} alt="" />
                <p>Gaming</p>
            </div>
            <div className="course-box">
                <img src={c_8} alt="" />
                <p>Architecture</p>
            </div>
            <div className="course-box">
                <img src={c_9} alt="" />
                <p>IOS & AND</p>
            </div>
            <div className="course-box">
                <img src={c_10} alt="" />
                <p>Marketing</p>
            </div>
            <div className="course-box">
                <img src={c_11} alt="" />
                <p>3D</p>
            </div>
            <div className="course-box">
                <img src={c_12} alt="" />
                <p>Animation</p>
            </div>
        </div>
    </div>
  )
}

export default Courses