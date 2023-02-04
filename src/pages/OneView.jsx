import React from 'react'
import MainAPI from '../assets/APIs/mainApi'
import TopHeader from '../components/TopHeader'
import Slider from '../components/Slider'
import NavBar from '../components/NavBar'
import MemberCard from '../components/MemberCard'
import ch_img from '../assets/img/chairman-sir1.webp'
import pnk_img from '../assets/img/reza_hasan.webp'
import AudioComp from '../components/AudioComp'
import EsLinks from '../components/EsLinks'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import TabTittle from '../components/TabTittle'
function OneView() {
    TabTittle("এক নজরে জেলা পরিষদ")
    const [mainData, setMainData] = useState(MainAPI)
    return (
        <>
            <div className="contaier">
                <TopHeader />
                <Slider />
                <NavBar />
                <div className="mainContentPart">
                    <div className="colam">
                        <div className="pageTittle">
                            <h2><Link to="/" >Hme</Link>/View</h2>
                        </div>
                        <div className="tittle">
                            <h1>এক নজরে জেলা পরিষদ</h1>
                        </div>
                        <table className='table'>
                            {
                                mainData.oneView.map((e, i) => {
                                    const {name,value} = e
                                    return(
                                        <>
                                        <tr>
                                        <td className='text-center'>{i}</td>
                                        <td className='text-center'>{name}</td>
                                        <td className='text-center w-40'>{value}</td>
                                    </tr>
                                        </>
                                    )
                                })
                            }
                        </table>
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
            </div>
        </>
    )
}

export default OneView