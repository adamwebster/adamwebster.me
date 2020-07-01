import React, { ReactNode } from 'react';
import styled from 'styled-components';

const SectionHeaderStyled = styled.h2`
  text-transform: uppercase;
  margin-top: 50px;
  font-size: 24px;
`;
interface Props {
  children: ReactNode;
}
const SectionHeader = ({ children }: Props) => {
  return <SectionHeaderStyled>{children}</SectionHeaderStyled>;
};

export default SectionHeader;
