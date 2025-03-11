import React, { useState } from 'react';
import styled from 'styled-components';
import { AminoAcidData, getFoldEffect } from './AAData';
import { CodonSelector } from './BaseSelector';

const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100vh;
  justify-content: center;
  max-width: 24rem;
  padding: 1rem 0;
  width: 100%;
`;

const SelectorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
`;

const DetailsContainer = styled.div`
  align-items: top;
  border-top: 1px solid #e0e0e0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  padding: 1rem 0;
  width: 100%;
`;

// const MainContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   padding: 1rem 0;
//   width: 24rem;
// `;

// const ContentWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 1rem;
//   width: 100%;
// `;

// const SelectorsContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 1rem;
//   width: 100%;
// `;

// const DetailsContainer = styled.div`
//   align-items: flex-start;
//   border-top: 1px solid #e0e0e0;
//   display: flex;
//   flex-direction: row;
//   gap: 1rem;
//   justify-content: center;
//   padding: 1rem 0;
//   width: 100%;
// `;

const FoldEffectContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: flex-start;
  padding: 1rem 0.25rem;
  width: 100%;
`;

const VDivider = styled.div`
  border-left: 1px solid #e0e0e0;
  height: 100%;
`;

const VDividerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* margin: 0 1rem; */
  height: 100%;
`;

export const CompareAAs: React.FC = () => {
  const [wildtype, setWildtype] = useState<AminoAcidData | null>(null);
  const [mutant, setMutant] = useState<AminoAcidData | null>(null);

  return (
    <MainContainer>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', width: '100%' }}>
        <SelectorsContainer>
          <CodonSelector codon={wildtype} setCodon={setWildtype} />
          <VDividerContainer>
            <VDivider />
          </VDividerContainer>
          <CodonSelector codon={mutant} setCodon={setMutant} isMutant={true} />
        </SelectorsContainer>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%', width: '100%' }}>
        <DetailsContainer>
          <FoldEffectContainer>
            {wildtype ? (
              <>
                <span>{getFoldEffect(wildtype.details)}</span>
              </>
            ) : (
              <span>wildtype</span>
            )}
          </FoldEffectContainer>
          <VDividerContainer>
            <VDivider />
          </VDividerContainer>
          <FoldEffectContainer>
            {mutant ? (
              <>
                <span>{getFoldEffect(mutant.details)}</span>
              </>
            ) : (
              <span>mutant</span>
            )}
          </FoldEffectContainer>
        </DetailsContainer>
      </div>
    </MainContainer>
  );
};
