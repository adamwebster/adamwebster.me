import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledPullQuote = styled.blockquote`
  font-size: 1.3em;
  font-style: italic;
  font-weight: 300;
`;

const PullQuote = ({ children }: { children: ReactNode }) => {
  return <StyledPullQuote>{children}</StyledPullQuote>;
};

export default PullQuote;
