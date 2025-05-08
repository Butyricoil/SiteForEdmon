import { render, screen } from '@testing-library/react'
import NewServices from '../Services'

describe('NewServices', () => {
  it('renders the services section with correct title', () => {
    render(<NewServices />)
    const title = screen.getByText('Наши услуги')
    expect(title).toBeInTheDocument()
  })

  it('renders all three services with their titles and descriptions', () => {
    render(<NewServices />)
    
    // Check for all service titles
    expect(screen.getByText('Косметический ремонт')).toBeInTheDocument()
    expect(screen.getByText('Капитальный ремонт')).toBeInTheDocument()
    expect(screen.getByText('Дизайнерские проекты')).toBeInTheDocument()

    // Check for all service descriptions
    expect(screen.getByText('Обновление интерьера: покраска, обои, укладка напольных покрытий.')).toBeInTheDocument()
    expect(screen.getByText('Полная реконструкция с заменой инженерных коммуникаций.')).toBeInTheDocument()
    expect(screen.getByText('Создание уникальных интерьеров по вашим пожеланиям.')).toBeInTheDocument()
  })

  it('renders service icons', () => {
    render(<NewServices />)
    const icons = document.querySelectorAll('.service-icon')
    expect(icons).toHaveLength(3)
  })

  it('applies correct styling to the services section', () => {
    render(<NewServices />)
    const section = document.querySelector('.services-section')
    expect(section).toHaveStyle({
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '4rem 0',
      background: 'transparent'
    })
  })
}) 