import React from 'react'
import { IoIosArrowDown } from "react-icons/io";


const DownArrow = () => {
    return (
        <div className='flex-center absolute bottom-10'>
            <div className='border border-neutral-600 rounded-full p-2 animate-bounce text-center'>
                <IoIosArrowDown className='text-lg text-gray-100'/>
            </div>
        </div>
    )
}

export default DownArrow