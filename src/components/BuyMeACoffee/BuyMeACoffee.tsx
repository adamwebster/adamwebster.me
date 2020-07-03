import React from 'react';
import styled from 'styled-components';
import { AWMVariables, AWMColors } from '../../styles/StyledVariables';

const StyledBMCButton = styled.a`
  padding: 7px 15px 7px 10px !important;
  line-height: 21px !important;
  text-transform: uppercase;
  height: 34px !important;
  text-decoration: none !important;
  display: inline-flex !important;
  color: #ffffff !important;
  background-color: ${AWMColors.primaryColor};
  border-radius: ${AWMVariables.borderRadius};
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
    box-shadow: none !important;
    border: none !important;
    vertical-align: middle !important;
  }

  &:hover,
  :active,
  :focus {
    text-decoration: none !important;
    opacity: 0.85 !important;
    color: #ffffff !important;
    transform: scale(1.05);
  }
`;
const BuyMeACoffee = ({ ...rest }) => {
  return (
    <>
      <StyledBMCButton
        className="bmc-button"
        target="_blank"
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