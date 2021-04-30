import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { Card } from '../Card';
import { SectionHeader } from '../SectionHeader';
import firebase from '../../firebase/firebase';
const StyledGuestbookGrid = styled.div``;

const StyledAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
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

const StyledEntry = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 48px 1fr;
  align-items: flex-start;
  padding-bottom: 16px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.borderColor};
  &:not(:first-child) {
    padding-top: 24px;
  }
  &:last-child {
    border-bottom: none;
    padding-bottom: none;
  }
`;
const StyledEntryContent = styled.div`
  p {
    margin: 8px 0px 8px 0;
  }
`;

const StyledErrorList = styled.ul`
  background-color: ${({ theme }) => theme.colors.error.background};
  color: ${({ theme }) => theme.colors.error.border};
  padding: 8px;
  box-sizing: border-box;
  margin: 0;
  list-style: none;
  font-size: 0.8rem;
`;
interface GuestbookItem {
  id: string;
  name: string;
  message: string;
  datePosted: Date;
  approved: boolean;
}

const GuestbookCard = ({ ...rest }) => {
  const [guestbookEntries, setGuestBookEntries] = useState<
    null | Array<GuestbookItem> | any
  >(null);
  const [guestbookEntry, setGuestbookEntry] = useState({
    name: '',
    message: '',
  });
  const [showError, setShowError] = useState(false);
  const [errorMessages, setErrorMessages] = useState<Array<any>>([]);
  const addItem = (e: FormEvent) => {
    e.preventDefault();
    let hasError = false;
    if (guestbookEntry.name === '' || guestbookEntry.message === '') {
      hasError = true;
    }
    if (hasError) {
      setShowError(true);
      const errorMessagesItems = [];
      if (guestbookEntry.name === '') {
        errorMessagesItems.push('Name required');
      }
      if (guestbookEntry.message === '') {
        errorMessagesItems.push('Message required');
      }
      setErrorMessages(errorMessagesItems);
      return false;
    }
    firebase.firestore().collection('guestbook').add({
      name: guestbookEntry.name,
      message: guestbookEntry.message,
      dateCreated: new Date(),
      approved: false,
    });
    setGuestbookEntry({ name: '', message: '' });
  };
  useEffect(() => {
    firebase
      .firestore()
      .collection('guestbook')
      .where('approved', '==', true)
      .orderBy('dateCreated', 'desc')
      .onSnapshot(snapshot => {
        console.log(snapshot.docs);
        const listItems = snapshot.docs.map(doc => ({
          /*
          Map each document into snapshot
          id and data are pushed into items array
          spread operator merges data to id. What is happening is the JavaScript object is being called.
          */
          id: doc.id,
          ...doc.data(),
        }));
        setGuestBookEntries(listItems);
      });
  }, []);
  return (
    <>
      <SectionHeader>Sign My Guestbook</SectionHeader>
      <Card {...rest}>
        <StyledGuestbookGrid>
          {guestbookEntries?.map((entry: GuestbookItem) => {
            return (
              <StyledEntry>
                <StyledAvatar>
                  {entry.name.split(' ')[0].slice(0, 1)}
                  {entry.name.split(' ')[1] &&
                    entry.name.split(' ')[1].slice(0, 1)}
                </StyledAvatar>
                <StyledEntryContent>
                  <strong>{entry.name}</strong>
                  <p>{entry.message}</p>
                </StyledEntryContent>
              </StyledEntry>
            );
          })}
        </StyledGuestbookGrid>
        <StyledForm onSubmit={e => addItem(e)}>
          <label>Your name</label>
          <StyledInput
            value={guestbookEntry.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setShowError(false);
              setGuestbookEntry({ ...guestbookEntry, name: e.target.value });
            }}
          />
          <label>Your message</label>
          <StyledTextArea
            value={guestbookEntry.message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setShowError(false);
              setGuestbookEntry({ ...guestbookEntry, message: e.target.value });
            }}
          />
          {showError && (
            <StyledErrorList>
              {errorMessages.map(error => (
                <li>{error}</li>
              ))}
            </StyledErrorList>
          )}
          <Button>Add to Guestbook</Button>
        </StyledForm>
      </Card>
    </>
  );
};

export default GuestbookCard;
