import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { b_, aaFromCodon, Base, BaseLetter, AminoAcidData } from './AAData';

interface BaseSelectorInputProps {
  color: string;
  isMutant?: boolean;
  isDimmed?: boolean;
}

const BaseSelectorInput = styled.div.attrs<BaseSelectorInputProps>(({ color, isMutant, isDimmed }) => ({ color, isMutant, isDimmed }))<BaseSelectorInputProps>`
  align-items: center;
  background-color: var(--gray-100);
  color: var(--ink-600);
  cursor: pointer;
  display: flex;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  height: 2rem;
  justify-content: center;
  opacity: ${(props) => (props.isDimmed ? 0.25 : 1)};
  transition: background-color ease-in-out 0.2s, opacity ease-in-out 0.2s;
  width: 2rem;
  ${(props) =>
    props.isMutant &&
    `background-image: linear-gradient(135deg, rgba(0, 0, 0, 0.05) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 75%, transparent 75%, transparent);
       background-size: 5px 5px;`}
  &:hover {
    background-color: var(--gray-200);
    color: var(--ink-800);
    opacity: 1;
  }
  &.active {
    background-color: ${(props) => props.color};
    color: white;
    font-weight: 700;
    ${(props) =>
      props.isMutant &&
      `background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent);
       background-size: 5px 5px;`}
  }
`;

interface BaseSelectorProps {
  onChange: (value: BaseLetter | null) => void;
  value: BaseLetter | null;
  isMutant?: boolean;
}

export const BaseSelector: React.FC<BaseSelectorProps> = ({ onChange, value, isMutant }) => {
  const [selected, setSelected] = useState<BaseLetter | null>(null);
  const [hovered, setHovered] = useState<BaseLetter | null>(null);
  const [hovering, setHovering] = useState(false);

  const handleClick = (value: BaseLetter) => {
    if (value === selected) {
      setSelected(null);
      onChange(null);
      return;
    }
    setSelected(value);
    onChange(value);
  };

  const handleMouseEnter = (value: BaseLetter) => {
    setHovered(value);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const handleBaseSelectorMouseEnter = () => {
    setHovering(true);
  };

  const handleBaseSelectorMouseLeave = () => {
    setHovering(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }} onMouseEnter={handleBaseSelectorMouseEnter} onMouseLeave={handleBaseSelectorMouseLeave}>
      {Object.values(b_).map((b: Base) => (
        <BaseSelectorInput
          key={b.letter}
          onClick={() => handleClick(b.letter)}
          onMouseEnter={() => handleMouseEnter(b.letter)}
          onMouseLeave={handleMouseLeave}
          className={selected === b.letter ? 'active' : ''}
          color={b.color}
          isMutant={isMutant}
          isDimmed={!hovering && selected !== null && selected !== b.letter && hovered !== b.letter}
        >
          {b.letter}
        </BaseSelectorInput>
      ))}
      <input type="hidden" value={value != null ? selected ?? '' : ''} />
    </div>
  );
};

const CodonName = styled.div`
  font-family: 'Merriweather', serif;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 1rem 0 0 0;
  height: 2rem;
  line-height: 2rem;
  &.null {
    color: var(--ink-100);
  }
`;

interface CodonSelectorProps {
  codon: AminoAcidData | null;
  setCodon: (codon: AminoAcidData | null) => void;
  isMutant?: boolean;
}

export const CodonSelector: React.FC<CodonSelectorProps> = ({ setCodon, isMutant }) => {
  const [b1, setB1] = useState<BaseLetter | null>(null);
  const [b2, setB2] = useState<BaseLetter | null>(null);
  const [b3, setB3] = useState<BaseLetter | null>(null);
  const [name, setName] = useState<string>('—');
  // const [peptideChain, setPeptideChain] = useState<AminoAcidData[]>([]);
  // const [codon, setCodon] = useState<string>('No amino acid');

  useEffect(() => {
    if (!b1 || !b2 || !b3) {
      setCodon(null);
      setName('—');
      return;
    }

    // Calculate the amino acid from the selected bases
    const aminoAcid = aaFromCodon(b1, b2, b3);
    if (aminoAcid == null) {
      setCodon(null);
      setName('None');
    } else {
      setCodon(aminoAcid);
      setName(aminoAcid.name);
    }
  }, [b1, b2, b3]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.25rem', justifyContent: 'center' }}>
        <BaseSelector onChange={setB1} value={b1} isMutant={isMutant} />
        <BaseSelector onChange={setB2} value={b2} isMutant={isMutant} />
        <BaseSelector onChange={setB3} value={b3} isMutant={isMutant} />
      </div>
      <CodonName className={name === '—' ? 'null' : ''}>{name}</CodonName>
      {/* <div>
        <p>Peptide Chain:</p>
        <ul>
          {peptideChain.map((aa, index) => (
            <li key={`${aa.abbr}-${index}`}>{aa.abbr}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};
