import React, { useContext } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { CategoryTag } from '../CategoryTag';
import { Colors } from '@adamwebster/fused-components';
import _ from 'lodash';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { AWMVariables } from '../../styles/StyledVariables';
import { SiteContext } from '../../state';

dayjs.extend(advancedFormat);
interface SIProps {
  bgColor: string;
}
const StyledImage = styled(Img)<SIProps>`
  height: 300px;
  border: solid 1px ${Colors.border};
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: ${AWMVariables.borderRadius};
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
  text-transform: uppercase;
  font-weight: normal;
  font-size: 16px;
  color: ${({ theme }) =>
    theme === 'dark' ? Colors.darkModeLight : '#6E6E6E'};
`;

const PostContent = styled.div`
  width: 90%;
  margin: 50px auto 50px auto;
  header {
    margin-bottom: 40px;
  }
`;

interface Props {
  postData: any;
}
const BlogArticle = ({ postData }: Props) => {
  const { globalState } = useContext(SiteContext);
  const { darkMode } = globalState;
  return (
    <article>
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
          {dayjs(postData.date).format('MMMM Do YYYY')}
        </header>
        {postData.excerpt}
      </PostContent>
    </article>
  );
};

export default BlogArticle;
