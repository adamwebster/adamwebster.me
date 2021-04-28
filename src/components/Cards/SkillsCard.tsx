import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { SectionHeader } from '../SectionHeader';

const StyledSkillsGrid = styled.div`
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

const SkillsCard = ({ ...rest }) => {
  return (
    <>
      <SectionHeader>Skills / Applications</SectionHeader>
      <Card {...rest}>
        <StyledSkillsGrid>
          <StyledAvatar />
          <span>Test</span>
          <StyledAvatar />
          <span>Test</span>
          <StyledAvatar />
          <span>Test</span>
          <StyledAvatar />
          <span>Test</span>
        </StyledSkillsGrid>
      </Card>
    </>
  );
};

export default SkillsCard;
