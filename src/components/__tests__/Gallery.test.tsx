import { render, screen, fireEvent, act } from '@testing-library/react'
import NewGallery from '../Gallery'

// Mock next/image since it's not available in the test environment
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}))

describe('NewGallery', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('renders the gallery section with correct title', () => {
    render(<NewGallery />)
    const title = screen.getByText('Наши работы')
    expect(title).toBeInTheDocument()
  })

  it('renders all images with correct alt text', () => {
    render(<NewGallery />)
    expect(screen.getByAltText('Ремонт 1')).toBeInTheDocument()
    expect(screen.getByAltText('Ремонт 2')).toBeInTheDocument()
    expect(screen.getByAltText('Ремонт 3')).toBeInTheDocument()
    expect(screen.getByAltText('Ремонт 4')).toBeInTheDocument()
  })

  it('shows only the active slide', () => {
    render(<NewGallery />)
    const slides = document.querySelectorAll('.gallery-slide')
    expect(slides[0]).toHaveStyle({ display: 'block' })
    expect(slides[1]).toHaveStyle({ display: 'none' })
    expect(slides[2]).toHaveStyle({ display: 'none' })
    expect(slides[3]).toHaveStyle({ display: 'none' })
  })

  it('changes slides when clicking next button', () => {
    render(<NewGallery />)
    const nextButton = screen.getByLabelText('Следующий слайд')
    fireEvent.click(nextButton)
    
    const slides = document.querySelectorAll('.gallery-slide')
    expect(slides[0]).toHaveStyle({ display: 'none' })
    expect(slides[1]).toHaveStyle({ display: 'block' })
  })

  it('changes slides when clicking prev button', () => {
    render(<NewGallery />)
    const prevButton = screen.getByLabelText('Предыдущий слайд')
    fireEvent.click(prevButton)
    
    const slides = document.querySelectorAll('.gallery-slide')
    expect(slides[0]).toHaveStyle({ display: 'none' })
    expect(slides[3]).toHaveStyle({ display: 'block' })
  })

  it('changes slides when clicking indicators', () => {
    render(<NewGallery />)
    const indicator2 = screen.getByLabelText('Слайд 2')
    fireEvent.click(indicator2)
    
    const slides = document.querySelectorAll('.gallery-slide')
    expect(slides[0]).toHaveStyle({ display: 'none' })
    expect(slides[1]).toHaveStyle({ display: 'block' })
  })

  it('automatically changes slides after 5 seconds', () => {
    render(<NewGallery />)
    
    act(() => {
      jest.advanceTimersByTime(5000)
    })
    
    const slides = document.querySelectorAll('.gallery-slide')
    expect(slides[0]).toHaveStyle({ display: 'none' })
    expect(slides[1]).toHaveStyle({ display: 'block' })
  })
}) 