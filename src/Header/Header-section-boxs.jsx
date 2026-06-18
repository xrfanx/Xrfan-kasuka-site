// import React from 'react'
import "./Header-section-boxs.css"

export default function HeaderSectionBoxs(props) {
  return (
    <div>
        <div className="boxsContainer"> 
            <div className="boxsContainerSvg">
              {props.boxsContainerSvg}
            </div>
            
            <p className="boxsContainerTxt">{props.boxsContainerTxt}</p>
        </div>
    </div>
  )
}
