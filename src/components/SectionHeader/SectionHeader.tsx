import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Colors } from '@adamwebster/fused-components';

const StyledSectionHeader = styled.h2`
  font-weight: bolder;
  font-size: 2.5rem;
  text-align: center;
  color: ${Colors.mediumdark};
  position: relative;
  width: fit-content;
  margin: 64px auto;
  &:after {
    content: '';
    position: absolute;
    height: 5px;
    background-color: ${Colors.medium};
    width: 75%;
    left: 50%;
    transform: translateX(-50%);
    bottom: -8px;
  }
`;

interface Props {
  children: ReactNode;
}
const SectionHeader = ({ children }: Props) => {
  return <StyledSectionHeader>{children}</StyledSectionHeader>;
};

export default SectionHeader;
