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
  max-width: 22rem;
  padding: 1rem 0;
  width: 100%;
`;

const SelectorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  position: relative;
  &::before {
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background-color: #e0e0e0;
    position: absolute;
    left: 50%;
  }
`;

const DetailsContainer = styled.div`
  align-items: top;
  border-top: 1px solid #e0e0e0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  &.top {
    justify-content: flex-end;
  }
  &.bottom {
    justify-content: flex-start;
  }
`;

const FoldEffectContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: flex-start;
  padding: 1.5rem 0;
  width: 100%;
`;

// const VDivider = styled.div`
//   border-left: 1px solid #e0e0e0;
//   height: 100%;
// `;

// const VDividerContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   /* margin: 0 1rem; */
//   height: 100%;
// `;

export const CompareAAs: React.FC = () => {
  const [wildtype, setWildtype] = useState<AminoAcidData | null>(null);
  const [mutant, setMutant] = useState<AminoAcidData | null>(null);

  return (
    <MainContainer>
      <ContentWrapper className="top">
        <SelectorsContainer>
          <CodonSelector codon={wildtype} setCodon={setWildtype} />
          <CodonSelector codon={mutant} setCodon={setMutant} isMutant={true} />
        </SelectorsContainer>
      </ContentWrapper>
      <ContentWrapper className="bottom">
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
      </ContentWrapper>
    </MainContainer>
  );
};
