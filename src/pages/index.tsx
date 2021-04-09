import React from 'react';
import styled from 'styled-components';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
import SEO from '../components/seo';
import { FeaturedWork } from '../components/FeaturedWork';
import { LatestArticles } from '../components/LatestArticles';

import { StyledContentWrapper } from '../styles';

const Index = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <StyledContentWrapper>
        <FeaturedWork />
      </StyledContentWrapper>
      <LatestArticles />
    </Layout>
  );
};

export default Index;
