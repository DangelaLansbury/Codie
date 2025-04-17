import React from 'react';
import styles from '../css/FoldEffect.module.css';
import { AminoAcidData, getTraitName } from './AAData';

interface FoldEffectProps {
  aminoAcid: AminoAcidData | null;
}

const FoldEffect: React.FC<FoldEffectProps> = ({ aminoAcid }) => {
  return (
    <div className={styles.foldEffectContainer}>
      {aminoAcid ? (
        <>
          <div className={styles.foldEffectImgContainer}></div>
          <span>{getTraitName(aminoAcid.details)}</span>
        </>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default FoldEffect;
