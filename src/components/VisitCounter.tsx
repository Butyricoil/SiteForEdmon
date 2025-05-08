'use client';

import { useState, useEffect } from 'react';

export default function VisitCounter() {
  const [visits, setVisits] = useState<number>(0);

  useEffect(() => {
    // Получаем текущее количество посещений из localStorage
    const storedVisits = localStorage.getItem('siteVisits');
    const currentVisits = storedVisits ? parseInt(storedVisits) : 0;
    
    // Увеличиваем счетчик
    const newVisits = currentVisits + 1;
    
    // Сохраняем новое значение
    localStorage.setItem('siteVisits', newVisits.toString());
    
    // Обновляем состояние
    setVisits(newVisits);
  }, []);

  return (
    <div className="visit-counter">
      <span className="visit-label">Посещений сайта:</span>
      <span className="visit-number">{visits}</span>
    </div>
  );
} 