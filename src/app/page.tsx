'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaTools, FaPaintRoller, FaHammer, FaLightbulb, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Carousel from './components/Carousel';
import NewHeader from '../components/NewHeader'
import Hero from '../components/NewHero'
import About from '../components/NewAbout'
import Gallery from '../components/NewGallery'
import Services from '../components/NewServices'
import Contacts from '../components/NewContacts'
import Footer from '../components/NewFooter'

export default function Home() {
  return (
    <>
      <NewHeader />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Contacts />
      <Footer />
    </>
  );
} 