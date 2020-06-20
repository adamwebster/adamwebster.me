import React from 'react';

import SEO from '../components/seo';
import { Layout } from '../components/Layout';

const NotFoundPage = () => (
  <>
    <Layout>
      <SEO title="404: Not found" />
      <h1 style={{ marginTop: 60 + 'px' }}>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </>
);

export default NotFoundPage;
