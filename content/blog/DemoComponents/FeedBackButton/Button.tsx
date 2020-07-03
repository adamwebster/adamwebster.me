import React, { ReactNode, useState } from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

interface SBProps {
  isLoading?: boolean;
  completed?: boolean;
  failed?: boolean;
}

const StyledButton = styled.button<SBProps>`

  border-radius: 25px;
  border: none;
  font-size: 1rem;
  height: 36px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover:not([disabled]) {
    background-color: ${darken(0.1, '#a8d3ea')};
  }
  &[disabled] {
    background-color: #d9d9d9;
    color: #404040;
    cursor: not-allowed;
  }
  
  ${({ completed, failed, isLoading }) =>
    !completed &&
    !failed &&
    !isLoading &&
    css`
      background-color: #a8d3ea;
      color: #004970;
      padding: 0 40px;
    `}



  ${({ isLoading }) =>
    isLoading &&
    css`
      width: 36px;
    `}

  ${({ completed }) =>
    completed &&
    css`
      &[disabled] {
        background-color: #4de783;
        color: #08571f;
        width: 36px;
      }
    `}

  ${({ failed }) =>
    failed &&
    css`
      &[disabled] {
        background-color: #ff5959;
        color: #5b0006;
        width: 36px;
      }
    `}
`;

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  completed?: boolean;
  failed?: boolean;
}

const Button = ({ children, isLoading, completed, failed, ...rest }: Props) => {
  let icon = faSpinner;
  if (completed) {
    icon = faCheck;
  }
  if (failed) {
    icon = faTimes;
  }
  return (
    <StyledButton
      failed={failed}
      completed={completed}
      isLoading={isLoading}
      disabled={isLoading || completed || failed}
      {...rest}
    >
      {isLoading || completed || failed ? (
        <FontAwesomeIcon spin={isLoading ? true : false} icon={icon} />
      ) : (
        children
      )}
    </StyledButton>
  );
};

export const ButtonTest = () => {
  const [loading, setLoading] = useState(false);
  const [loadingFailed, setLoadingFailed] = useState(false);

  const [completed, setCompleted] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCompleted(true);
    }, 1000);
    setTimeout(() => {
      setCompleted(false);
    }, 1500);
  };

  const handleClickFail = () => {
    setLoadingFailed(true);
    setTimeout(() => {
      setLoadingFailed(false);
      setFailed(true);
    }, 1000);
    setTimeout(() => {
      setFailed(false);
    }, 1500);
  };
  return (
    <>
      <Button
        isLoading={loading}
        completed={completed}
        onClick={() => handleClick()}
      >
        Button
      </Button>

      <p>Fail Example</p>

      <Button
        isLoading={loadingFailed}
        failed={failed}
        onClick={() => handleClickFail()}
      >
        I will fail
      </Button>
    </>
  );
};
export default Button;
