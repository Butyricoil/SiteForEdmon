'use client'

import { FaTools } from 'react-icons/fa'

export default function Welcome() {
  return (
    <section
      id="tmWelcome"
      className="welcome-parallax-section"
    >
      <div className="welcome-content">
        <h1 className="tm-brand-name">Ремонт от Эдмона</h1>
        <p className="tm-brand-description mb-5">Качественный ремонт квартир в Краснодаре</p>
        <div className="welcome-about">
          <h2 className="tm-welcome-title">О нас</h2>
          <p className="welcome-text">
            Мы предоставляем полный спектр услуг по ремонту квартир в Краснодаре. Используем только качественные материалы и современные технологии. Индивидуальный подход к каждому клиенту.
          </p>
          <div className="welcome-icon-text">
            <FaTools className="tm-welcome-icon" />
            <p className="welcome-text">
              Мы гарантируем высокое качество работы и соблюдение сроков. Доверьте ремонт вашей квартиры профессионалам!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 