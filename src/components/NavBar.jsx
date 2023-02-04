import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import homeImg from '../assets/img/home_dark.png'

function NavBar() {
    const toggleBTN = () =>{
        const nav = document.querySelector('.mainHeader nav')
        nav.classList.toggle('active')
    }
    return (
        <>
            <div className="mainHeader">
                <nav >
                    <div className="toggle_btn">
                        <button id='toggleBTN' onClick={toggleBTN}>|||</button>
                    </div>
                    <ul>
                        <li>
                            <Link to="/">
                                <img src={homeImg} alt="" />
                            </Link>
                        </li>
                        <li className='orange'>আমাদের সম্পর্কে
                        <div className="subMenu">
                            <ul>
                                <li><Link to="/history">জেলা পরিষদের ইতিহাস</Link></li>
                                <li><Link to="/letsView">এক নজরে জেলা পরিষদ</Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className='red'><NavLink to="/notice">নোটিস</NavLink></li>
                        <li className='blue'><NavLink to="/citigen">সিটিজেন চার্টার</NavLink></li>
                        <li className='green'><NavLink to="/member">সংরক্ষিত ও সাধারণ সদস্য</NavLink></li>
                        <li className='tomato'><NavLink to="/kmkc">কর্মকর্তা ও কর্মচারীর তথ্য</NavLink></li>
                        <li className='slateblue'><a href="">আইন বিধিমালা</a></li>
                        <li className='teal end'>অন্যান্য
                        <div className="subMenu">
                            <ul>
                                <li><Link to="#">ফটো গ্যালারী</Link></li>
                                <li><Link to="#">জেলা পরিষদ অর্গানোগ্রাম</Link></li>
                                <li><Link to="#">বাজেট</Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar
