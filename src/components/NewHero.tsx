import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero-section hero-ddd-img">
      <div className="hero-ddd-img-bg" />
      <div className="hero-ddd-img-content">
        <div className="hero-ddd-img-overlay">
          <h1 className="hero-ddd-img-title">Ремонт от Эдмона</h1>
          <p className="hero-ddd-img-desc">Качественный ремонт квартир в Краснодаре</p>
        </div>
      </div>
    </section>
  )
} 