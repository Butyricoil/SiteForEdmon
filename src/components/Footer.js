import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('visitCount');
    const count = storedCount ? parseInt(storedCount) + 1 : 1;
    localStorage.setItem('visitCount', count);
    setVisitCount(count);
  }, []);

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p>© 2024 Edmon. Все права защищены.</p>
        <div className="visit-counter">
          <span className="visit-label">Посещений:</span>
          <span className="visit-number">{visitCount}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 