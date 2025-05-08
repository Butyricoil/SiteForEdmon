import VisitCounter from './VisitCounter'

export default function NewFooter() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Ремонт от Эдмона. Все права защищены.</p>
        <VisitCounter />
      </div>
    </footer>
  )
} 