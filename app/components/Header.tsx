"use client"

const Header = () => {

    return (
        <header className='fixed z-50 flex-center w-full py-3 px-4'>
            <div className='border bg-black border-neutral-800 py-3 px-6 space-x-6 rounded-full font-montserrat text-white shadow-lg'>
                <a href="#home" className='outline-none'>Home</a>
                <a href="#projects" className='outline-none'>Projects</a>
                <a href="#contact" className='outline-none'>Contact</a>
            </div>
        </header>
    )
}

export default Header