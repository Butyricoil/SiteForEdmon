'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaTools, FaPaintRoller, FaHammer, FaLightbulb, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Carousel from './components/Carousel';
import NewHeader from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Services from '../components/Services'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <NewHeader />
      <Hero />
      <Gallery />
      <div className="bg-photo" style={{
        backgroundImage: "url('/img/mini-profile-bg-02.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative'
      }}>
        <About />
        <Services />
        <Contacts />
      </div>
      <Footer />
    </>
  );
} 