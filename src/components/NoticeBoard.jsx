import React from 'react'
import { Link } from 'react-router-dom'

function NoticeBoard({name}) {
  return (
    <>
      <div className="notice-board-bg">
        <h2>নোটিশ বোর্ড</h2>
        <div className="notice-board-ticker">
          <ul className='styleList'>
            <li>
              <a href="#">{name}</a>
            </li>
            <li>
              <a href="#">দরপত্র বিজ্ঞপ্তি নং-01-2022-2023 এর লোটারীর নোটিশ</a>
            </li>
            <li>
              <a href="#">দরপত্র বিজ্ঞপ্তি নং-০১-২০২২-২০২৩</a>
            </li>
            <li>
              <a href="#">গাছ বিক্রয়ের দরপত্র স্থগিত করণ বিজ্ঞপ্তি</a>
            </li>
            <li>
              <a href="#">দরপত্র বিজ্ঞপ্তি নং-০১-২০২২-২০২৩</a>
            </li>
          </ul>
          <Link class="btn right" to="/notice" title="সকল নোটিশ">সকল</Link>
        </div>
      </div>
    </>
  )
}

export default NoticeBoard
