import "./Header-nav.css"
// import React from 'react'

export default function HeaderNav() {
  return (
    <div>
        <div className="navContainer">
            <button className="navStartButton">شروع</button>
            <ul className="navMenus">
                <li className="navMenu" id="navMenu1">خانه</li>
                <li className="navMenu" id="navMenu2">درباره ما</li>
                <li className="navMenu" id="navMenu3">خدمات</li>
                <li className="navMenu" id="navMenu4">نمونه کارها</li>
                <li className="navMenu" id="navMenu5">تیم</li>
                <li className="navMenu" id="navMenu6">لیست کشویی<svg className="Menu6svg" width="20px" height="20px" viewBox="-1.6 -1.6 19.20 19.20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="gold" stroke-width="0.00016" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.82842 8.00003L12.4142 3.41424L9.58578 0.585815L2.17157 8.00003L9.58578 15.4142L12.4142 12.5858L7.82842 8.00003Z" fill="currentColor"></path> </g></svg>
                </li>
                <li className="navMenu" id="navMenu7">تماس با ما</li>
            </ul>
            <div className="navLogo">
              <div className="navLogofirstpart">Xr</div>
              <div className="navLogolastpart">fan</div></div>
            
        </div>

        <ul className="navMenu6items">
          <li className="navMenuItem navMenu1item">پنل ادمین</li>
          <li className="navMenuItem navMenu2item">دیتابیس</li>
          <li className="navMenuItem navMenu3item">کاربران  VIP</li>
          <li className="navMenuItem navMenu4item">ایونت ها <svg className="Menu6svg Menu6Menu4svg" width="20px" height="20px" viewBox="-1.6 -1.6 19.20 19.20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="gold" stroke-width="0.00016" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.82842 8.00003L12.4142 3.41424L9.58578 0.585815L2.17157 8.00003L9.58578 15.4142L12.4142 12.5858L7.82842 8.00003Z" fill="currentColor"></path> </g></svg>
          </li>
          <li className="navMenu5item">Bootcamps</li>
        </ul>

    </div>


  )
}

// let navMenu6 = document.querySelector("#navMenu6")
// let navMenu6items = document.querySelector(".navMenu6items")

// navMenu6.addEventListener('mouseenter', () => {
//   navMenu6items.style.visibility = 'visible'
//   navMenu6items.style.height = '12rem'

// })
// navMenu6.addEventListener('mouseleave', () => {
//   setTimeout(() => {
//     navMenu6items.style.visibility = 'visible'
//   }, 300);
// })

// navMenu6items.addEventListener('mouseenter', () => {
//   navMenu6items.style.visibility = 'visible'
//   navMenu6items.style.height = '12rem'
// })