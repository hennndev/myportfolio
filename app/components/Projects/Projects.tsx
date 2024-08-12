"use client"
import React from 'react'
import Project from '@/app/components/Projects/Project'
import { data_projects } from '@/data/project'

const Projects = () => {
    return (
        <div className='w-full flex flex-col space-y-28 md:space-y-14 mt-20'>
            {data_projects.map(proj => (
                <Project key={proj.id} data={proj}/>
            ))}
        </div>
    )
}

export default Projects