import React from 'react'
import { useState } from 'react'
import MainAPI from '../assets/APIs/mainApi'

function EsLinks() {
    const [mainData,setMainData] = useState(MainAPI)
    return (
        <>
            <div className="esLinks">
                <div className="card">
                    <div className="tittle">গুরুত্বপূর্ণ লিংক</div>
                    <ul className='styleList'>
                        {
                           mainData.esLinks.map(e=>{
                               const {name, link} = e
                            return(
                                <>
                                 <li><a href={link} target="_blank" rel="noopener noreferrer">{name}</a></li>
                                </>
                            )
                           })
                        }
                       
                    </ul>
                </div>
            </div>
        </>
    )
}

export default EsLinks
