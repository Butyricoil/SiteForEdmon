import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return
      const scrollY = window.scrollY
      // Параллакс: сдвиг фона при прокрутке
      bgRef.current.style.transform = `translateY(${scrollY * 0.3}px)`
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero-section hero-ddd-img" style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        className="hero-ddd-img-bg"
        ref={bgRef}
        style={{
          backgroundImage: "url('/img/mini-profile-bg-02.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          willChange: 'transform',
          transition: 'background-image 0.7s',
        }}
      />
      <div className="hero-ddd-img-content">
        <div className="hero-ddd-img-overlay">
          <h1 className="hero-ddd-img-title">Ремонт от Эдмона</h1>
          <p className="hero-ddd-img-desc">Качественный ремонт квартир в Краснодаре</p>
        </div>
      </div>
    </section>
  )
} 