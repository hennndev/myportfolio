"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

type PropsTypes = {
    data: {
        id: number
        title: string
        description: string
        image: string
        stacks: Array<string>
        linkWeb: string
        linkRepo: string
    }
}


const Project = ({data}: PropsTypes) => {
    return (
        <motion.div 
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2 * data.id}}
            className="flex flex-col space-y-6 md:space-y-0 md:flex-row min-h-[400px]">


            <div className="md:flex-[0.6] h-[300px] relative md:mr-10">
                <Image src={data.image} fill priority className="w-full h-full object-cover rounded-xl" alt="project-image"/>
            </div>

            <div className="flex flex-col flex-[0.7]">
                <div>
                    <h2 className="text-gray-100 text-2xl md:text-3xl font-semibold tracking-[1.2px]">
                        {data.title}
                    </h2>
                    <p className="text-gray-400 mt-4 text-base tracking-[0.8px]">
                        {data.description}
                    </p>
                    <div className="flexx space-x-3">
                        <a href={data.linkWeb} target='_blank' className="border border-neutral-800 py-3 px-6 space-x-6 rounded-full text-white shadow-lg mt-5 tracking-[1px] font-normal">Visit Project</a>
                        <a href={data.linkRepo} target="_blank" className="border border-neutral-800 py-3 px-6 space-x-6 rounded-full text-white shadow-lg mt-5 tracking-[1px] font-normal">Link Repo</a>
                    </div>
                </div>

                <div className="flex flex-col space-y-2 mt-5">
                    <h3 className="text-xl text-gray-100">Tech stack</h3>
                    <div className="flexx space-x-1">
                        {data.stacks.map(stack => (
                            <div className="p-1.5 rounded-full bg-neutral-200">
                                <div className="h-[20px] w-[20px] relative" key={stack}>
                                    <Image src={`/programming/${stack}.svg`} fill priority className="w-full h-full" alt={stack}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Project
