import React from 'react'
import Header from '@/app/components/Header'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const metadata = {
    title: 'Hennndev | Homepage',
}

const Home = () => {
    return (
        <main>
            <Header/>
            <Hero/>
            <Projects/>
            <Contact/>
            <Footer/>
        </main>
    )
}

export default Home