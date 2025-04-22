import React, { useState } from 'react';
import styles from '../css/CompareAAs.module.css';
import { AminoAcidData } from './AAData';
import { CodonSelector } from './BaseSelector';
import FoldEffect from './FoldEffect';

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
          {!wildtype && !mutant ? (
            <FoldEffect aminoAcid={null} initialState={true} />
          ) : (
            <>
              {wildtype && mutant && wildtype.name === mutant.name ? (
                <>
                  <FoldEffect aminoAcid={wildtype} />
                </>
              ) : (
                <>
                  <FoldEffect aminoAcid={wildtype} />
                  <FoldEffect aminoAcid={mutant} />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
