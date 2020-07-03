import React, { useContext } from 'react';
import styled from 'styled-components';
import { AWMVariables } from '../../styles/StyledVariables';
import { SiteContext } from '../../state';
import { Colors } from '@adamwebster/fused-components';
import { LinkButtonStandard } from '../LinkButton';

const StyledBuyMeACoffeeWidget = styled.div`
  display: flex;
  background-color: ${({ theme }) =>
    theme === 'dark' ? Colors.darkModeDarker : Colors.lightest};
  padding: 20px 10px;
  border-radius: ${AWMVariables.borderRadius};
  margin: 30px 0;
  h3 {
    padding-left: 0;
    border-left: none;
  }
`;

const StyledImageWrapper = styled.div`
  flex: 0 0 50px;
  display: flex;
  margin: 0 30px 0 20px;
  justify-content: center;
  align-items: flex-start;
  img {
    width: 100%;
  }
`;
const BuyMeACoffeeWidget = ({ ...rest }) => {
  const { globalState } = useContext(SiteContext);

  return (
    <>
      <StyledBuyMeACoffeeWidget
        theme={globalState.darkMode ? 'dark' : 'light'}
        {...rest}
      >
        <StyledImageWrapper>
          <img
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy me a Hot Chocolate"
          />
        </StyledImageWrapper>
        <div>
          <h3>Buy me a hot chocolate</h3>
          <p>
            Usually people would ask to buy them a coffee to help support their
            site and content they provide but I do not drink coffee so instead I
            will ask for you to buy me a hot chocolate.
          </p>
          <p>
            All of my content on my blog is offered ad free and I aim to keep it
            that way. Buying me a hot chocolate will help me to keep producing
            and improving on the content I provide.
          </p>
          <LinkButtonStandard
            style={{ textTransform: 'uppercase' }}
            href="https://www.buymeacoffee.com/adamwebster"
            target="_blank"
          >
            Buy me a hot chocolate
          </LinkButtonStandard>
        </div>
      </StyledBuyMeACoffeeWidget>
    </>
  );
};

export default BuyMeACoffeeWidget;
