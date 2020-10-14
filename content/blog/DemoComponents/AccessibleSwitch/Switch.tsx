import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

interface StyledSwitchProps {
  active: boolean;
}
const StyledSwitch = styled.div<StyledSwitchProps>`
  width: 44px;
  height: 22px;
  border-radius: 25px;
  padding: 2px;
  box-sizing: border-box;
  position: relative;
  background-color: ${({ active }) => (active ? '#006EF5' : '#919191')};
`;

interface SSTProps {
  active: boolean;
}
const StyledSwitchToggle = styled.div<SSTProps>`
  background-color: #fff;
  width: 18px;
  height: 18px;
  border-radius: 50px;
  position: absolute;
  transition: all 0.2s ease-in-out;
  left: ${({ active }) => (active ? '24px' : '2px')};
`;

interface Props {
  onChange: (e) => void;
  checked: boolean;
}
const Switch = ({ onChange, checked, ...rest }: Props) => {
  const [active, setActive] = useState(checked);
  const toggleActive = () => {
    setActive(!active);
  };

  const handleKeyDown = e => {
    console.log(e.keyCode);
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
    <>
      <StyledSwitch
        aria-checked={active}
        onClick={() => toggleActive()}
        active={active}
        tabIndex={0}
        role="checkbox"
        onKeyDown={e => handleKeyDown(e)}
        {...rest}
      >
        <StyledSwitchToggle active={active} />
      </StyledSwitch>
    </>
  );
};

export default Switch;
