import React from 'react'
import Image from 'next/image'

import deepEarthDesk from '../../public/images/desktop/image-deep-earth.jpg'
import deepEarthMob from '../../public/images/mobile/image-deep-earth.jpg';

import nightArcDesk from '../../public/images/desktop/image-night-arcade.jpg'
import nightArcMob from '../../public/images/mobile/image-night-arcade.jpg'

import sockerTeamDesk from '../../public/images/desktop/image-soccer-team.jpg';
import sockerTeamMob from '../../public/images/mobile/image-soccer-team.jpg';

import gridDesk from '../../public/images/desktop/image-grid.jpg';
import gridMob from '../../public/images/mobile/image-grid.jpg';

import aboveDesk from '../../public/images/desktop/image-from-above.jpg';
import aboveMob from '../../public/images/mobile/image-from-above.jpg';

import pocketDesk from '../../public/images/desktop/image-pocket-borealis.jpg';
import pocketMob from '../../public/images/mobile/image-pocket-borealis.jpg';

import curiosityDesk from '../../public/images/desktop/image-curiosity.jpg';
import curiosityMob from '../../public/images/mobile/image-curiosity.jpg';

import fishEyeDesk from '../../public/images/desktop/image-fisheye.jpg';
import fishEyeMob from '../../public/images/mobile/image-fisheye.jpg';

const Creation = () => {
  return (
    <section id="creations" className='bg-gray-50 p-1'>
        <div className="container max-w-6xl mx-auto md:my-32 mt-4 px-6 text-gray-900 md:px-0">
            <div className="flex justify-center mb-20 md:justify-between">
                <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
                    Our Creations
                </h2>

               <button className="hidden btn md:block">
                See All
               </button>
            </div>

            {/* Items Container */}
            <div className="flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8">
                <div className="group relative overflow-hidden md:w-1/4">
                    <Image src={deepEarthDesk} width={0} height={0} alt='item image' className="hidden w-full h-auto duration-200 md:block group-hover:scale-110"/>
                    <Image src={deepEarthMob} width={0} height={0} alt='item image' className="w-full   md:hidden "/>
                    {/* item gradient */}
                    <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
                    {/* Item text */}
                    <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black hover:cursor-pointer">
                        Deep Earth
                    </h5>
                </div>
                <div className="group relative overflow-hidden md:w-1/4">
                    <Image src={nightArcDesk} width={0} height={0} alt='item image' className="hidden w-full h-auto duration-200 md:block group-hover:scale-110"/>
                    <Image src={nightArcMob} width={0} height={0} alt='item image' className="w-full   md:hidden "/>
                    {/* item gradient */}
                    <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
                    {/* Item text */}
                    <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black hover:cursor-pointer">
                        Night Arcade
                    </h5>
                </div>
                <div className="group relative overflow-hidden md:w-1/4">
                    <Image src={sockerTeamDesk} width={0} height={0} alt='item image' className="hidden w-full h-auto duration-200 md:block group-hover:scale-110"/>
                    <Image src={sockerTeamMob} width={0} height={0} alt='item image' className="w-full   md:hidden "/>
                    {/* item gradient */}
                    <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
                    {/* Item text */}
                    <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black hover:cursor-pointer">
                        Sccker Team VR
                    </h5>
                </div>
                <div className="group relative overflow-hidden md:w-1/4">
                    <Image src={gridDesk} width={0} height={0} alt='item image' className="hidden w-full h-auto duration-200 md:block group-hover:scale-110"/>
                    <Image src={gridMob} width={0} height={0} alt='item image' className="w-full   md:hidden "/>
                    {/* item gradient */}
                    <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
                    {/* Item text */}
                    <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black hover:cursor-pointer">
                        The Grid
                    </h5>
                </div>
            </div>
            {/* Items Container  Ends*/}

             {/* Items Container */}
             <div className="my-4 flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8">
                <div className="group relative overflow-hidden md:w-1/4">
                    <Image src={aboveDesk} width={0} height={0} alt='item image' className="hidden w-full h-auto duration-200 md:block group-hover:scale-110"/>
                    <Image src={aboveMob} width={0} height={0} alt='item image' className="w-full   md:hidden "/>
                    {/* item gradient */}
                    <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
                    {/* Item text */}
                    <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black hover:cursor-pointer">
                        From up Above VR
                    </h5>
                </div>
                <div className="group relative overflow-hidden md:w-1/4">
                    <Image src={pocketDesk} width={0} height={0} alt='item image' className="hidden w-full h-auto duration-200 md:block group-hover:scale-110"/>
                    <Image src={pocketMob} width={0} height={0} alt='item image' className="w-full   md:hidden "/>
                    {/* item gradient */}
                    <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
                    {/* Item text */}
                    <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black hover:cursor-pointer">
                        Pocket Borealis
                    </h5>
                </div>
                <div className="group relative overflow-hidden md:w-1/4">
                    <Image src={curiosityDesk} width={0} height={0} alt='item image' className="hidden w-full h-auto duration-200 md:block group-hover:scale-110"/>
                    <Image src={curiosityMob} width={0} height={0} alt='item image' className="w-full   md:hidden "/>
                    {/* item gradient */}
                    <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
                    {/* Item text */}
                    <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black hover:cursor-pointer">
                        The Curiosity
                    </h5>
                </div>
                <div className="group relative overflow-hidden md:w-1/4">
                    <Image src={fishEyeDesk} width={0} height={0} alt='item image' className="hidden w-full h-auto duration-200 md:block group-hover:scale-110"/>
                    <Image src={fishEyeMob} width={0} height={0} alt='item image' className="w-full   md:hidden "/>
                    {/* item gradient */}
                    <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
                    {/* Item text */}
                    <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black hover:cursor-pointer">
                        Make it FishEye
                    </h5>
                </div>
            </div>
            {/* Items Container  Ends*/}

            {/* Bottom button conatiner */}
            <div className="flex justify-center mt-10 md:hidden">
                <button className="btn w-full">See All</button>
            </div>
        </div>
    </section>
  )
}

export default Creation