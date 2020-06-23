import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { AWMVariables } from '../../styles/StyledVariables';
import { darken } from 'polished';
const StyledCategoryTag = styled(Link)`
  padding: 5px 10px;
  border-radius: ${AWMVariables.borderRadius};
  box-sizing: border-box;
  margin-bottom: 10px;
  font-size: 0.8em;
  width: fit-content;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s ease 0s;

  &[data-content='Web Design' i] {
    background-color: #d5e3ff;
    border: solid 1px #00266b;
    color: #00266b;
    &:hover {
      background-color: ${darken(0.1, '#d5e3ff')};
    }
  }
  &[data-content='Front-end Development' i] {
    background-color: #fff2d5;
    border: solid 1px #8f5100;
    color: #8f5100;
    &:hover {
      background-color: ${darken(0.1, '#fff2d5')};
    }
  }
  &[data-content='General' i] {
    background-color: #e6d5ff;
    border: solid 1px #5900de;
    color: #5900de;
    &:hover {
      background-color: ${darken(0.1, '#e6d5ff')};
    }
  }

  &[data-content='Graphic Design' i] {
    background-color: #e6d5ff;
    border: solid 1px #5900de;
    color: #5900de;
    &:hover {
      background-color: ${darken(0.1, '#e6d5ff')};
    }
  }
  &[data-content='Technology' i] {
    background-color: #d7e9ff;
    border: solid 1px #005ccc;
    color: #005ccc;
    &:hover {
      background-color: ${darken(0.1, '#d7e9ff')};
    }
  }
  &:hover {
    transform: scale(1.05);
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
