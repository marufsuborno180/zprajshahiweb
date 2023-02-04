import React from 'react'
import { Link } from 'react-router-dom'

function MemberCard({tittle,img,reg}) {
    return (
        <>
            <div className="memderCard">
                <div className="tittle">{tittle}</div>
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="reg"><span>{reg}</span></div>
                <Link to="/discribe">বিস্তারিত</Link>
            </div>
        </>
    )
}

export default MemberCard
