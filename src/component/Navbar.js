"use client"
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const item = useSelector((state)=>state.cart)
  return (
    <div style={{display:'flex' , alignItems:'center',justifyContent:"space-between"}}>
       <span>Redux Nextjs- 13.5</span>
       <div>
        <Link className='navLink' style={{fontWeight:"bolder"}} href={"/"}>Home</Link>
        <Link className='navLink' style={{fontWeight:"bolder",marginRight:"7px"}} href={"/cart"}>Cart</Link>
       <span style={{fontWeight:"bolder"}}>item:{item.length}</span>
       </div>
    </div>
  )
}
