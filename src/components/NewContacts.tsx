import { FaPhone, FaWhatsapp, FaYoutube } from 'react-icons/fa'

export default function NewContacts() {
  return (
    <section className="contacts-section" style={{ display: 'flex', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div
        className="contacts-card"
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
        <h2 className="contacts-title">Контакты</h2>
        <div className="contacts-list">
          <a href="tel:+79186495053" className="contact-link">
            <FaPhone size={32} color="#28a745" />
            <span>+7 (918) 649-50-53</span>
          </a>
          <a href="https://wa.me/79186495053" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaWhatsapp size={32} color="#25d366" />
            <span>WhatsApp</span>
          </a>
          <a href="https://www.youtube.com/@Master-Gangster" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaYoutube size={32} color="#ff0000" />
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </section>
  )
} 