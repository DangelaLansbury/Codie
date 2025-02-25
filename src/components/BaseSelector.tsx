import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { b_, aaFromCodon, Base, BaseLetter, AminoAcidData } from './AAData';

const BaseSelectorInput = styled.div`
  align-items: center;
  background-color: #cfbab3;
  cursor: pointer;
  display: flex;
  font-family: 'Fira Mono', monospace;
  font-weight: 500;
  height: 2rem;
  justify-content: center;
  transition: background-color ease-in-out 0.2s;
  width: 2rem;
  &:hover {
    background-color: #635e5a;
    color: white;
  }
  &.active {
    background-color: #ca6145;
    color: white;
  }
`;

interface BaseSelectorProps {
  onChange: (value: BaseLetter) => void;
  value: BaseLetter | null;
}

export const BaseSelector: React.FC<BaseSelectorProps> = ({ onChange, value }) => {
  const [selected, setSelected] = useState<BaseLetter | null>(null);

  const handleClick = (value: BaseLetter) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <div>
      {Object.values(b_).map((b: Base) => (
        <BaseSelectorInput key={b.letter} onClick={() => handleClick(b.letter)} className={selected === b.letter ? 'active' : ''}>
          {b.letter}
        </BaseSelectorInput>
      ))}
      <input type="hidden" value={value != null ? selected ?? '' : ''} />
    </div>
  );
};

interface CodonSelectorProps {
  codon: AminoAcidData | null;
  setCodon: (codon: AminoAcidData | null) => void;
}

export const CodonSelector: React.FC<CodonSelectorProps> = ({ codon, setCodon }) => {
  const [b1, setB1] = useState<BaseLetter | null>(null);
  const [b2, setB2] = useState<BaseLetter | null>(null);
  const [b3, setB3] = useState<BaseLetter | null>(null);
  // const [peptideChain, setPeptideChain] = useState<AminoAcidData[]>([]);
  // const [codon, setCodon] = useState<string>('No amino acid');

  useEffect(() => {
    const aminoAcid = aaFromCodon(b1, b2, b3);
    if (aminoAcid == null) {
      return;
    } else {
      // if (peptideChain.length < 4) {
      //   setPeptideChain((prevChain) => [...prevChain, aminoAcid]);
      // } else {
      //   // remove the first element and add the new one
      //   setPeptideChain((prevChain) => [...prevChain.slice(1), aminoAcid]);
      // }
      setCodon(aminoAcid);
    }
  }, [b1, b2, b3]);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.25rem', justifyContent: 'center' }}>
        <BaseSelector onChange={setB1} value={b1} />
        <BaseSelector onChange={setB2} value={b2} />
        <BaseSelector onChange={setB3} value={b3} />
      </div>
      <div>
        <p>{codon?.name}</p>
      </div>
      {/* <div>
        <p>Peptide Chain:</p>
        <ul>
          {peptideChain.map((aa, index) => (
            <li key={`${aa.abbr}-${index}`}>
              {aa.abbr} - {getFoldEffect(aa.details)}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};
