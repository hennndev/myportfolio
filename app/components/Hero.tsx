'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
    return (
        <div id='home' className="h-[800px] w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
            <AnimatePresence>
                <div className='container -mt-20'>
                    <div className='md:max-w-4xl'>
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                        >
                            <h1 className='font-extrabold text-4xl md:text-5xl lg:text-7xl lg:mb-3 text-gray-100 leading-[1.5]'>
                                HELLO, I'M HENDRA <br />
                                AND I'M A FRONTEND DEVELOPER
                            </h1>
                        </motion.div>
                        <motion.p 
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.3}}
                            className='text-lg md:text-2xl leading-[1.6] mt-7 text-gray-200'>
                            I will help you transform your business and <br /> accelerates growth within digital process and technology
                        </motion.p>
                        <motion.a 
                            href='#projects'
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.6}}
                            className="relative inline-flex h-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-10">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 md:px-10 md:py-6 text-lg md:text-2xl font-medium text-white backdrop-blur-3xl">
                                Show my works
                            </span>
                        </motion.a>
                    </div>
                </div>
            </AnimatePresence>
        </div>
    )
}

export default Hero