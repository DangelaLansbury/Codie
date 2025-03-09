import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { b_, aaFromCodon, Base, BaseLetter, AminoAcidData } from './AAData';

interface BaseSelectorInputProps {
  color: string;
  isMutant?: boolean;
}

const BaseSelectorInput = styled.div<BaseSelectorInputProps>`
  align-items: center;
  background-color: #f6f6f6;
  color: #6a6a6a;
  cursor: pointer;
  display: flex;
  font-family: 'Fira Mono', monospace;
  font-weight: 500;
  height: 2rem;
  justify-content: center;
  transition: background-color ease-in-out 0.2s;
  width: 2rem;
  ${(props) =>
    props.isMutant &&
    `background-image: linear-gradient(135deg, rgba(0, 0, 0, 0.025) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.025) 50%, rgba(0, 0, 0, 0.025) 75%, transparent 75%, transparent);
       background-size: 5px 5px;`}
  &:hover {
    background-color: #ebebeb;
    color: #565656;
  }
  &.active {
    background-color: ${(props) => props.color};
    color: white;
    ${(props) =>
      props.isMutant &&
      `background-image: linear-gradient(135deg, rgba(0, 0, 0, 0.05) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 75%, transparent 75%, transparent);
       background-size: 5px 5px;`}
  }
`;

interface BaseSelectorProps {
  onChange: (value: BaseLetter) => void;
  value: BaseLetter | null;
  isMutant?: boolean;
}

export const BaseSelector: React.FC<BaseSelectorProps> = ({ onChange, value, isMutant }) => {
  const [selected, setSelected] = useState<BaseLetter | null>(null);

  const handleClick = (value: BaseLetter) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
      {Object.values(b_).map((b: Base) => (
        <BaseSelectorInput key={b.letter} onClick={() => handleClick(b.letter)} className={selected === b.letter ? 'active' : ''} color={b.color} isMutant={isMutant}>
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
  isMutant?: boolean;
}

export const CodonSelector: React.FC<CodonSelectorProps> = ({ codon, setCodon, isMutant }) => {
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
      <div style={{ marginBottom: '1rem' }}>{isMutant ? 'Mutant' : 'Wildtype'}</div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.25rem', justifyContent: 'center' }}>
        <BaseSelector onChange={setB1} value={b1} isMutant={isMutant} />
        <BaseSelector onChange={setB2} value={b2} isMutant={isMutant} />
        <BaseSelector onChange={setB3} value={b3} isMutant={isMutant} />
      </div>
      <div style={{ margin: '1rem 0 0.25rem 0' }}>{codon ? <div>{codon.name}</div> : <div>None</div>}</div>
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
