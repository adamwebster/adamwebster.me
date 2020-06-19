import React from 'react';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { LatestPortfolioItems } from '../components/LatestPortfolioItems';
import { LatestBlogPosts } from '../components/LatestBlogPosts';
import SEO from '../components/seo';

const Index = () => {
  return (
    <Layout hero={<Hero />}>
      <SEO title="Adam Webster Designer and Front-end Developer" />

      <LatestPortfolioItems />
      <LatestBlogPosts />
    </Layout>
  );
};

export default Index;
