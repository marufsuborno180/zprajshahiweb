import React from 'react'
import TopHeader from '../components/TopHeader'
import Slider from '../components/Slider'
import NavBar from '../components/NavBar'
import CardInfo from '../components/CardInfo'
import MemberCard from '../components/MemberCard'
import AudioComp from '../components/AudioComp'
import EsLinks from '../components/EsLinks'
import Footer from '../components/Footer'
// Images
import infoImg from "../assets/img/apa_cab.png"
import ch_img from '../assets/img/chairman-sir1.webp'
import pnk_img from '../assets/img/reza_hasan.webp'
import MainAPI from '../assets/APIs/mainApi'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import img1 from "../assets/img/2.webp"
import TabTittle from '../components/TabTittle'

function History() {
    const [mainData, setMainData] = useState(MainAPI)
    TabTittle(`ইতিহাস | ${mainData.history[0].tittle}`)
    return (
        <>
            <div className="contaier">
                <TopHeader />
                <Slider />
                <NavBar />
                <div className="mainContentPart">
                    <div className='colam'>
                        <div className="pageTittle">
                            <h2><Link to="/" >Hme</Link>/History</h2>
                        </div>
                        <div className="content history">
                            <h1 className='history-tittle'> ১। {mainData.history[0].tittle}</h1>
                            <p>{mainData.history[0].para1}</p>
                            <br />
                            <img src={img1} alt="" className="full_img" />
                            <br />
                            <br />
                            <p>{mainData.history[0].para2}</p>
                            <br />
                            <p>{mainData.history[0].para3}</p>
                            <br />
                            <p>{mainData.history[0].para4}</p>
                            <br />
                            <p>{mainData.history[0].para5}</p>
                            <br />
                            <p>{mainData.history[0].para6}</p>
                            <br />
                            <p>{mainData.history[0].para7}</p>

                        </div>
                    </div>
                    <div className='colam'>
                        <div className="memberBox">
                            <MemberCard tittle={'চেয়ারম্যান'} img={ch_img} reg={'বীর মুক্তিোদ্ধা মীর ইকবাল'} />
                            <MemberCard tittle={'প্রধান নির্বাহী কর্মকর্তা'} img={pnk_img} reg={'মুঃ রেজা হাসান'} />
                        </div>
                        <AudioComp tittle={'জাতীয় সংগীত'} />
                        <EsLinks />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default History
