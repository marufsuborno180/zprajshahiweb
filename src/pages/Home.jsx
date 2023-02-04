import React from 'react'
import TopHeader from '../components/TopHeader'
import Slider from '../components/Slider'
import NavBar from '../components/NavBar'
import MemberCard from '../components/MemberCard'
import ch_img from '../assets/img/chairman-sir1.webp'
import pnk_img from '../assets/img/reza_hasan.webp'
import NoticeBoard from '../components/NoticeBoard'
import EsLinks from '../components/EsLinks'
import Footer from '../components/Footer'
import CardInfo from '../components/CardInfo'
import infoImg from "../assets/img/apa_cab.png"
import AudioComp from '../components/AudioComp'
import NewsShot from '../components/NewsShot'
import TabTittle from '../components/TabTittle'
function Home() {
  TabTittle("জেলা পরিষদ, রাজশাহী।")

  return (
    <>
      <div className="contaier">
        <TopHeader />
        <Slider />
        <NavBar />
        <div className="mainContentPart">
          <div className='colam'>
            <marquee behavior="smooth" direction="" className="mb-2 marqeeText" >
              স্বাগতম জেলা পরিষদ, রাজশাহী এর Web Site-এ । ইমেইলঃ info@zprajshahi.org
            </marquee>
            <div className="NewsShortBox">
              <NewsShot/>
            </div>
            <div className="notifactionPart">
              <NoticeBoard name={"cxvxg"}/>
            </div>
            <div className="InfoCardsPart">
              <CardInfo img={infoImg} />
              <CardInfo />
              <CardInfo />
              <CardInfo />
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

export default Home