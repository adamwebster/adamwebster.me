import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { AWMColors } from '../../styles/StyledVariables';

interface SHSProps extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  textColor?: string;
}

const SectionHeaderStyled = styled.h2<SHSProps>`
  font-family: 'Dosis', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
`;

interface Props extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  textColor?: string;
}
const SectionHeader = ({ children, ...rest }: Props) => {
  return <SectionHeaderStyled {...rest}>{children}</SectionHeaderStyled>;
};

export default SectionHeader;
