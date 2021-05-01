import {
  faCameraRetro,
  faGamepad,
  faMountain,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { SectionHeader } from '../SectionHeader';
import { StyledAvatar } from '../../styles';
const StyledHobbiesGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 48px 1fr;
  align-items: center;
`;
const HobbiesCard = ({ ...rest }) => {
  const hobbies = [
    {
      label: 'Photography',
      icon: <FontAwesomeIcon icon={faCameraRetro} />,
    },
    {
      label: 'Video Games',
      icon: <FontAwesomeIcon icon={faGamepad} />,
    },
    {
      label: 'Drawing',
      icon: <FontAwesomeIcon icon={faPencilAlt} />,
    },
    {
      label: 'Hiking',
      icon: <FontAwesomeIcon icon={faMountain} />,
    },
  ];
  return (
    <>
      <SectionHeader>Hobbies</SectionHeader>
      <Card {...rest}>
        <StyledHobbiesGrid>
          {hobbies.map((hobby: { label: string; icon: ReactNode }) => (
            <>
              <StyledAvatar>{hobby.icon}</StyledAvatar>
              <span>{hobby.label}</span>
            </>
          ))}
        </StyledHobbiesGrid>
      </Card>
    </>
  );
};

export default HobbiesCard;
