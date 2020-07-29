import React, { useEffect, useContext } from 'react';
import { Colors } from '@adamwebster/fused-components';
import { SiteContext } from '../../state';

interface Props {
  color?: string;
}
const SetHeaderColor = ({ color = 'tomato' }: Props) => {
  const { dispatch } = useContext(SiteContext);

  useEffect(() => {
    dispatch({ type: 'SET_HEADER_COLOR', payload: color });
    return () => {
      dispatch({ type: 'SET_HEADER_COLOR', payload: Colors.primary });
    };
  }, []);
  return null;
};

export default SetHeaderColor;
