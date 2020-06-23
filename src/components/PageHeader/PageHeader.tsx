import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledPageHeader = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 32px;
  margin-top: 80px;
  margin-bottom: 0;
  @media only screen and (max-width: 600px) {
    margin-top: 140px;
  }
`;
interface Props {
  children: ReactNode;
}
const PageHeader = ({ children, ...rest }: Props) => {
  return <StyledPageHeader {...rest}>{children}</StyledPageHeader>;
};

export default PageHeader;
