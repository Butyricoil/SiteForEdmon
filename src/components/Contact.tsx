'use client'

import { FaPhone, FaCar, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Contact() {
  const contactRef = useRef<HTMLDivElement>(null)

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

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div id="tmContact" className="parallax-window" data-parallax="scroll" data-image-src="/img/mini-profile-bg-02.jpg" ref={contactRef}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center text-white mb-5">Контакты</h2>
            <div className="tm-contact-items-container">
              <div className="tm-contact-item">
                <Link href="tel:+79186495053" className="tm-contact-link">
                  <FaPhone className="fas fa-phone-alt fa-5x tm-contact-item-icon" style={{ color: '#28a745' }} />
                  <p className="contact-text">+7 (918) 649-50-53</p>
                  <span className="contact-label">Позвонить</span>
                </Link>
              </div>
              <div className="tm-contact-item">
                <Link href="#" className="tm-contact-link">
                  <FaCar className="fas fa-car fa-5x tm-contact-item-icon" style={{ color: '#ff5722' }} />
                  <p className="contact-text">Работаем на Выезд</p>
                  <span className="contact-label">По всему городу</span>
                </Link>
              </div>
              <div className="tm-contact-item">
                <Link href="https://www.youtube.com/@Master-Gangster" target="_blank" rel="noopener noreferrer" className="tm-contact-link">
                  <FaYoutube className="fab fa-youtube fa-5x tm-contact-item-icon" style={{ color: '#ff0000' }} />
                  <p className="contact-text">Наш YouTube канал</p>
                  <span className="contact-label">Подписаться</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 