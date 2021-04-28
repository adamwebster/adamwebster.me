import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { SectionHeader } from '../SectionHeader';

const StyledGuestbookGrid = styled.div`
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

const GuestbookCard = ({ ...rest }) => {
  return (
    <>
      <SectionHeader>Sign My Guestbook</SectionHeader>
      <Card {...rest}>
        <StyledGuestbookGrid>
          <StyledAvatar />
          <span>Test</span>
          <StyledAvatar />
          <span>Test</span>
          <StyledAvatar />
          <span>Test</span>
          <StyledAvatar />
          <span>Test</span>
        </StyledGuestbookGrid>
      </Card>
    </>
  );
};

export default GuestbookCard;
