import React, { useState } from 'react';
// import styled from 'styled-components';

import { AminoAcidData, getFoldEffect } from './AAData';
import { CodonSelector } from './BaseSelector';

export const CompareAAs: React.FC = () => {
  const [wildtype, setWildtype] = useState<AminoAcidData | null>(null);
  const [mutant, setMutant] = useState<AminoAcidData | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', padding: '1rem', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        <CodonSelector codon={wildtype} setCodon={setWildtype} />
        <CodonSelector codon={mutant} setCodon={setMutant} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'inline-flex', flexDirection: 'row', gap: '0.5rem', width: '100%', justifyContent: 'flex-end' }}>
          {wildtype ? (
            <>
              <span>{getFoldEffect(wildtype.details)}</span>
            </>
          ) : (
            <span>wildtype</span>
          )}
        </div>
        <div style={{ display: 'inline-flex', flexDirection: 'row', width: '24px', justifyContent: 'center' }}>
          <span>vs</span>
        </div>
        <div style={{ display: 'inline-flex', flexDirection: 'row', gap: '0.5rem', width: '100%', justifyContent: 'flex-start' }}>
          {mutant ? (
            <>
              <span>{getFoldEffect(mutant.details)}</span>
            </>
          ) : (
            <span>mutant</span>
          )}
        </div>
      </div>
    </div>
  );
};
