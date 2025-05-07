'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`tm-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-6">
            <Image
              src="/img/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="tm-logo"
              style={{ maxHeight: isScrolled ? '60px' : '80px' }}
              priority
            />
          </div>
          <div className="col-6 text-right">
            <div className="phone-container">
              <Link href="tel:+79186495053" className="btn-phone">
                <i className="fas fa-phone-alt mr-2"></i>
                +7 (918) 649-50-53
              </Link>
              <p className="phone-label">Позвонить</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 