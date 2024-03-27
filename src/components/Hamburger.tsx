"use client"

import React from 'react'
import {useState, useEffect} from 'react'

const Hamburger = () => {

    const [active,setActive] = useState(false)

  return (
    <div className="md:hidden">
    <button onClick={()=>setActive(!active)} id='menu-btn' className={`z-40 block hamburger md:hidden focus:outline-none  ${active && 'open' }`}>
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button>

    {/* Mobile Menu */}
    <div id="menu" className={`absolute top-0 bottom-0 left-0 flex flex-col self-end  w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black ${!active && 'hidden'}`}>
        <a href="#" className='hover:text-pink-500'>About</a>
        <a href="#" className='hover:text-pink-500'>Careers</a>
        <a href="#" className='hover:text-pink-500'>Products</a>
        <a href="#" className='hover:text-pink-500'>Events</a>
        <a href="#" className='hover:text-pink-500'>Contact</a>
    </div>
  </div>
  )
}

export default Hamburger