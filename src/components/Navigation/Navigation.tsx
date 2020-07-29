import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { darken } from 'polished';
import { SiteContext } from '../../state';

interface SNProps {
  activePage?: () => string;
  headerColor: string;
}
const StyledNavigation = styled.nav<SNProps>`
  display: flex;
  justify-content: flex-end;
  height: 100%;

  ul {
    display: inline-flex;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;

    li {
      height: 100%;
      box-sizing: border-box;
      padding: 10px;

      &[data-content=${({ activePage }) => activePage} i]{
        background-color: ${({ headerColor }) => darken(0.1, headerColor)};
      }
      &:last-child {
        margin-right: 10px;
      }
      a {
        text-decoration: none;
        color: #fff;
        &:focus{
          outline: dotted 1px #fff;
          outline-offset: 5px;
        }
      }
    }
  }
`;
const Navigation = () => {
  const { globalState } = useContext(SiteContext);
  return (
    <StyledNavigation
      headerColor={globalState.headerColor}
      activePage={(): string => {
        if (typeof window !== 'undefined') {
          return window.location.href.split('/')[3];
        }
        return '';
      }}
    >
      <ul>
        <li data-content="portfolio">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li data-content="blog">
          <Link to="/blog">Blog</Link>
        </li>
        <li data-content="contact">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
