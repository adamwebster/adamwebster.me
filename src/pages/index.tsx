import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { LatestPortfolioItems } from '../components/LatestPortfolioItems';
import { LatestBlogPosts } from '../components/LatestBlogPosts';
import SEO from '../components/seo';
import { useDispatch } from 'react-redux';
import { SetLogoHidden } from '../state/actions';

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetLogoHidden(true));
    return () => {
      dispatch(SetLogoHidden(false));
    };
  }, []);
  return (
    <Layout hero={<Hero />}>
      <SEO title="Adam Webster Designer and Front-end Developer" />

      <LatestPortfolioItems />
      <LatestBlogPosts />
    </Layout>
  );
};

export default Index;
