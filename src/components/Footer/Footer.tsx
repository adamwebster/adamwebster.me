import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import dayjs from 'dayjs';
const StyledFooter = styled.footer``;

const StyledFooterInner = styled.div`
  width: 1200px;
  margin: 50px auto 60px auto;
  font-size: 12px;
  padding: 16px;
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
        &copy; {dayjs().format('YYYY')} Adam Webster
        <a
          rel="noopener"
          title="Follow Adam on Twitter"
          href="http://twitter.com/adamwebster"
          target="_blank"
        >
          <FontAwesomeIcon title="Adam's twiter" icon={faTwitter} />
        </a>
        <a
          rel="noopener"
          title="Adam's Github"
          href="https://github.com/adamwebster"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </StyledFooterInner>
    </StyledFooter>
  );
};

export default Footer;
