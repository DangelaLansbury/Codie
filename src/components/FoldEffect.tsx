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
          <div className={styles.foldEffectImgContainer}>
            <img src="src/components/graphics/testCube.png" alt="Fold Effect Placeholder" className={styles.foldEffectImg} />
          </div>
          <span>{getTraitName(aminoAcid.details)}</span>
        </>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default FoldEffect;
