import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Logo from '../../public/images/logo.svg';
import Hamburger from './Hamburger';


export const Hero = () => {
  return (
    <section id='hero'>
{/* container */}
    <div className="container mx-w-6xl mx-auto px-6 py-12">
      {/* Nav */}
      <nav className="flex items-center justify-between font-bold text-white ">
        <Image src={Logo} width={0} height={0} className='w-auto h-auto ' alt="logo" />

        {/* Menu */}
        <div className="hidden h-10 md:flex md:space-x-8">
          <div className="group">
              <Link href={"#"}>About</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
          <div className="group">
              <Link href={"#"}>Services</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
          <div className="group">
              <Link href={"#"}>Career</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
          <div className="group">
              <Link href={"#"}>Events</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
          <div className="group">
              <Link href={"#"}>Products</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
          <div className="group">
              <Link href={"#"}>Contact</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
        </div>

        {/* Hamburger button */}
        <Hamburger/>
       
      </nav>
      {/* Nav end */}

      {/* Mobile Menu */}

      <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
        Impressive Experience That Deliver
      </div>
    </div>


{/* container ends */}
    </section>
  )
}
