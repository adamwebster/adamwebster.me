import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { AWMColors } from '../../styles/StyledVariables';

interface SHSProps extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  textColor?: string;
}

const SectionHeaderStyled = styled.h2<SHSProps>`
  font-family: 'Dosis', sans-serif;
  color: ${({ textColor }) => textColor};
  font-weight: 800;
  font-size: 2rem;
`;

interface Props extends React.HtmlHTMLAttributes<HTMLHeadingElement>  {
  children: ReactNode;
  textColor?: string;
}
const SectionHeader = ({
  children,
  textColor = AWMColors.primaryColor,
  ...rest
}: Props) => {
  return (
    <SectionHeaderStyled textColor={textColor} {...rest}>
      {children}
    </SectionHeaderStyled>
  );
};

export default SectionHeader;
