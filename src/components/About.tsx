import { useEffect, useRef } from 'react'

export default function About() {
  return (
    <section className="about-section" style={{ position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
      <div
        className="about-card"
        style={{
          background: 'rgba(255,255,255,0.3)',
          borderRadius: '24px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
          padding: '2.5rem 2rem',
          maxWidth: '600px',
          width: '100%',
          margin: '2rem 0',
          position: 'relative',
          zIndex: 1,
          backdropFilter: 'blur(8px)',
        }}
      >
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