"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div className="h-[600px] w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
            <section id='contact' className='container h-full pt-28'>
                <motion.h2 
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.1}}
                    className='font-extrabold text-4xl md:text-5xl lg:text-7xl mb-3 text-gray-100'>Ready to transform your business to the next level?
                </motion.h2>
                <motion.p 
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.3}}
                    className='text-lg md:text-2xl mt-7 text-gray-200 font-medium max-w-[700px] leading-[1.6]'>
                    Reach out to me today and let's discuss how I can help you archieve your goals 
                </motion.p>
                <motion.a 
                    href='https://mail.google.com/mail/?view=cm&fs=1&to=hendrapermanadev@gmail.com&su=Transform my business&body=I want to transform my business'
                    target='_blank'
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.6}}
                    className="relative inline-flex h-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-10">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 md:px-10 md:py-6 text-lg md:text-2xl font-medium text-white backdrop-blur-3xl">
                        Let's get in touch
                    </span>
                </motion.a>
            </section>
        </div>
    )
}

export default Contact