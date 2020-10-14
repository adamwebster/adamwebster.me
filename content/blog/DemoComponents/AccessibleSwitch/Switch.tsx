import React, {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
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
  background-color: ${({ active }) => (active ? '#006EF5' : '#dadada')};
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
}
const Switch = ({ onChange }: Props) => {
  const [active, setActive] = useState(false);
  let checkBoxRef = useRef<HTMLInputElement>(null);
  const toggleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (onChange) {
      onChange(checkBoxRef.current.checked);
    }
  }, [active]);

  return (
    <>
      <StyledSwitch onClick={() => toggleActive()} active={active}>
        <StyledSwitchToggle active={active} />
      </StyledSwitch>
      <input ref={checkBoxRef} type="checkbox" checked={active} />
    </>
  );
};

export default Switch;
