import React, { useEffect, useContext } from 'react';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { FeaturedProjects } from '../components/FeaturedProjects';

import SEO from '../components/seo';

import { SiteContext } from '../state';
import { LatestBlogPosts } from '../components/LatestBlogPosts';

const Index = () => {
  const { dispatch } = useContext(SiteContext);
  useEffect(() => {
    dispatch({ type: 'SET_LOGO_HIDDEN', payload: true });
    dispatch({ type: 'SET_HAS_HERO', payload: true });

    return () => {
      dispatch({ type: 'SET_LOGO_HIDDEN', payload: false });
      dispatch({ type: 'SET_HAS_HERO', payload: false });
    };
  }, []);
  return (
    <Layout hero={<Hero />}>
      <SEO />
      <Services />
      <FeaturedProjects />
      <LatestBlogPosts />
    </Layout>
  );
};

export default Index;
