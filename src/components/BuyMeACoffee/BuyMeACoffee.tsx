import React from 'react';
import styled from 'styled-components';
import { AWMVariables, AWMColors } from '../../styles/StyledVariables';

const StyledBMCButton = styled.a`
  padding: 7px 15px 7px 10px !important;
  line-height: 21px !important;
  height: 34px !important;
  text-decoration: none !important;
  display: inline-flex !important;
  background-color: ${({ theme }) =>
    `var(--color-primary, ${theme.colors.primary})`};
  color: ${({ theme }) =>
    `var(--color-buttonText, ${theme.colors.button.textColor})`};
  border-radius: 4px;
  border: 1px solid transparent !important;
  padding: 7px 15px 7px 10px !important;
  font-size: 16px !important;
  letter-spacing: -0.08px !important;
  margin: 0 auto;
  font-family: 'Lato', sans-serif !important;
  -webkit-box-sizing: border-box !important;
  box-sizing: border-box !important;
  transition: all 0.2s ease 0s;

  img {
    height: 20 !important;
    width: 21px !important;
    margin-bottom: 1px !important;
    border: none !important;
    vertical-align: middle !important;
  }

  &:hover,
  :active,
  :focus {
    text-decoration: none !important;
    background-color: ${({ theme }) =>
      `var(--color-buttonHover, ${theme.colors.button.hoverColor})`};
  }
`;
const BuyMeACoffee = ({ ...rest }) => {
  return (
    <>
      <StyledBMCButton
        className="bmc-button"
        target="_blank"
        rel="noopener"
        href="https://www.buymeacoffee.com/adamwebster"
        {...rest}
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
          alt="Buy me a Hot Chocolate"
        />
        <span style={{ marginLeft: 5 + 'px', fontSize: 19 + 'px !important;' }}>
          Buy me a Hot Chocolate
        </span>
      </StyledBMCButton>
    </>
  );
};

export default BuyMeACoffee;
