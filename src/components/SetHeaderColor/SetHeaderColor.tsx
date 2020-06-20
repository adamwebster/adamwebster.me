import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setHeaderColor } from '../../state/actions';
import { Colors } from '@adamwebster/fused-components';

interface Props {
  color?: string;
}
const SetHeaderColor = ({ color = 'tomato' }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderColor(color));
    return () => {
      dispatch(setHeaderColor(Colors.primary));
    };
  }, []);
  return null;
};

export default SetHeaderColor;
