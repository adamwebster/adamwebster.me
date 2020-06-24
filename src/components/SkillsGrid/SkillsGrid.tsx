import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJsSquare,
  faHtml5,
  faReact,
  faCss3Alt,
  faWordpressSimple,
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const StyledSkillsGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: center;
  grid-gap: 20px;

  div {
    display: flex;
    flex-flow: column;
    text-align: center;
    align-items: center;
    span {
      padding-top: 10px;
    }
  }
`;

const FrontSectionTitle = styled.h1`
  font-size: 40px;
  line-height: 1;
  margin: 0;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 50px;
  text-align: center;
`;
const SkillsGrid = () => {
  return (
    <section id="skills">
      <FrontSectionTitle>My Skills</FrontSectionTitle>
      <StyledSkillsGrid>
        <div>
          <FontAwesomeIcon size="3x" icon={faJsSquare} />
          <span>JavaScript</span>
        </div>
        <div>
          <FontAwesomeIcon size="3x" icon={faHtml5} />
          <span>HTML5</span>
        </div>
        <div>
          <FontAwesomeIcon size="3x" icon={faCss3Alt} />
          <span>CSS3</span>
        </div>
        <div>
          <FontAwesomeIcon size="3x" icon={faReact} />
          <span>React</span>
        </div>
        <div>
          <FontAwesomeIcon size="3x" icon={faWordpressSimple} />
          <span>Wordpress</span>
        </div>
      </StyledSkillsGrid>
    </section>
  );
};

export default SkillsGrid;
