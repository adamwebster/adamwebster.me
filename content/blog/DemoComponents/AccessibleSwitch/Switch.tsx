import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface StyledProps {
  checked: boolean;
}

const StyledSwitch = styled.div<StyledProps>`
  width: 44px;
  height: 22px;
  border-radius: 25px;
  padding: 2px;
  box-sizing: border-box;
  position: relative;
  background-color: #919191;
  background-color: ${({ checked }) => (checked ? '#006EF5' : '#919191')};
`;

const StyledSwitchToggle = styled.div<StyledProps>`
  background-color: #fff;
  width: 18px;
  height: 18px;
  border-radius: 50px;
  position: absolute;
  transition: all 0.2s ease-in-out;
  left: ${({ checked }) => (checked ? '24px' : '2px')};
`;

interface Props {
  checked: boolean;
  onChange: (e) => void;
}

const Switch = ({ checked, onChange, ...rest }: Props) => {
  const [active, setActive] = useState(checked);

  const toggleActive = () => {
    setActive(!active);
  };

  const handleKeyDown = e => {
    // When the space key is pressed
    if (e.keyCode === 32) {
      setActive(!active);
    }
  };

  useEffect(() => {
    if (onChange) {
      onChange(active);
    }
  }, [active]);

  return (
    <StyledSwitch
      role="switch"
      aria-checked={active}
      tabIndex={0}
      onClick={() => toggleActive()}
      onKeyDown={e => handleKeyDown(e)}
      checked={active}
      {...rest}
    >
      <StyledSwitchToggle checked={active} />
    </StyledSwitch>
  );
};

export default Switch;
