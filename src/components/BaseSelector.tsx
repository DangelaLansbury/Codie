import React, { useState, useEffect } from 'react';
import styles from '../css/BaseSelector.module.css';

import { b_, aaFromCodon, Base, BaseLetter, AminoAcidData, getTraitName } from './AAData';

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
        <div
          key={b.letter}
          onClick={() => handleClick(b.letter)}
          onMouseEnter={() => handleMouseEnter(b.letter)}
          onMouseLeave={handleMouseLeave}
          className={`${styles.baseSelectorInput} ${selected === b.letter ? `${styles.active}` : ''} ${isMutant ? styles.mutant : ''} ${!hovering && selected !== null && selected !== b.letter && hovered !== b.letter ? styles.dimmed : ''}`}
          style={{
            backgroundColor: selected === b.letter ? b.color : undefined,
          }}
        >
          {b.letter}
        </div>
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
  const [name, setName] = useState<string>('—');

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
    <div className={styles.codonSelectorColumn}>
      <div className={styles.baseSelectorGroup}>
        <BaseSelector onChange={setB1} value={b1} isMutant={isMutant} />
        <BaseSelector onChange={setB2} value={b2} isMutant={isMutant} />
        <BaseSelector onChange={setB3} value={b3} isMutant={isMutant} />
      </div>
      <div className={`${styles.codonName} ${name === '—' ? styles.null : ''}`}>{name}</div>
      {codon ? <div className={styles.foldEffect}>{getTraitName(codon.details)}</div> : <div className={`${styles.foldEffect} ${styles.null}`}>{isMutant ? 'select mutant' : 'select wildtype'}</div>}
    </div>
  );
};
