import Image from 'next/image'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'

export default function NewHeader() {
  return (
    <header className="main-header">
      <div className="header-inner">
        <div className="header-logo">
          <Image src="/img/logo.png" alt="Логотип" width={64} height={64} priority />
        </div>
        <div className="header-actions">
          <a href="tel:+79186495053" className="header-btn call">
            <FaPhone size={18} />
            <span>Позвонить</span>
          </a>
          <a href="https://wa.me/79186495053" target="_blank" rel="noopener noreferrer" className="header-btn whatsapp">
            <FaWhatsapp size={18} />
            <span>Написать</span>
          </a>
        </div>
      </div>
    </header>
  )
} 