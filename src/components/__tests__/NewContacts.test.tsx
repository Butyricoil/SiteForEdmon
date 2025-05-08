import { render, screen } from '@testing-library/react'
import NewContacts from '../NewContacts'

describe('NewContacts', () => {
  it('renders the contacts section with correct title', () => {
    render(<NewContacts />)
    const title = screen.getByText('Контакты')
    expect(title).toBeInTheDocument()
  })

  it('renders phone contact with correct number', () => {
    render(<NewContacts />)
    const phoneLink = screen.getByText('+7 (918) 649-50-53')
    expect(phoneLink).toBeInTheDocument()
    expect(phoneLink.closest('a')).toHaveAttribute('href', 'tel:+79186495053')
  })

  it('renders WhatsApp contact with correct link', () => {
    render(<NewContacts />)
    const whatsappLink = screen.getByText('WhatsApp')
    expect(whatsappLink).toBeInTheDocument()
    expect(whatsappLink.closest('a')).toHaveAttribute('href', 'https://wa.me/79186495053')
    expect(whatsappLink.closest('a')).toHaveAttribute('target', '_blank')
    expect(whatsappLink.closest('a')).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders YouTube contact with correct link', () => {
    render(<NewContacts />)
    const youtubeLink = screen.getByText('YouTube')
    expect(youtubeLink).toBeInTheDocument()
    expect(youtubeLink.closest('a')).toHaveAttribute('href', 'https://www.youtube.com/@Master-Gangster')
    expect(youtubeLink.closest('a')).toHaveAttribute('target', '_blank')
    expect(youtubeLink.closest('a')).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('applies correct styling to the contacts section', () => {
    render(<NewContacts />)
    const section = document.querySelector('.contacts-section')
    expect(section).toHaveStyle({
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    })
  })

  it('applies correct styling to the contacts card', () => {
    render(<NewContacts />)
    const card = document.querySelector('.contacts-card')
    const styles = window.getComputedStyle(card!)
    expect(styles.background).toBe('rgba(255, 255, 255, 0.3)')
    expect(styles.borderRadius).toBe('24px')
    expect(styles.boxShadow).toBe('0 8px 32px rgba(0, 0, 0, 0.1)')
    expect(styles.padding).toBe('2.5rem 2rem')
    expect(styles.maxWidth).toBe('600px')
    expect(styles.width).toBe('100%')
    expect(styles.margin).toBe('2rem 0px')
    expect(styles.position).toBe('relative')
    expect(styles.zIndex).toBe('1')
    expect(styles.backdropFilter).toBe('blur(8px)')
  })
}) 