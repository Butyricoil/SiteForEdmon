'use client'

import { FaPaintRoller, FaHammer, FaLightbulb } from 'react-icons/fa'
import { useEffect, useRef } from 'react'

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: <FaPaintRoller className="fas fa-3x fa-paint-roller tm-service-icon" />,
      title: "Косметический ремонт",
      description: "Обновление интерьера: покраска, обои, укладка напольных покрытий.",
      color: "tm-text-green"
    },
    {
      icon: <FaHammer className="fas fa-3x fa-hammer tm-service-icon" />,
      title: "Капитальный ремонт",
      description: "Полная реконструкция с заменой инженерных коммуникаций.",
      color: "tm-text-orange"
    },
    {
      icon: <FaLightbulb className="fas fa-3x fa-lightbulb tm-service-icon" />,
      title: "Дизайнерские проекты",
      description: "Создание уникальных интерьеров по вашим пожеланиям.",
      color: "tm-text-blue"
    }
  ]

  return (
    <section id="tmServices" ref={servicesRef}>
      <div className="container-fluid">
        <h2 className="text-center tm-text-green mb-5">Наши услуги</h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 tm-service-item">
              <div className="service-content">
                {service.icon}
                <h3 className={service.color}>{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 