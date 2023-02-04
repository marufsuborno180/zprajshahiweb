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
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import TabTittle from '../components/TabTittle'
import Iframe from 'react-iframe'

function NoticView() {
    const [mainData, setMainData] = useState(MainAPI.notice)
    const { id } = useParams()
    const updatedList = mainData.filter(e => {
        return e.id === id
    })
    TabTittle(`নোটিশ | ${updatedList[0].tittle}`)
    return (
        <>
            <div className="contaier">
                <TopHeader />
                <Slider />
                <NavBar />
                <div className="mainContentPart">
                    <div className='colam'>
                        <div className="pageTittle">
                            <h2><Link to="/" >Hme</Link>/<Link to="/notice" >Notice</Link>/Details</h2>
                        </div>
                        <div className="tittle">
                            <h1>{updatedList[0].tittle}</h1>
                        </div>
                        <div className="content">
                            <Iframe url={window.location.origin+"/"+updatedList[0].pdfURL} width='100%' id='iframe' height='900'/>
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

export default NoticView
