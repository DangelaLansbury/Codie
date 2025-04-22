import React from 'react';
import styles from '../css/FoldEffect.module.css';
import { AminoAcidData, getTraitDescription, getTraitName } from './AAData';

interface FoldEffectProps {
  aminoAcid: AminoAcidData | null;
  initialState?: boolean;
}

const FoldEffect: React.FC<FoldEffectProps> = ({ aminoAcid, initialState }) => {
  if (initialState) {
    return (
      <div className={styles.foldEffectContainer}>
        <div className={styles.foldEffectText}>
          <span className={styles.initialText}>Pick 3 nucleotide bases to make amino acids</span>
          <div className={styles.foldEffectDescription}>And compare folding traits to see the effects of SNPs</div>
        </div>
      </div>
    );
  }
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
