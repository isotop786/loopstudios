import React from 'react'
import Image from 'next/image'
import InteractiveImg from '../../public/images/desktop/image-interactive.jpg';

const Feature = () => {
  return (
    <section id="feature">
        <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 md:px-0 text-gray-900 md:flex-row">
            <Image src={InteractiveImg} alt='feature image' width={0} height={0} className='w-auto h-auto'/>

            <div className="top-48 md:rounded-lg pr-0 text-center md:text-left  bg-white md:bg-gray-50 md:absolute md:right-0 md:py-20 md:pl-20">
                <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
                    The Leader In interactive VR
                </h2>
                <p className="max-w-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut distinctio harum illum quidem tenetur fuga explicabo animi, doloribus perspiciatis accusamus eaque earum vel, deserunt ea expedita beatae, quasi eveniet minus.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Feature