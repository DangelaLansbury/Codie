import React, { useState } from 'react';
import styles from '../css/CompareAAs.module.css';
import { AminoAcidData, getTraitName } from './AAData';
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
            <div className={styles.foldEffectContainer}>{getTraitName(wildtype.details)}</div>
          ) : (
            <>
              <div className={styles.foldEffectContainer}>
                {wildtype ? (
                  <>
                    <span>{getTraitName(wildtype.details)}</span>
                  </>
                ) : (
                  <span></span>
                )}
              </div>
              <div className={styles.foldEffectContainer}>
                {mutant ? (
                  <>
                    <span>{getTraitName(mutant.details)}</span>
                  </>
                ) : (
                  <span></span>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
