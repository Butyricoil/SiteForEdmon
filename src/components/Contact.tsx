import { FaPhone, FaCar, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

export default function Contact() {
  return (
    <div id="tmContact" className="parallax-window" data-parallax="scroll" data-image-src="/img/mini-profile-bg-02.jpg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center text-white">Контакты</h2>
            <div className="tm-contact-items-container text-center">
              <div className="tm-contact-item">
                <Link href="tel:+79186495053" className="tm-contact-link">
                  <FaPhone className="fas fa-phone-alt fa-5x tm-contact-item-icon" style={{ color: '#28a745' }} />
                  <p>+7 (918) 649-50-53</p>
                </Link>
              </div>
              <div className="tm-contact-item">
                <Link href="#" className="tm-contact-link">
                  <FaCar className="fas fa-car fa-5x tm-contact-item-icon" style={{ color: '#ff5722' }} />
                  <p>Работаем на Выезд</p>
                </Link>
              </div>
              <div className="tm-contact-item">
                <Link href="https://www.youtube.com/@Master-Gangster" target="_blank" rel="noopener noreferrer" className="tm-contact-link">
                  <FaYoutube className="fab fa-youtube fa-5x tm-contact-item-icon" style={{ color: '#ff0000' }} />
                  <p>Наш YouTube канал</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 