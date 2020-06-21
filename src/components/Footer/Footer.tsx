import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
const StyledFooter = styled.footer``;

const StyledFooterInner = styled.div`
  width: 1080px;
  margin: 50px auto 20px auto;
  font-size: 12px;
  padding: 5px;
  box-sizing: border-box;
  @media only screen and (max-width: 1080px) {
    width: 100%;
  }

  a {
    margin: 0 5px;
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterInner>
        &copy; 2020 Adam Webster
        <a rel="noopener" href="http://twitter.com/adamwebster" target="_blank">
          <FontAwesomeIcon title="Adam's twiter" icon={faTwitter} />
        </a>
        <a rel="noopener" href="https://github.com/adamwebster" target="_blank">
          <FontAwesomeIcon title="Adam's Github" icon={faGithub} />
        </a>
      </StyledFooterInner>
    </StyledFooter>
  );
};

export default Footer;
