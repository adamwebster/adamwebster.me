import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { CategoryTag } from '../CategoryTag';
import { Colors } from '@adamwebster/fused-components';
import { useSelector } from 'react-redux';
import _ from 'lodash';

interface SIProps {
  bgColor: string;
}
const StyledImage = styled(Img)<SIProps>`
  height: 300px;
  border: solid 1px ${Colors.border};
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'transparent')};
`;

const PostTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 0;
  font-size: 40px;
  a {
    text-decoration: none;
  }
`;

const PostTagline = styled.p`
  margin-top: 0;
  font-weight: normal;
  font-size: 16px;
  color: ${({ theme }) =>
    theme === 'dark' ? Colors.darkModeLight : '#6E6E6E'};
`;

const PostContent = styled.div`
  width: 90%;
  margin: 50px auto 50px auto;
`;

interface Props {
  postData: any;
}
const BlogArticle = ({ postData }: Props) => {
  const theme = useSelector(
    (state: { SiteSettings: { theme: string } }) => state.SiteSettings.theme
  );
  return (
    <article>
      <StyledImage
        bgColor={postData.frontmatter.heroColor}
        fluid={postData.frontmatter.featuredImage.childImageSharp.fluid}
      />

      <PostContent>
        <header>
          <CategoryTag
            to={`/blog/${_.kebabCase(postData.frontmatter.category)}`}
          >
            {postData.frontmatter.category}
          </CategoryTag>
          <PostTitle>
            <Link to={postData.frontmatter.path}>
              {postData.frontmatter.title}
            </Link>
          </PostTitle>
          <PostTagline theme={theme}>
            {postData.frontmatter.tagline}
          </PostTagline>
        </header>
        {postData.excerpt}
      </PostContent>
    </article>
  );
};

export default BlogArticle;
