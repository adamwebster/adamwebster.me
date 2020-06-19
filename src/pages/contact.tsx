import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { useDispatch } from 'react-redux';
import { setHeaderColor } from '../state/actions';
import { Colors } from '@adamwebster/fused-components';

const Contact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderColor('tomato'));
    return () => {
      dispatch(setHeaderColor(Colors.primary));
    };
  }, []);

  return (
    <Layout>
      <span>Contact 22</span>
    </Layout>
  );
};

export default Contact;
