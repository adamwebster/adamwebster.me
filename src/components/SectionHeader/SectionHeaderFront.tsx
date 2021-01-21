import React, { ReactNode, useContext } from 'react';
import styled from 'styled-components';
import { Colors, FCTheme } from '@adamwebster/fused-components';

const StyledSectionHeaderFront = styled.h2`
  font-weight: 300;
  font-size: 2.5rem;
  text-align: center;
  color: ${({ theme }) =>
    theme === 'dark' ? Colors.darkModeMedium : Colors.mediumdark};
  position: relative;
  width: fit-content;
  margin: 64px auto;
  &:after {
    content: '';
    position: absolute;
    height: 5px;
    background-color: ${({ theme }) =>
      theme === 'dark' ? Colors.darkModeMediumDark : Colors.medium};
    width: 75%;
    left: 50%;
    transform: translateX(-50%);
    bottom: -16px;
  }
`;

interface Props {
  children: ReactNode;
}
const SectionHeaderFront = ({ children }: Props) => {
  const { theme } = useContext(FCTheme);
  return (
    <StyledSectionHeaderFront theme={theme}>
      {children}
    </StyledSectionHeaderFront>
  );
};

export default SectionHeaderFront;
