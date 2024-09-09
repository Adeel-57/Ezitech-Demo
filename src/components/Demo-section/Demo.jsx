import React from 'react'
import './Demo.css'
import demo_1 from '../../assets/Demo_1.png'
import demo_2 from '../../assets/Demo_2.png'
import demo_3 from '../../assets/Demo_3.png'

const Demo = () => {
  return (
    <div className='demo-main'>
        <div className="demo-content">
            <div className="demo-text">How it works</div>
            <div className="demo-images">
                <img src={demo_1} alt="" />
                <img src={demo_2} alt="" />
                <img src={demo_3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Demo