import React from 'react';
import styled from 'styled-components';
import { AWMVariables } from '../../styles/StyledVariables';
const StyledCategoryList = styled.div`
  min-width: 200px;
  margin-right: 30px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      background-color: #d5e3ff;
      border: solid 1px #00266b;
      color: #00266b;
      margin: 10px 10px 10px 0px;
      padding: 5px;
      border-radius: ${AWMVariables.borderRadius};
      box-sizing: border-box;
    }
  }
  h2 {
    text-transform: uppercase;
    font-weight: 200;
  }
`;

const CategoryList = () => {
  return (
    <StyledCategoryList>
      <h2>Categories</h2>
      <ul>
        <li>Test Category</li>
      </ul>
    </StyledCategoryList>
  );
};

export default CategoryList;
