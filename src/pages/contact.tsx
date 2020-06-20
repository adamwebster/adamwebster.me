import React from 'react';
import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';

const Contact = () => {
  return (
    <Layout>
      <PageHeader>Contact</PageHeader>
      The best way to currently to get in contact with me is through twitter by
      following me{' '}
      <a href="https://twitter.com/adamwebster" target="_blank">
        @adamwebster
      </a>
      .
    </Layout>
  );
};

export default Contact;
