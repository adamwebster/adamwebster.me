import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledPageHeader = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 32px;
  margin-top: 30px;
  margin-bottom: 0;
`;
interface Props {
  children: ReactNode;
}
const PageHeader = ({ children }: Props) => {
  return <StyledPageHeader>{children}</StyledPageHeader>;
};

export default PageHeader;
