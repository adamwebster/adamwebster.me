import React from 'react';
import { Layout } from '../components/Layout';
import { PageHeader } from '../components/PageHeader';
import SEO from '../components/seo';

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact | Adam Webster and Front-end Developer" />
      <PageHeader>Contact</PageHeader>
      <p>
        The best way to currently to get in contact with me is through twitter
        by following me{' '}
        <a href="https://twitter.com/adamwebster" target="_blank">
          @adamwebster
        </a>
        .
      </p>
    </Layout>
  );
};

export default Contact;
