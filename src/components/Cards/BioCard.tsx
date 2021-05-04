import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { SectionHeader } from '../SectionHeader';
import profile from '../../assets/images/profile.jpg';

const StyledBioCard = styled(Card)`
  display: grid;
  grid-template-columns: 100px auto;
  gap: 32px;
`;

const StyledProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: solid 4px
    ${({ theme }) => `var(--color-primary, ${theme.colors.primary})`};
  display: flex;
  object-fit: cover;
  object-position: center center;
  overflow: hidden;
  box-sizing: border-box;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;
const BioCard = ({ ...rest }) => {
  return (
    <>
      <SectionHeader>About Adam Webster</SectionHeader>
      <StyledBioCard {...rest}>
        <StyledProfileImage>
          <img src={profile} />
        </StyledProfileImage>
        <div>
          Adam Webster is a UI Designer & Front-end developer. He has been
          coding and designing websites since he has 13 years old. His hobbies
          include: photography, drawing, hiking, and video games.
        </div>
      </StyledBioCard>
    </>
  );
};

export default BioCard;
