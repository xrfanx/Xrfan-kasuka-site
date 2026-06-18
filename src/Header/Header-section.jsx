import "./Header-section.css"
import HeaderSectionBoxs from "./Header-section-boxs"
import {
  HeaderBoxsContainerSvgsugestion,
  HeaderBoxsContainerSvgUsers,
  HeaderBoxsContainerSvgManage,
  HeaderBoxsContainerSvgPreview,
  HeaderBoxsContainerSvgHome
} from "./HeaderBoxsContainerSvg";
// import React from 'react'

export default function HeaderSection() {
  return (
    <div>
        <div className="HeaderSectionContainer">
            <div className="headerNavBackgroundimg">
              <div className="headerH1">
                <h1 className="hraderH1firstpart">ما ایده ها را به </h1>
                <h1 className="hraderH1secoundpart">کد </h1>
                <h1 className="hraderH1lastpart">تبدیل میکنیم </h1> 
              </div>
              <div className="headerH2">آماده برای ساخت اپلیکیشن، وب‌سایت و نرم‌افزارهای سفارشی</div>     
              <div className="headerH2 headerH22">توسط تیمی از برنامه نویسان متهد و خلاق</div>     
            </div>
            <div className="HeaderSectionBoxs">
              <HeaderSectionBoxs boxsContainerTxt = "پیشنهادات" boxsContainerSvg = {HeaderBoxsContainerSvgsugestion()}/>
              <HeaderSectionBoxs boxsContainerTxt = "کاربران" boxsContainerSvg = {HeaderBoxsContainerSvgUsers()}/>
              <HeaderSectionBoxs boxsContainerTxt = "مدیریت" boxsContainerSvg = {HeaderBoxsContainerSvgManage()}/>
              <HeaderSectionBoxs boxsContainerTxt = "پیش نمایش" boxsContainerSvg = {HeaderBoxsContainerSvgPreview()}/>
              <HeaderSectionBoxs boxsContainerTxt = "صفحه اصلی" boxsContainerSvg = {HeaderBoxsContainerSvgHome()}/>
            </div>

            
        </div>
        
    </div>
  )
}
