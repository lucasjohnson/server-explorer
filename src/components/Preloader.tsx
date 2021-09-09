import React, { useState } from 'react';
import { FaReact } from 'react-icons/fa';

const Preloader: React.FC<PreloaderProps> = () => {
  const [loading, setLoading] = useState<boolean>(true);

  setTimeout(() => {
    setLoading(false);
  }, 200);

  return (
    <div className="preloader" aria-busy={loading} aria-hidden={!loading}>
      <div className="preloader-icon">
        <FaReact />
      </div>
    </div>
  );
};

export default Preloader;
