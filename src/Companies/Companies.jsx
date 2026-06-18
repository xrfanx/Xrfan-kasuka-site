// import React from 'react'
import "./Companies.css"


export default function Companies({image = 'no-image.jpg'}) {
  return (
    <div>
        <div className="companyContainer">
            <img src={image} alt="company-img" className="companyImg" />
        </div>
    </div>
  )
}

