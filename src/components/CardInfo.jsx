import React from 'react'

function CardInfo({img}) {
    return (
        <>
            <div className="infoCard">
                <div className="tittle">
                    <h2>বিজ্ঞপ্তি</h2>
                </div>
                <div className="imgText">
                    <img src={img} alt="" />
                    <ul className='styleList'>
                        <li><a href="#">ডিপ্লোমা পর্যায়</a></li>
                        <li><a href="#">এইচ এস সি পর্যায়</a></li>
                        <li><a href="#">এস,এস,সি পর্যায়</a></li>
                        <li><a href="#">সল্প মেয়াদী ও অন্যান্য</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CardInfo