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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius nunc
          libero platea quis cras ultricies. Vitae quam vulputate cursus justo
          eu posuere malesuada. Sed pharetra, lectus tempor cum imperdiet non,
          nibh. Ultricies pharetra nec purus eget auctor orci hac. Consequat.
        </div>
      </StyledBioCard>
    </>
  );
};

export default BioCard;
