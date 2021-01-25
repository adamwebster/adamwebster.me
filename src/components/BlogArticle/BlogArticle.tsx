import React, { useContext } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { CategoryTag } from '../CategoryTag';
import { Colors } from '@adamwebster/fused-components';
import _ from 'lodash';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { SiteContext } from '../../state';
import { motion } from 'framer-motion';

dayjs.extend(advancedFormat);
interface SIProps {
  bgColor: string;
}

interface StyledArticleProps {
  gridArea: string;
}

const StyledArticle = styled.article<StyledArticleProps>`
  grid-area: ${({ gridArea }) => gridArea};
  position: relative;
  overflow: hidden;
`;
const StyledImage = styled(Img)<SIProps>`
  min-height: 300px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'transparent')};
`;

const PostTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 0;
  font-size: 1rem;
  a {
    text-decoration: none;
  }
`;

const PostTagline = styled.p`
  margin-top: 0;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 0.8rem;
  color: ${({ theme }) =>
    theme === 'dark' ? Colors.darkModeLight : '#6E6E6E'};
`;

const PostContent = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  height: 120px;
  background-color: rgba(0, 0, 0, 0.8);
`;

interface Props {
  postData: any;
  gridArea: string;
  index: number;
}

const StyledArticleMotion = motion.custom(StyledArticle);
const BlogArticle = ({ postData, gridArea, index }: Props) => {
  const { globalState } = useContext(SiteContext);
  const { darkMode } = globalState;
  return (
    <StyledArticleMotion
      initial={{ opacity: 0, transform: 'scale(0)' }}
      animate={{ opacity: 1, transform: 'scale(1)' }}
      gridArea={gridArea}
      transition={{
        default: { duration: 1, delay: index / 10 },
        opacity: { duration: 2 },
      }}
    >
      <Link to={postData.path}>
        <StyledImage
          bgColor={postData.heroColor}
          fluid={postData.featuredImage.childImageSharp.fluid}
        />
      </Link>

      <PostContent>
        <header>
          <CategoryTag to={`/blog/${_.kebabCase(postData.category)}`}>
            {postData.category}
          </CategoryTag>
          <PostTitle>
            <Link to={postData.path}>{postData.title}</Link>
          </PostTitle>
          <PostTagline theme={darkMode ? 'dark' : 'light'}>
            {postData.tagline}
          </PostTagline>
        </header>
      </PostContent>
    </StyledArticleMotion>
  );
};

export default BlogArticle;
