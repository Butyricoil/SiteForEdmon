'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Gallery() {
  const [activeSlide, setActiveSlide] = useState(0)
  const images = [
    { src: '/img/repair1.jpg', alt: 'Repair 1' },
    { src: '/img/repair2.jpg', alt: 'Repair 2' },
    { src: '/img/repair3.jpg', alt: 'Repair 3' },
    { src: '/img/repair4.jpg', alt: 'Repair 4' },
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="tmGallery" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        {images.map((_, index) => (
          <li
            key={index}
            data-bs-target="#tmGallery"
            data-bs-slide-to={index}
            className={index === activeSlide ? 'active' : ''}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </ol>

      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeSlide ? 'active' : ''}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={600}
              className="d-block w-100"
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        onClick={prevSlide}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Предыдущий</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={nextSlide}
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Следующий</span>
      </button>
    </section>
  )
} 