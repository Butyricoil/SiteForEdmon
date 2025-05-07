import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const images = [
  { src: '/img/repair1.jpg', alt: 'Ремонт 1' },
  { src: '/img/repair2.jpg', alt: 'Ремонт 2' },
  { src: '/img/repair3.jpg', alt: 'Ремонт 3' },
  { src: '/img/repair4.jpg', alt: 'Ремонт 4' },
]

export default function NewGallery() {
  const [active, setActive] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [active])

  const goTo = (idx: number) => {
    setActive(idx)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  const prev = () => goTo((active - 1 + images.length) % images.length)
  const next = () => goTo((active + 1) % images.length)

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Наши работы</h2>
      <div className="gallery-carousel">
        {images.map((img, idx) => (
          <div
            key={img.src}
            className={`gallery-slide${idx === active ? ' active' : ''}`}
            style={{ display: idx === active ? 'block' : 'none' }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={1200}
              height={600}
              className="gallery-img"
              priority={idx === 0}
            />
          </div>
        ))}
        <button className="carousel-control-prev" onClick={prev} aria-label="Предыдущий слайд">&#10094;</button>
        <button className="carousel-control-next" onClick={next} aria-label="Следующий слайд">&#10095;</button>
        <div className="carousel-indicators">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={idx === active ? 'active' : ''}
              onClick={() => goTo(idx)}
              aria-label={`Слайд ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 