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
import printImg from '../assets/img/print_btn.png'
import MainAPI from '../assets/APIs/mainApi'
import { useState } from 'react'
import TabTittle from '../components/TabTittle'

function Citigen() {
    const [mainData, setMainData] = useState(MainAPI);
    TabTittle('সিটিজেন চার্টার | জেলা পরিষদ, রাজশাহী।')
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
                            <div className="tittle"><h1>সিটিজেন চার্টার</h1> <button title='print'><img src={printImg} alt="" /></button></div>
                            {/* <table >
                                <tr className='header'>
                                    <th>ক্রমিক</th>
                                    <th>সেবার নাম</th>
                                    <th>সেবা প্রদানে সর্বোচ্চ সময়</th>
                                    <th>প্রয়োজনীয় কাগজপত্র</th>
                                    <th>প্রয়োজনীয় কাগজপত্র/আবেদন ফরম প্রাপ্তির স্থান</th>
                                    <th>সেবা মূল্য এবং পরিশোধ পদ্ধতি (যদি থাকে)</th>
                                    <th>শাখার নামসহ দায়িত্বপ্রাপ্ত কর্মকর্তার পদবি, রুম নম্বর, জেলা/উপজেলার কোড, অফিসিয়াল টেলিফোন ওই মেইল</th>
                                    <th>উর্দ্ধতন কর্মকর্তার পদবি, রুম নম্বর, জেলা/উপজেলার কোড,অফিসিয়াল টেলিফোন ও ইমেইল</th>
                                </tr>
                                {
                                    mainData.Survices.map((e, i) => {
                                        const { name, highTime, documents, place, technic, sector, contact } = e
                                        return (
                                            <>
                                                <tr>
                                                    <td>{i}</td>
                                                    <td>{name}</td>
                                                    <td>{highTime}</td>
                                                    <td>
                                                        <ol>
                                                            {documents.map(e => {
                                                                return (
                                                                    <>
                                                                        <li>{e}</li>
                                                                    </>
                                                                )
                                                            })}
                                                        </ol>
                                                    </td>
                                                    <td>{place}</td>
                                                    <td>{technic}</td>
                                                    <td>{sector}</td>
                                                    <td>{contact}</td>
                                                </tr>

                                            </>
                                        )

                                    })
                                }
                            </table> */}
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

export default Citigen
