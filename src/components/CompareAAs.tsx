import React, { useState } from 'react';
import styles from '../css/CompareAAs.module.css';
import { AminoAcidData, getFoldEffect } from './AAData';
import { CodonSelector } from './BaseSelector';

export const CompareAAs: React.FC = () => {
  const [wildtype, setWildtype] = useState<AminoAcidData | null>(null);
  const [mutant, setMutant] = useState<AminoAcidData | null>(null);

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.contentWrapper} ${styles.top}`}>
        <div className={styles.selectorsContainer}>
          <CodonSelector codon={wildtype} setCodon={setWildtype} />
          <CodonSelector codon={mutant} setCodon={setMutant} isMutant={true} />
        </div>
      </div>
      <div className={`${styles.contentWrapper} ${styles.bottom}`}>
        <div className={styles.detailsContainer}>
          {wildtype && mutant && wildtype.name === mutant.name ? (
            <div className={styles.foldEffectContainer}>{getFoldEffect(wildtype.details)}</div>
          ) : (
            <>
              <div className={styles.foldEffectContainer}>
                {wildtype ? (
                  <>
                    <span>{getFoldEffect(wildtype.details)}</span>
                  </>
                ) : (
                  <span>wildtype</span>
                )}
              </div>
              <div className={styles.foldEffectContainer}>
                {mutant ? (
                  <>
                    <span>{getFoldEffect(mutant.details)}</span>
                  </>
                ) : (
                  <span>mutant</span>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
