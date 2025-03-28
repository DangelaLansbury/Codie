import React from 'react';

export const ThreonineSVG: React.FC = () => {
  return (
    <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      {/* Central alpha carbon (Cα) */}
      <circle cx="200" cy="200" r="5" fill="black" />
      <text x="210" y="210" fontSize="16" fill="black">
        Cα
      </text>

      {/* Bond to NH₂ (amino group) */}
      <line x1="200" y1="200" x2="120" y2="120" stroke="black" strokeWidth="2" />
      <text x="80" y="110" fontSize="16" fill="black">
        NH₂
      </text>

      {/* Bond to COOH (carboxyl group) */}
      <line x1="200" y1="200" x2="280" y2="120" stroke="black" strokeWidth="2" />
      <text x="290" y="100" fontSize="16" fill="black">
        COOH
      </text>

      {/* Bond to the side chain (β–carbon) */}
      <line x1="200" y1="200" x2="200" y2="300" stroke="black" strokeWidth="2" />
      <circle cx="200" cy="300" r="5" fill="black" />
      <text x="210" y="310" fontSize="16" fill="black">
        Cβ
      </text>

      {/* Bond from β–carbon to OH group */}
      <line x1="200" y1="300" x2="150" y2="300" stroke="black" strokeWidth="2" />
      <text x="120" y="295" fontSize="16" fill="black">
        OH
      </text>

      {/* Bond from β–carbon to CH₃ group */}
      <line x1="200" y1="300" x2="250" y2="350" stroke="black" strokeWidth="2" />
      <text x="255" y="360" fontSize="16" fill="black">
        CH₃
      </text>
    </svg>
  );
};
