"use client"
import { useState, useEffect } from "react"
import clsx from "clsx"

const Header = () => {
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
            setIsScrolled(true)
        } else { // if scroll up show the navbar
            setIsScrolled(false);  
        }
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        // cleanup function
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }
    }, [lastScrollY]);

    return (
        <header className={clsx('fixed z-50 flex-center w-full py-3 px-4 top-2 duration-300 ease-in-out', !isScrolled ? 'translate-y-0' : '-translate-y-[100px]')}>
            <div className='border bg-black border-neutral-800 py-3 px-6 space-x-6 rounded-full font-montserrat text-white shadow-lg'>
                <a href="#home" className='outline-none'>Home</a>
                <a href="#projects" className='outline-none'>Projects</a>
                <a href="#contact" className='outline-none'>Contact</a>
            </div>
        </header>
    )
}

export default Header