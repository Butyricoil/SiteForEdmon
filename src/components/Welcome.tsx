import { FaTools } from 'react-icons/fa'

export default function Welcome() {
  return (
    <section id="tmWelcome" className="parallax-window" data-parallax="scroll" data-image-src="/img/mini-profile-bg-01.jpg">
      <div className="container-fluid tm-brand-container-outer">
        <div className="row">
          <div className="col-12">
            <div className="ml-auto mr-0 tm-bg-black-transparent text-white tm-brand-container-inner">
              <div className="tm-brand-container text-center">
                <h1 className="tm-brand-name">Ремонт от Эдмона</h1>
                <p className="tm-brand-description mb-0">Качественный ремонт квартир в Краснодаре</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tm-bg-white-transparent tm-welcome-container">
        <div className="container-fluid">
          <div className="row h-100">
            <div className="col-md-7 tm-welcome-left-col">
              <div className="tm-welcome-left">
                <h2 className="tm-welcome-title">О нас</h2>
                <p className="pb-0">
                  Мы предоставляем полный спектр услуг по ремонту квартир в Краснодаре. Используем только качественные
                  материалы и современные технологии. Индивидуальный подход к каждому клиенту.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="tm-welcome-right">
                <FaTools className="fas fa-4x fa-tools p-3 tm-welcome-icon" />
                <p className="mb-0">
                  Мы гарантируем высокое качество работы и соблюдение сроков. Доверьте ремонт вашей квартиры
                  профессионалам!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 