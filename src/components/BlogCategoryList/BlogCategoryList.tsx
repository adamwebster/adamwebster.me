import React from 'react';
import { CategoryTag } from '../CategoryTag';

const BlogCategoryList = () => {
  return (
    <>
      <h2>Categories</h2>
      <CategoryTag to="/portfolio/front-end-development">
        Front-end Development
      </CategoryTag>
      <CategoryTag to="/portfolio/graphic-design">Graphic Design</CategoryTag>
    </>
  );
};

export default BlogCategoryList;
