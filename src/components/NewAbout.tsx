import { useEffect, useRef } from 'react'

export default function About() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return
      const scrollY = window.scrollY
      bgRef.current.style.transform = `translateY(${scrollY * 0.2}px)`
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="about-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        ref={bgRef}
        style={{
          backgroundImage: "url('/img/mini-profile-bg-01.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: 0.5,
          willChange: 'transform',
          transition: 'background-image 0.7s',
        }}
      />
      <div className="about-content" style={{ position: 'relative', zIndex: 1 }}>
        <h2>О нас</h2>
        <p>Мы специализируемся на ремонте квартир в Краснодаре. Работаем быстро, аккуратно и с гарантией. Используем современные материалы и технологии.</p>
        <ul className="about-list">
          <li>✔ Индивидуальный подход</li>
          <li>✔ Прозрачные цены</li>
          <li>✔ Соблюдение сроков</li>
          <li>✔ Гарантия на все работы</li>
        </ul>
      </div>
    </section>
  )
} 