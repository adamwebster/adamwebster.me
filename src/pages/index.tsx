import React from "react";
import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { LatestPortfolioItems } from "../components/LatestPortfolioItems";
import { LatestBlogPosts } from "../components/LatestBlogPosts";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <LatestPortfolioItems />
      <LatestBlogPosts />
    </Layout>
  );
};

export default Index;
