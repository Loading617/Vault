import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [screenType, setScreenType] = useState<string>('phone');

  useEffect(() => {
    const updateScreenType = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenType('phone');
      } else if (width < 1024) {
        setScreenType('tablet');
      } else {
        setScreenType('desktop');
      }
    };

    updateScreenType();
    window.addEventListener('resize', updateScreenType);

    return () => window.removeEventListener('resize', updateScreenType);
  }, []);

  return (
    <div>
      <h1>Current Screen: {screenType}</h1>
      {screenType === 'phone' && <p>Phone-specific content</p>}
      {screenType === 'tablet' && <p>Tablet-specific content</p>}
      {screenType === 'desktop' && <p>Desktop-specific content</p>}
    </div>
  );
};

export default App;
