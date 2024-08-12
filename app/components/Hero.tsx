'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
    return (
        <div id='home' className="h-[800px] w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
            <AnimatePresence>
                <div className='container -mt-10'>
                    <div className='max-w-4xl'>
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                        >
                            <h1 className='font-extrabold text-7xl mb-3 text-gray-100'>HELLO, I'M HENDRA</h1>
                            <h1 className='font-extrabold text-7xl leading-[1.2] text-gray-100'>AND I'M A FRONTEND DEVELOPER</h1>
                        </motion.div>
                        <motion.p 
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.2}}
                            className='text-2xl leading-[1.6] mt-7 text-gray-200'>
                            I will help you transform your business and <br /> accelerates growth within digital process and technology
                        </motion.p>
                    </div>
                </div>
            </AnimatePresence>
        </div>
    )
}

export default Hero