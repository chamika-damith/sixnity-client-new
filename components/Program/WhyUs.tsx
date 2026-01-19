import React from 'react'
import Image from 'next/image'

function WhyUs() {
  return (
    <div className='mt-12 '>
      <div className=''>
        <div className='bg-third rounded-3xl sm:rounded-4xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 2xl:p-16'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            {/* Left Side - Text and Download Options */}
            <div>
              <h2 className='title mb-6 sm:mb-8 text-center lg:text-left'>
                Why Choose Us?
              </h2>
              
              <p className='description mb-8 sm:mb-10 md:mb-12 text-left'>
                We deliver accurate, unbiased comparisons backed by research and real-world data, helping you evaluate options clearly and choose the solution that best fits your needs.
              </p>

              {/* Download Options */}
              <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start'>
                <Image
                  src="/images/Home/Googleplay1.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  quality={100}
                  className="w-auto h-[35px] sm:h-[40px] md:h-[45px] object-contain cursor-pointer"
                />
                <Image
                  src="/images/Program/Qrcode.png"
                  alt="QR Code"
                  width={200}
                  height={200}
                  quality={100}
                  className="w-auto h-[35px] sm:h-[40px] md:h-[45px] object-contain"
                />
                <Image
                  src="/images/Home/DownloadApple.png"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  quality={100}
                  className="w-auto h-[35px] sm:h-[40px] md:h-[45px] object-contain cursor-pointer"
                />
              </div>
            </div>

            {/* Right Side - Woman with Phone */}
            <div className='flex justify-center lg:justify-end '>
              <div className='w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[450px] xl:max-w-[500px] 2xl:max-w-[550px]'>
                <Image
                  src="/images/Program/GirlwithPhone.png"
                  alt="Woman holding smartphone with SIXNITIY app"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className='w-full h-auto object-contain rounded-lg sm:rounded-xl md:rounded-2xl'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
