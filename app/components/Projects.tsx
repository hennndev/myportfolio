"use client"
import React from 'react'
import ProjectsData from './Projects/Projects'
import { motion } from 'framer-motion'

const Projects = () => {
    return (
        <div className="min-h-[700px] w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
            <section id='projects' className='container h-full pt-20'>
                <motion.h1 
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.1}}
                    className='font-extrabold text-4xl md:text-5xl lg:text-7xl mb-3 text-gray-100'>Projects
                </motion.h1>
                <motion.p 
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className='text-xl md:text-2xl mt-7 text-gray-200 font-medium md:max-w-[700px] leading-[1.6]'>
                    I have many <span className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-blue-400'>features project</span> web application built with modern programming language
                </motion.p>
                <ProjectsData/>
            </section>
        </div>
    )
}

export default Projects