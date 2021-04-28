import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { SectionHeader } from '../SectionHeader';

const StyledHobbiesGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 48px 1fr;
  align-items: center;
`;

const StyledAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #efefef;
`;

const HobbiesCard = ({ ...rest }) => {
  return (
    <>
      <SectionHeader>Hobbies</SectionHeader>
      <Card {...rest}>
        <StyledHobbiesGrid>
          <StyledAvatar />
          <span>Test</span>
          <StyledAvatar />
          <span>Test</span>
          <StyledAvatar />
          <span>Test</span>
          <StyledAvatar />
          <span>Test</span>
        </StyledHobbiesGrid>
      </Card>
    </>
  );
};

export default HobbiesCard;
