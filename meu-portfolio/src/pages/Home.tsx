import { useEffect } from 'react'
import ContactSection from '../components/Contact/ContactSection'
import Experience from '../components/Experience/Experience'
import Header from '../components/Header/Header'
import Description from '../components/Description/Description'
import Technologies from '../components/Technologies/Technologies'
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        AOS.init({
        duration: 1000,
        once: true
        })
    },[])
    return (      
    <>
        <Header />
        <Description />
        <Technologies />
        <Experience />
        <ContactSection />
    </>
    )
}

export default Home;