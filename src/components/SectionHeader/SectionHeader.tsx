import React, { ReactNode } from 'react';
import styled from 'styled-components';

const SectionHeaderStyled = styled.h3`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 24px;
`;
interface Props {
  children: ReactNode;
}
const SectionHeader = ({ children }: Props) => {
  return <SectionHeaderStyled>{children}</SectionHeaderStyled>;
};

export default SectionHeader;
