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
    <section className="services-section">
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
    </section>
  )
} 