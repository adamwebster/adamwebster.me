import React, { useEffect, useContext } from 'react';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
import SEO from '../components/seo';

import { SiteContext } from '../state';

const Index = () => {
 
  return (
    <Layout>
      <SEO />
      <Hero />
      Index
    </Layout>
  );
};

export default Index;
