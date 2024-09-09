import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav-bar.css'
import logo from '../../assets/white-logo.png'
import logo_1 from '../../assets/blue-logo.png'

const Nav_bar = () => {
    return (
        <div className='nav-main'>
            <div className="nav-content">
                <div className="logo">
                    <img className='logo-1' src={logo} alt="" />
                    <img className='logo-2' src={logo_1} alt="" />
                </div>
                <div className="Links">
                    <ul>
                        <li><NavLink to='#'>Home</NavLink></li>
                        <li><NavLink to='#'>About us</NavLink></li>
                        <li><NavLink to='#'>Certifications</NavLink></li>
                        <li><NavLink to='#'>careers</NavLink></li>
                        <li><NavLink to='#'>Seminars</NavLink></li>
                        <li><NavLink to='#'>Tech Blogs</NavLink></li>
                        <li><NavLink to='#'>Iportal login</NavLink></li>
                    </ul>
                </div>
                <div className='fav-srch'>
                    <i>+</i>
                    <i>+</i>
                    <i>+</i>
                </div>
                <div className="menu">
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="2.5em" viewBox="0 0 24 24">
                            <g fill="none">
                                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                <path fill="#3275DB" d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z" />
                            </g>
                        </svg>
                    </i>
                </div>
            </div>
        </div>
    )
}

export default Nav_bar