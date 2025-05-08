import { render, screen } from '@testing-library/react'
import NewHeader from '../Header'

// Mock next/image since it's not available in the test environment
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}))

describe('NewHeader', () => {
  it('renders the logo', () => {
    render(<NewHeader />)
    const logo = screen.getByAltText('Логотип')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', '/img/logo.png')
  })

  it('renders the call button with correct phone number', () => {
    render(<NewHeader />)
    const callButton = screen.getByText('Позвонить')
    expect(callButton).toBeInTheDocument()
    expect(callButton.closest('a')).toHaveAttribute('href', 'tel:+79186495053')
  })

  it('renders the WhatsApp button with correct link', () => {
    render(<NewHeader />)
    const whatsappButton = screen.getByText('Написать')
    expect(whatsappButton).toBeInTheDocument()
    expect(whatsappButton.closest('a')).toHaveAttribute('href', 'https://wa.me/79186495053')
    expect(whatsappButton.closest('a')).toHaveAttribute('target', '_blank')
    expect(whatsappButton.closest('a')).toHaveAttribute('rel', 'noopener noreferrer')
  })
}) 