import { FaPaintRoller, FaHammer, FaLightbulb } from 'react-icons/fa'

const services = [
  {
    icon: <FaPaintRoller size={40} color="#28a745" />,
    title: 'Косметический ремонт',
    desc: 'Обновление интерьера: покраска, обои, укладка напольных покрытий.'
  },
  {
    icon: <FaHammer size={40} color="#ff5722" />,
    title: 'Капитальный ремонт',
    desc: 'Полная реконструкция с заменой инженерных коммуникаций.'
  },
  {
    icon: <FaLightbulb size={40} color="#007bff" />,
    title: 'Дизайнерские проекты',
    desc: 'Создание уникальных интерьеров по вашим пожеланиям.'
  }
]

export default function NewServices() {
  return (
    <section className="services-section" style={{ display: 'flex', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div
        className="services-card"
        style={{
          background: 'rgba(255,255,255,0.85)',
          borderRadius: '24px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
          padding: '2.5rem 2rem',
          maxWidth: '900px',
          width: '100%',
          margin: '2rem 0',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h2 className="services-title">Наши услуги</h2>
        <div className="services-list">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 