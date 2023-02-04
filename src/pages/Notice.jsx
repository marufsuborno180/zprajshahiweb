import React from 'react'
import { Link } from 'react-router-dom'
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
import printImg from '../assets/img/print_btn.webp'
import MainAPI from '../assets/APIs/mainApi'
import { useState } from 'react'
import TabTittle from '../components/TabTittle'

function Notice() {
    const [mainData, setMainData] = useState(MainAPI);
    TabTittle('নোটিশ | জেলা পরিষদ, রাজশাহী।')
    return (
        <>
            <div className="contaier">
                <TopHeader />
                <Slider />
                <NavBar />
                <div className="mainContentPart">
                    <div className='colam'>
                        <div className="pageTittle">
                            <h2><Link to="/" >Hme</Link>/Notice</h2>
                        </div>
                        <div className="newcContent">
                            <div className="tittle"><h1>নোটিশ</h1> <button title='print'><img src={printImg} alt="" /></button></div>
                            <table >
                                <tr className='header'>
                                    <th>ক্রমিক</th>
                                    <th>শিরোনাম</th>
                                    <th>প্রকাশের তারিখ</th>
                                    <th>ডাউনলোড</th>
                                </tr>
                                {
                                    mainData.notice.map((e, i) => {
                                        const {tittle, date, id, pdfURL } = e
                                        return (
                                            <>
                                                <tr>
                                                    <td className='text-center'>{i}</td>
                                                    <td><Link to={`/notice/details/${id}`}>{tittle}</Link></td>
                                                    <td className='date text-center'>{date}</td>
                                                    <td className='text-center download'><a href={pdfURL} download>ডাউনলোড</a></td>
                                                </tr>

                                            </>
                                        )

                                    })
                                }
                            </table>
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

export default Notice
