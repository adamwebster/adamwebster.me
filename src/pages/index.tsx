import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { LatestPortfolioItems } from '../components/LatestPortfolioItems';
import { LatestBlogPosts } from '../components/LatestBlogPosts';
import { SkillsGrid } from '../components/SkillsGrid';

import SEO from '../components/seo';
import { useDispatch } from 'react-redux';
import { SetLogoHidden, setHasHero } from '../state/actions';

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetLogoHidden(true));
    dispatch(setHasHero(true));

    return () => {
      dispatch(SetLogoHidden(false));
      dispatch(setHasHero(false));
    };
  }, []);
  return (
    <Layout hero={<Hero />}>
      <SEO />

      <LatestPortfolioItems />
      <SkillsGrid />
      <LatestBlogPosts />
    </Layout>
  );
};

export default Index;
