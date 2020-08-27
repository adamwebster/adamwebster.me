import React, { useEffect, useContext } from 'react';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { LatestBlogPosts } from '../components/LatestBlogPosts';
import { SkillsGrid } from '../components/SkillsGrid';

import SEO from '../components/seo';

import { SiteContext } from '../state';

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
      <LatestBlogPosts />
      <SkillsGrid />
    </Layout>
  );
};

export default Index;
