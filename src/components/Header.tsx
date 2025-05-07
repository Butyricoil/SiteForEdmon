import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="tm-header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-6">
            <Image
              src="/img/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="tm-logo"
              style={{ maxHeight: '100px' }}
            />
          </div>
          <div className="col-6 text-right">
            <div className="phone-container">
              <Link href="tel:+79186495053" className="btn-phone">
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