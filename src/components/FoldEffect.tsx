import React from 'react';
import styles from '../css/FoldEffect.module.css';
import { AminoAcidData, getTraitDescription, getTraitName } from './AAData';

interface FoldEffectProps {
  aminoAcid: AminoAcidData | null;
}

const FoldEffect: React.FC<FoldEffectProps> = ({ aminoAcid }) => {
  return (
    <div className={styles.foldEffectContainer}>
      {aminoAcid ? (
        <>
          <div className={styles.foldEffectText}>
            <span>{getTraitName(aminoAcid.details)}</span>
            <div className={styles.foldEffectDescription}>{getTraitDescription(aminoAcid.details)}</div>
          </div>
        </>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default FoldEffect;
