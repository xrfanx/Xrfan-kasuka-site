// import React from 'react'
import Companies from "./Companies"
import "./Company.css"

export default function Company() {
  return (
    <div>
        <div className="companiesContainer">
        <Companies image = 'company1.jpg'></Companies>
        <Companies image = 'company2.jpg'></Companies>
        <Companies image = 'company3.jpg'></Companies>
        <Companies image = 'company4.jpg'></Companies>
        <Companies image = 'company5.jpg'></Companies>
        </div>
    </div>
  )
}
