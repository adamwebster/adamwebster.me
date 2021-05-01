import {
  faCss3,
  faFigma,
  faHtml5,
  faJsSquare,
  faReact,
  faSketch,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { SectionHeader } from '../SectionHeader';
import { StyledAvatar } from '../../styles';

const StyledSkillsGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 48px 1fr;
  align-items: center;
`;

const SkillsCard = ({ ...rest }) => {
  const skills = [
    {
      label: 'Sketch',
      icon: <FontAwesomeIcon icon={faSketch} />,
    },
    {
      label: 'Figma',
      icon: <FontAwesomeIcon icon={faFigma} />,
    },
    {
      label: 'HTML',
      icon: <FontAwesomeIcon icon={faHtml5} />,
    },
    {
      label: 'CSS',
      icon: <FontAwesomeIcon icon={faCss3} />,
    },
    {
      label: 'React',
      icon: <FontAwesomeIcon icon={faReact} />,
    },
    {
      label: 'JavaScript',
      icon: <FontAwesomeIcon icon={faJsSquare} />,
    },
  ];
  return (
    <>
      <SectionHeader>Skills / Applications</SectionHeader>
      <Card {...rest}>
        <StyledSkillsGrid>
          {skills.map((hobby: { label: string; icon: ReactNode }) => (
            <>
              <StyledAvatar>{hobby.icon}</StyledAvatar>
              <span>{hobby.label}</span>
            </>
          ))}
        </StyledSkillsGrid>
      </Card>
    </>
  );
};

export default SkillsCard;
