"use client"
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const AboutMe = () => {
    return (
        <section id='about-me' className='h-[700px] container mt-20'>
                <AnimatePresence>
                    <motion.h1 
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        className='font-extrabold text-7xl mb-3 text-gray-100'>AboutMe
                    </motion.h1>
                    <motion.p
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.3}}
                        className='font-semibold text-3xl mb-3 text-gray-100 mt-7 leading-[1.7]'
                        >
                        Hello, my name is Hendra Adriyanto Permana Putra, currently I have been studying as Bachelor Information System student at Terbuka University who has a passion as a Frontend Web Developer and Fullstack Engineer. 
                        Experienced in various personal projects, such as MERN web application, NextJS application, simple React Native application, ReactJS landing page and anything else.
                    </motion.p>
                </AnimatePresence>
        </section>
    )
}

export default AboutMe