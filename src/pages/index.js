import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import Footer from '../components/Footer';
import { aboutObj } from '../components/AboutSection/Data';
import { skillsObj } from '../components/SkillsSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <AboutSection {...aboutObj}/>
            <SkillsSection {...skillsObj}/>
            <ExperienceSection/>
            <Footer/>
        </>
    )
}

export default Home
