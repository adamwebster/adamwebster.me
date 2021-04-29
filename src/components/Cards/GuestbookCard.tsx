import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { Card } from '../Card';
import { SectionHeader } from '../SectionHeader';

const StyledGuestbookGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 48px 1fr;
  align-items: flex-start;
`;

const StyledAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #efefef;
`;

const StyledInput = styled.input`
  width: 100%;
  background-color: #f4f4f4;
  border: none;
  -webkit-appearance: none;
  height: 32px;
  border-radius: 4px;
  margin-bottom: 8px;
  box-sizing: border-box;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  background-color: #f4f4f4;
  border-radius: 4px;
  resize: none;
  border: none;
  height: 150px;
  box-sizing: border-box;
  padding: 4px;
  font: inherit;
`;

const StyledForm = styled.form`
  margin-top: 16px;
  button {
    width: 100%;
    margin-top: 8px;
  }
`;

const GuestbookCard = ({ ...rest }) => {
  return (
    <>
      <SectionHeader>Sign My Guestbook</SectionHeader>
      <Card {...rest}>
        <StyledGuestbookGrid>
          <StyledAvatar />
          <div>
            <strong>Test</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <StyledAvatar />
          <div>
            <strong>Test</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </StyledGuestbookGrid>
        <StyledForm>
          <label>Your name</label>
          <StyledInput />
          <label>Your message</label>
          <StyledTextArea />
          <Button>Add to Guestbook</Button>
        </StyledForm>
      </Card>
    </>
  );
};

export default GuestbookCard;
