import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header-box'>
        <div className='header-box-content'>
            <div className="links">
                <button>Login</button>
                <button>Register</button>
            </div>
            <div className="time">Mon - Fri 8.00 - 20.00</div>
            <div className="address">Westridge 1, Office #304-G Peshawar Road, Rawalpindi, Pakistan</div>
            <div className="contact">+92 3455555396</div>
        </div>
    </div>
  )
}

export default Header