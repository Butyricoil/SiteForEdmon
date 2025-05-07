import { FaPaintRoller, FaHammer, FaLightbulb } from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      icon: <FaPaintRoller className="fas fa-3x fa-paint-roller tm-service-icon" />,
      title: "Косметический ремонт",
      description: "Обновление интерьера: покраска, обои, укладка напольных покрытий.",
      color: "tm-text-green"
    },
    {
      icon: <FaHammer className="fas fa-3x fa-hammer tm-service-icon" />,
      title: "Капитальный ремонт",
      description: "Полная реконструкция с заменой инженерных коммуникаций.",
      color: "tm-text-orange"
    },
    {
      icon: <FaLightbulb className="fas fa-3x fa-lightbulb tm-service-icon" />,
      title: "Дизайнерские проекты",
      description: "Создание уникальных интерьеров по вашим пожеланиям.",
      color: "tm-text-blue"
    }
  ]

  return (
    <section id="tmServices">
      <div className="container-fluid">
        <h2 className="text-center tm-text-green">Наши услуги</h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 tm-service-item">
              {service.icon}
              <h3 className={service.color}>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 