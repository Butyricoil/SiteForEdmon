'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaTools, FaPaintRoller, FaHammer, FaLightbulb, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Carousel from './components/Carousel';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src="/logo.png"
            alt="Ремонт от Эдмона"
            className="h-16"
          />
          <div className="flex gap-4">
            <motion.a
              href="https://wa.me/79186495053"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </motion.a>
            <motion.a
              href="tel:+79186495053"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
            >
              <FaPhone />
              <span>+7 (918) 649-50-53</span>
            </motion.a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500"
          >
            Ремонт от Эдмона
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-12"
          >
            Качественный ремонт квартир в Краснодаре
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold mb-4">О нас</h2>
              <p className="text-gray-600">
                Мы предоставляем полный спектр услуг по ремонту квартир в Краснодаре. 
                Используем только качественные материалы и современные технологии.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <FaTools className="text-4xl text-green-500 mb-4" />
              <p className="text-gray-600">
                Мы гарантируем высокое качество работы и соблюдение сроков. 
                Доверьте ремонт вашей квартиры профессионалам!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500"
          >
            Наши работы
          </motion.h2>
          <div className="max-w-6xl mx-auto">
            <Carousel />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500"
          >
            Наши услуги
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaPaintRoller className="text-4xl text-green-500" />,
                title: "Косметический ремонт",
                description: "Обновление интерьера: покраска, обои, укладка напольных покрытий."
              },
              {
                icon: <FaHammer className="text-4xl text-orange-500" />,
                title: "Капитальный ремонт",
                description: "Полная реконструкция с заменой инженерных коммуникаций."
              },
              {
                icon: <FaLightbulb className="text-4xl text-blue-500" />,
                title: "Дизайнерские проекты",
                description: "Создание уникальных интерьеров по вашим пожеланиям."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500"
          >
            Контакты
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.a
              href="tel:+79186495053"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <FaPhone className="text-4xl text-green-500 mb-4" />
              <span className="text-lg font-semibold">+7 (918) 649-50-53</span>
            </motion.a>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <MdLocationOn className="text-4xl text-orange-500 mb-4" />
              <span className="text-lg font-semibold">Работаем на Выезд</span>
            </motion.div>
            <motion.a
              href="https://www.youtube.com/@Master-Gangster"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <FaYoutube className="text-4xl text-red-500 mb-4" />
              <span className="text-lg font-semibold">Наш YouTube канал</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>Copyright 2024 Ремонт от Эдмона</p>
        </div>
      </footer>
    </main>
  );
} 