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
  padding: 1rem 0;
  width: clamp(20rem, 90vw, 24rem);
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
    background-color: var(--ink-100);
    position: absolute;
    left: 50%;
  }
`;

const DetailsContainer = styled.div`
  align-items: top;
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
          {wildtype && mutant && wildtype.name === mutant.name ? (
            <FoldEffectContainer>{getFoldEffect(wildtype.details)}</FoldEffectContainer>
          ) : (
            <>
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
            </>
          )}
        </DetailsContainer>
      </ContentWrapper>
    </MainContainer>
  );
};
