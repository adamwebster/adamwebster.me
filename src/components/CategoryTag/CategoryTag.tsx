import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
const StyledCategoryTag = styled(Link)`
  padding: 5px 10px;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
  font-size: 0.8em;
  width: fit-content;
  text-decoration: none;
  display: inline-block;
  &[data-content='Web Design' i] {
    background-color: #d5e3ff;
    border: solid 1px #00266b;
    color: #00266b;
  }
  &[data-content='Front-end Development' i] {
    background-color: #fff2d5;
    border: solid 1px #8f5100;
    color: #8f5100;
  }
  &[data-content='General' i] {
    background-color: #e6d5ff;
    border: solid 1px #5900de;
    color: #5900de;
  }
`;

interface Props {
  children: ReactNode;
  to: string;
}

const CategoryTag = ({ children, ...rest }: Props) => {
  return (
    <StyledCategoryTag data-content={children} {...rest}>
      {children}
    </StyledCategoryTag>
  );
};

export default CategoryTag;
