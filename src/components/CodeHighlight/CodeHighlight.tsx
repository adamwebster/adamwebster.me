import React, { useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMinus,
  faMinusSquare,
  faPlusSquare,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '@adamwebster/fused-components';
interface Props {
  children: any;
  className: any;
}

const StyledShowCode = styled.div`
  font: initial;
  font-family: 'Helvetica Neue', sans-serif;
`;
export default ({ children, className }: Props) => {
  const [showCode, setShowCode] = useState(true);
  const language = className.replace(/language-/, '');
  return (
    <>
      <StyledShowCode>
        <Button
          primary
          onClick={() => setShowCode(!showCode)}
          style={{ borderRadius: 25 + 'px' }}
        >
          {' '}
          {showCode ? 'Hide' : 'Show'} Code{' '}
          <FontAwesomeIcon
            style={{ marginLeft: 5 + 'px' }}
            icon={showCode ? faMinusSquare : faPlusSquare}
          />
        </Button>
      </StyledShowCode>
      {showCode && (
        <Highlight
          {...defaultProps}
          theme={theme}
          code={children}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{ ...style, padding: '20px', marginBottom: '40px' }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      )}
    </>
  );
};
