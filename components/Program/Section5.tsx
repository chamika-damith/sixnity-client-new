import React from 'react'
import Buttonforsection4 from '../Button/Buttonforsection4'
import Image from 'next/image'


function Section5() {
  return (
    <div className='mt-12'>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-4  justify-center items-center'>
            <div className='col-span-1 lg:col-span-2 items-center justify-center lg:text-left'>
                <h2 className='title mb-4 text-center lg:text-left'>
                Why SIXNITIY Leads in Gym Management
                </h2>
                
                <ul className='description mt-8 space-y-3 list-disc list-inside '>
                  <li>Only platform combining full gym management + AI fitness + financial automation</li>
                  <li>Automates trainer salaries, revenue split, and commission handling</li>
                  <li>Built for multi-gym expansion with true super admin control</li>
                  <li>AI enhances member engagement, retention, and personalization</li>
                  <li>Unified ecosystem: admin → trainer → member → AI → wearable data</li>
                </ul>
            </div>
            <div className='col-span-1 lg:col-span-3 mt-12 lg:mt-0'>
                <Image src="/images/Home/Section4/Laptop.png" alt="image" width={500} height={500} className='w-full h-full object-cover' />
            </div>
        </div>

    </div>
  )

}

export default Section5