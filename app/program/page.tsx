'use client'

import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import Section2 from '@/components/Program/Section2'
import Secton3 from '@/components/Program/Secton3'
import Section4 from '@/components/Program/Section4'
import Footer from '@/components/Footer/Footer'
import Comparison from '@/components/Program/Comparison'
import Section5 from '@/components/Program/Section5'
import MACoparison from '@/components/Program/MACoparison'
import Why from '@/components/Program/Why'
import WhyUs from '@/components/Program/WhyUs'
import { motion } from 'framer-motion'

function Page() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <div>
      <Navbar />
      <div className=' container-global'>
      <motion.div 
        className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[800px] bg-primary-gradient rounded-lg my-0 sm:my-0 md:my-0 lg:mb-4 xl:mb-4 2xl:my-0 flex flex-col justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-neutiva font-regular '
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
        Affordable Plans. <br />
        Powerful Features.
        </motion.h1>
        <motion.p 
          className='description text-center mt-2 sm:mt-2 md:mt-2 lg:mt-4 xl:mt-6 2xl:mt-6 max-w-[500px] sm:max-w-[900px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[800px] mx-auto'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
        Get premium fitness support at a price that works for you. Stay consistent, stay motivated, and grow stronger every day with our cost-friendly solutions.
        </motion.p>
        <motion.div 
          className='grid grid-cols-1 lg:grid-cols-4 gap-4 w-full  items-stretch px-6 sm:px-6 md:px-6 lg:px-6 xl:px-6 2xl:px-6 mt-12 lg:mt-0 mb-12 lg:mb-0'
        >
            <motion.div 
              className='col-span-1 lg:col-span-1 flex justify-center items-center'
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
            <Image
                  src="/images/Home/Heromobile.png"
                  alt="logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full sm:w-auto h-auto max-h-[400px] md:max-h-[450px] lg:max-h-[500px] xl:max-h-[750px] 2xl:max-h-[850px] object-contain"
                />
            </motion.div>
            <motion.div 
              className='col-span-1 lg:col-span-2 px-0 py-10'
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className='flex flex-col h-full justify-between w-full'>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
            <Image
                    src="/images/Home/Lao.png"
                    alt="logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-contain"
                  />
            </motion.div>
                  <motion.div 
                    className="flex flex-col md:flex-row gap-4 mt-4 items-center justify-center"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                <motion.div variants={fadeInScale} transition={{ duration: 0.5 }} className="flex items-center justify-center">
                <Image
                  src="/images/Home/Googleplay1.png"
                  alt="google"
                  width={200}
                  height={60}
                  quality={100}
                  className="w-auto h-[70px] sm:w-auto sm:h-16 md:w-auto md:h-15 lg:w-auto lg:h-[40px] xl:w-auto xl:h-[45px] 2xl:w-auto 2xl:h-[50px] object-contain"
                />
                </motion.div>
                 <motion.div variants={fadeInScale} transition={{ duration: 0.5, delay: 0.1 }}>
                 <Image
                  src="/images/Program/Qrcode.png"
                  alt="apple"
                  width={200}
                  height={60}
                  quality={100}
                  className="w-auto h-[200px] sm:w-auto sm:h-80 md:w-auto md:h-30 lg:w-auto lg:h-[40px] xl:w-auto xl:h-[45px] 2xl:w-auto 2xl:h-[50px] object-contain"
                />
                </motion.div>
                <motion.div variants={fadeInScale} transition={{ duration: 0.5, delay: 0.2 }}>
                <Image
                  src="/images/Home/DownloadApple.png"
                  alt="apple"
                  width={200}
                  height={60}
                  quality={100}
                  className="w-auto h-[70px] sm:w-auto sm:h-16 md:w-auto md:h-15 lg:w-auto lg:h-[40px] xl:w-auto xl:h-[45px] 2xl:w-auto 2xl:h-[50px] object-contain"
                />
                </motion.div>
              </motion.div>
              </div>
            </motion.div>
            <motion.div 
              className='col-span-1 lg:col-span-1 flex justify-center items-center'
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
            <Image
                  src="/images/Home/Heromobile.png"
                  alt="logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full sm:w-auto h-auto max-h-[400px] md:max-h-[450px] lg:max-h-[500px] xl:max-h-[750px] 2xl:max-h-[850px] object-contain"
                />
            </motion.div>

        </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Section2 />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Comparison />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Section5 />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <MACoparison />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Why />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <WhyUs />
        </motion.div>
        {/* <Secton3 />
        <Section4 /> */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Footer />
        </motion.div>
      </div>
    </div>
  )
}

export default Page

