import React, { useContext } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
  bgColor?: string;
  fluid?: any;
}

interface StyledArticleProps {
  gridArea: string;
}

const StyledArticle = styled.article<StyledArticleProps>`
  grid-area: ${({ gridArea }) => gridArea};
  position: relative;
  overflow: hidden;
  &:hover {
    opacity: 0.8;
  }
`;
const StyledImage = styled.div<SIProps>`
  min-height: 300px;
  height: 100%;
  max-height: 600px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'transparent')};
  img {
    height: 100%;
  }
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
  const image = getImage(postData.featuredImage);
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
        {image && (
          <StyledImage>
            <GatsbyImage
              loading="eager"
              objectFit="fill"
              image={image}
              alt={`${postData.title} featured image`}
            />
          </StyledImage>
        )}
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
      </Link>
    </StyledArticleMotion>
  );
};

export default BlogArticle;
