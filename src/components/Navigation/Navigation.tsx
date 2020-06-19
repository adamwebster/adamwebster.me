import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  ul {
    display: inline-flex;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin-right: 15px;

      &:last-child {
        margin-right: none;
      }
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;
const Navigation = () => {
  return (
    <StyledNavigation>
      <ul>
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
