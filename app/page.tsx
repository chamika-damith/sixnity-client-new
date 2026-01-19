'use client'

import Image from "next/image";
import Loader from "@/components/Loader/loader";
import WhiteButton from "@/components/Button/WhiteButton";
import Navbar from "@/components/Navbar/Navbar";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";
import Section5 from "@/components/Home/Section5";
import Section6 from "@/components/Home/Section6";
import Section7 from "@/components/Home/Section7";
import Section8 from "@/components/Home/Section8";
import Footer from "@/components/Footer/Footer";
import StartFree from "@/components/Button/StartFree";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 }
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="  container-global">
      <motion.div 
        className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[800px] bg-primary-gradient rounded-lg my-0 sm:my-0 md:my-0 lg:mb-4 xl:mb-4 2xl:my-0 flex flex-col justify-end"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <motion.div 
          className="absolute inset-0 w-full h-full z-0 flex items-end justify-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full h-full flex justify-center items-end">
            <Image
              src="/images/Home/Girl.png"
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[0px] sm:h-[450px] md:h-[550px] lg:h-[550px] xl:h-[650px] 2xl:h-[800px] w-auto object-contain"
            />
          </div>
        </motion.div>
        <motion.div 
          className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-0 sm:gap-0 md:gap-0 lg:gap-2 xl:gap-2 2xl:gap-4 items-end  lg:pl-8 xl:pl-10 2xl:pl-10"
          variants={staggerContainer}
        >
          <motion.div 
            className="col-span-1 lg:col-span-2 px-6 lg:px-0 w-full pt-8 sm:pt-8 md:pt-8 lg:pt-6 pb-6 md:px-6"
            variants={fadeInUp}
          >
            <div>
              <motion.h1 
                className="font-neutiva text-[40px] lg:text-[30px] xl:text-[60px] 2xl:text-[80px]  font-regular  xl:leading-[60px] 2xl:leading-[80px] leading-[40px] text-transparent bg-clip-text bg-linear-to-b from-[#313730] to-[rgba(49,55,48,0.6)] dark:from-[#ffffff] dark:to-[rgba(255,255,255,0.6)]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Boost Your Fitness, Without Breaking the Bank
              </motion.h1>
              <motion.div 
                className="my-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <StartFree /> 
              </motion.div>
              <motion.p 
                className="description max-w-[300px] "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                From gym operations to personal coaching and member progress, everything you need to grow and perform is right here.
              </motion.p>
              <motion.div 
                className="flex flex-row gap-4 mt-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Image
                  src="/images/Home/Googleplay1.png"
                  alt="google"
                  width={200}
                  height={60}
                  quality={100}
                  className="w-auto h-[30px] sm:w-auto sm:h-8 md:w-auto md:h-10 lg:w-auto lg:h-[40px] xl:w-auto xl:h-[45px] 2xl:w-auto 2xl:h-[50px] object-contain"
                />
                <Image
                  src="/images/Home/DownloadApple.png"
                  alt="apple"
                  width={200}
                  height={60}
                  quality={100}
                  className="w-auto h-[30px] sm:w-auto sm:h-8 md:w-auto md:h-10 lg:w-auto lg:h-[40px] xl:w-auto xl:h-[45px] 2xl:w-auto 2xl:h-[50px] object-contain"
                />
              </motion.div>

            </div>
          </motion.div>
          <motion.div 
            className="col-span-1 lg:col-span-3 pb-6 sm:pb-6 md:pb-6 lg:pb-6 xl:pb-6 2xl:pb-6 px-6 "
            variants={slideInRight}
          >
            <div className="flex flex-col md:flex-row gap-2 items-end">
              <motion.div 
                className="w-full flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-full ">
                  <WhiteButton />
                  <motion.div 
                    className="bg-white/30 backdrop-blur-md w-full border border-white rounded-3xl p-6 shadow-lg mb-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <p className="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base">
                    Stay motivated, train better, and hit new goals daily with tools designed for real fitness journeys.
                    </p>
                  </motion.div>
                </div>
                <motion.div 
                  className="w-full flex justify-center items-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
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
              </motion.div>
              <motion.div 
                className="w-full h-auto flex justify-center items-end"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                <Image
                  src="/images/Home/Heromobile.png"
                  alt="logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full sm:w-auto h-auto max-h-[400px]  md:max-h-[450px] lg:max-h-[500px] xl:h-[950px] 2xl:h-[1000px] object-contain"
                />
              </motion.div>


            </div>
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
          <Section3 />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Section4 />
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
          <Section6 />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Section7 />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Section8 />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Footer />
        </motion.div>
        {/* Done! */}
</div>
{/* test */}
    </div>
  );
}
