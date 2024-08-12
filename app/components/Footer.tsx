"use client"
import Image from 'next/image'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Footer = () => {
    return (
        <div className="w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
            <AnimatePresence>
                <motion.footer 
                    initial={{opacity: 0, x: 10}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className='container flex-center flex-col md:flex-row space-y-4 md:space-y-0 md:flex-between pb-10'>
                    <p className='text-gray-400 font-medium'>Copyright &copy; 2024 Hennndev</p>
                    <div className='flexx space-x-6'>
                        <a href='https://www.linkedin.com/in/hendraapp/' target='_blank' className='bg-white p-2 rounded-full'>
                            <div className='w-[20px] h-[20px] relative'>
                                <Image src="/programming/linkedin.svg" fill className='w-full h-full' alt='linkedin'/>
                            </div>
                        </a>
                        <a href='https://www.github.com/hennndev' target='_blank' className='bg-[#fff] p-2 rounded-full'>
                            <div className='w-[20px] h-[20px] relative'>
                                <Image src="/programming/github.svg" fill className='w-full h-full' alt='github'/>
                            </div>
                        </a>
                    </div>
                </motion.footer>
            </AnimatePresence>
        </div>
    )
}

export default Footer