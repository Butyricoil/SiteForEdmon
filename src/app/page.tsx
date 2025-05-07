'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaTools, FaPaintRoller, FaHammer, FaLightbulb, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Carousel from './components/Carousel';
import Header from '../components/Header'
import Welcome from '../components/Welcome'
import Gallery from '../components/Gallery'
import Services from '../components/Services'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Header />
      <Welcome />
      <Gallery />
      <Services />
      <Contact />
      <footer className="col-12">
        <p className="text-center tm-copyright-text">Copyright 2024 Ремонт от Эдмона</p>
      </footer>
    </main>
  );
} 