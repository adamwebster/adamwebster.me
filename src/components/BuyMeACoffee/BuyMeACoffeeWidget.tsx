import React, { useContext } from 'react';
import styled from 'styled-components';
import { AWMVariables } from '../../styles/StyledVariables';
import { SiteContext } from '../../state';
import { Colors } from '@adamwebster/fused-components';
import { LinkButtonStandard } from '../LinkButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

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
    border-radius: none !important;
    border: none !important;
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
          <h3 style={{ textTransform: 'uppercase' }}>Buy me a hot chocolate</h3>
          <p>
            Usually people would ask to buy them a coffee to help support their
            site and content they provide, but I do not drink coffee so instead
            I will ask for you to buy me a hot chocolate.
          </p>
          <p>
            All of the content on my blog is offered ad free, buying me a hot
            chocolate will make sure that it stays that way.
          </p>

          <p>
            Thanks,
            <br />
            Adam Webster{' '}
            <a href="https://twitter.com/adamwebster" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
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
