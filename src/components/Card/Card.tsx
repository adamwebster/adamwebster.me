import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { AWMVariables } from '../../styles/StyledVariables';

const StyledCard = styled.div`
  background-color: ${({ theme }) =>
    `var(--color-cardBGColor, ${theme.colors.cardBGColor})`};
  padding: 32px;
  border: solid 1px
    ${({ theme }) => `var(--color-borderColor, ${theme.colors.borderColor})`};
  border-radius: ${AWMVariables.borderRadius};
`;

interface Props {
  children: ReactNode;
}
const Card = ({ children, ...rest }: Props) => {
  return <StyledCard {...rest}>{children}</StyledCard>;
};

export default Card;
