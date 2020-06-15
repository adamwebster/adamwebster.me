import React from "react";
import styled from "styled-components";

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
      }
    }
  }
`;
const Navigation = () => {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
