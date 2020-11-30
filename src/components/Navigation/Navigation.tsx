import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { SiteContext } from '../../state';
import { Colors } from '@adamwebster/fused-components';

interface SNProps {
  activePage?: () => string;
  headerColor: string;
}
const StyledNavigation = styled.nav<SNProps>`
  display: flex;
  justify-content: flex-end;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 8px 0 0 0;
    li {
      box-sizing: border-box;
      padding: 4px 16px;
      display: flex;
      height: 40px;

      &:last-child {
        margin-right: 10px;
      }
      a {
        text-decoration: none;
        color: inherit;
        &[aria-current='page'] {
          border-bottom: solid 4px ${Colors.primary};
        }
        &:focus {
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
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
