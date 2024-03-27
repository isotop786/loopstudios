import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/logo.svg'
import fb from '../../public/images/icon-facebook.svg';
import twitter from '../../public/images/icon-twitter.svg';
import ig from '../../public/images/icon-instagram.svg';
import pin from '../../public/images/icon-pinterest.svg';


const Footer = () => {
  return (
   <footer className='bg-black'>
    <div className="container max-w-6xl py-10 mx-auto">
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
            {/* Menu and Logo */}
            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
                <Image src={logo} width={0} height={0} alt='logo' className='w-44 md:ml-3'/>
            </div>
            {/* Menu */}
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                {/* item 1 */}
                <div className="h-10 group">
                    <a href="#">About</a>
                    <div className="group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                    <a href="#">Careers</a>
                    <div className="group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                    <a href="#">Events</a>
                    <div className="group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                    <a href="#">Products</a>
                    <div className="group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                    <a href="#">Supports</a>
                    <div className="group-hover:border-b group-hover:border-blue-50"></div>
                </div>
            </div>
            {/* Social and COpy Container */}
            <div className="flex flex-col items-center md:items-start justify-between space-y-4 text-gray-500">
                <div className="flex  md:items-center justify-center space-x-4 md:justify-end">
                    <div className="h-8 group">
                        <a href="#">
                            <Image src={fb} width={0} height={0} alt='fb' className='h-6'/>
                        </a>
                    </div>
                    <div className="h-8 group">
                        <a href="#">
                            <Image src={twitter} width={0} height={0} alt='fb' className='h-6'/>
                        </a>
                    </div>
                    <div className="h-8 group">
                        <a href="#">
                            <Image src={ig} width={0} height={0} alt='fb' className='h-6'/>
                        </a>
                    </div>
                    <div className="h-8 group">
                        <a href="#">
                            <Image src={pin} width={0} height={0} alt='fb' className='h-6'/>
                        </a>
                    </div>
                </div>

                {/* Copy */}
                <div className="font-bold">
                    &copy; {new Date().getFullYear()} LoopStudios. All Rights Reserved.
                </div>
            </div>
        </div>
    </div>
   </footer>
  )
}

export default Footer