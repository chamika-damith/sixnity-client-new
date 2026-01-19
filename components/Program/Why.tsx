import React from 'react'
import Image from 'next/image'
import DownloadApp from '../Button/DownloadApp'

function Why() {
  return (
    <div className='mt-12 '>
        <div className=''>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
                <div>
                    <h2 className='title'>
                        Why SIXNITIY Mobile App is Futuristic
                    </h2>
                    
                    <ul className='description space-y-4 sm:space-y-5 md:space-y-2 mb-8 mt-8'>
                        <li className='flex items-start gap-3'>
                            <span className='text-primary shrink-0 mt-1'>•</span>
                            <span>Designed for expansion across multiple gyms and supports global operations.</span>
                        </li>
                        <li className='flex items-start gap-3'>
                            <span className='text-primary shrink-0 mt-1'>•</span>
                            <span>Combines AI workouts + AI meals + AI chatbot in one gym app</span>
                        </li>
                        <li className='flex items-start gap-3'>
                            <span className='text-primary shrink-0 mt-1'>•</span>
                            <span>Direct connection to gym data, trainers, wearable sensors</span>
                        </li>
                        <li className='flex items-start gap-3'>
                            <span className='text-primary shrink-0 mt-1'>•</span>
                            <span>Creates a personalized fitness journey instead of generic workouts</span>
                        </li>
                        <li className='flex items-start gap-3'>
                            <span className='text-primary shrink-0 mt-1'>•</span>
                            <span>Stronger retention through AI coaching + progress analytics</span>
                        </li>
                        <li className='flex items-start gap-3'>
                            <span className='text-primary shrink-0 mt-1'>•</span>
                            <span>Offers a modern, futuristic experience</span>
                        </li>
                    </ul>

                    <div className=''>
                    <div className='mb-12 sm:mb-16 md:mb-18 lg:mb-8 xl:mb-12 2xl:mb-12'>
                <DownloadApp/>
                </div>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8'>
                    <div className='w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[300px] xl:max-w-[350px] 2xl:max-w-[400px]'>
                        <Image 
                            src="/images/Home/Section5/MobileApp1.png" 
                            alt="SIXNITIY Mobile App - Meal tab" 
                            width={0}
                            height={0}
                            sizes="100vw"
                            className='w-full h-auto object-contain'
                        />
                    </div>
                    <div className='w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[300px] xl:max-w-[350px] 2xl:max-w-[400px]'>
                        <Image 
                            src="/images/Home/Section7/MobileApp.png" 
                            alt="SIXNITIY Mobile App - Workouts & Trainers" 
                            width={0}
                            height={0}
                            sizes="100vw"
                            className='w-full h-auto object-contain'
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Why