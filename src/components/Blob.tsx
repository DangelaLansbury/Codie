import React, { useState, useEffect } from 'react';

interface OrganicCircleProps {
  color?: string;
}

const Blob: React.FC<OrganicCircleProps> = ({ color = 'var(--gray-300)' }) => {
  const [blobSize, setBlobSize] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      setBlobSize(window.innerWidth < 768 ? 60 : 100);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ position: 'absolute', top: 16, left: 16 }}>
      <svg viewBox="0 0 100 100" width={blobSize} height={blobSize} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <mask id="donut-mask">
            <path fill="white">
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values={`
                M50 15
                  C65 15, 80 30, 80 50
                  C80 70, 65 85, 50 85
                  C35 85, 20 70, 20 50
                  C20 30, 35 15, 50 15Z;

                M50 20
                  C68 20, 80 32, 80 50
                  C80 68, 68 80, 50 80
                  C32 80, 20 68, 20 50
                  C20 32, 32 20, 50 20Z;

                M50 18
                  C62 16, 82 32, 78 50
                  C75 72, 65 83, 50 82
                  C30 81, 20 67, 22 50
                  C24 32, 35 22, 50 18Z;

                M50 15
                  C65 15, 80 30, 80 50
                  C80 70, 65 85, 50 85
                  C35 85, 20 70, 20 50
                  C20 30, 35 15, 50 15Z
              `}
              />
            </path>

            <circle cx="50" cy="50" r="16" fill="black" />
          </mask>
        </defs>

        <rect width="100" height="100" fill={color} mask="url(#donut-mask)" />
      </svg>
    </div>
  );
};

export default Blob;
