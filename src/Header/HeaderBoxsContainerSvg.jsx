// import React from 'react'
import "./HeaderBoxsContainerSvg.css"
import { MdOutlineLocalOffer } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { RiUserSharedLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";

export function HeaderBoxsContainerSvgsugestion() {
  return (
    <div>
      <MdOutlineLocalOffer className="svg"/>
    </div>
  )
}


export function HeaderBoxsContainerSvgUsers() {
  return (
    <div>
      <LuUsers className="svg"/>
    </div>
  )
}

export function HeaderBoxsContainerSvgManage() {
  return (
    <div>
      <RiUserSharedLine className="svg" />
    </div>
  )
}
export function HeaderBoxsContainerSvgPreview() {
  return (
    <div>
      <FaRegEye className="svg"/>
    </div>
  )
}
export function HeaderBoxsContainerSvgHome() {
  return (
    <div>
      <MdOutlineHome className="svg" />
    </div>
  )
}




