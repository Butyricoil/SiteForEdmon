import VisitCounter from './VisitCounter'

export default function NewFooter() {
  return (
    <footer className="footer-section" style={{
      background: 'rgba(34, 43, 54, 0.6)',
      backdropFilter: 'blur(8px)'
    }}>
      <div className="footer-parallax-bg">
        <div className="footer-content">
          <p>© 2024 Ремонт от Эдмона. Все права защищены.</p>
        </div>
      </div>
      <VisitCounter />
    </footer>
  )
} 