import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { useDispatch } from 'react-redux';
import { setHeaderColor } from '../state/actions';

const Contact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderColor('tomato'));
  }, []);

  return (
    <Layout>
      <span>Contact 22</span>
    </Layout>
  );
};

export default Contact;
