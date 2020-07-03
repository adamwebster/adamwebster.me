import React from 'react';
import styled from 'styled-components';
import { Card } from '@adamwebster/fused-components';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import duration from 'dayjs/plugin/duration';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { CategoryTag } from '../CategoryTag';
import _ from 'lodash';
import { AWMVariables } from '../../styles/StyledVariables';
dayjs.extend(localeData);
dayjs.extend(advancedFormat);
dayjs.extend(duration);

const StyledCard = styled(Card)`
  overflow: hidden;
  border-radius: ${AWMVariables.borderRadius};
`;

interface SIProps {
  bgColor: string;
}
const StyledImg = styled(Img)<SIProps>`
  object-fit: cover;
  width: 100%;
  height: 150px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'transparent')};
`;

const StyledBlogPostContent = styled.div`
  padding: 10px;

  h2 {
    text-transform: uppercase;
    font-size: 20px;
    margin: 0;
    a {
      text-decoration: none;
    }
  }
`;

const StyledDate = styled.div`
  font-size: 13px;
`;

interface Props {
  node: any;
}
const LatestBlogPost = ({ node }: Props) => {
  const {
    frontmatter: {
      path,
      title,
      date,
      category,
      heroColor,
      featuredImage: {
        childImageSharp: { fluid },
      },
    },
    excerpt,
  } = node;

  return (
    <StyledCard forwardedAs="article">
      <Link title={title} to={path}>
        <StyledImg bgColor={heroColor} fluid={fluid} />
      </Link>
      <StyledBlogPostContent>
        <CategoryTag to={`/blog/${_.kebabCase(category)}`}>
          {category}
        </CategoryTag>
        <h2>
          <Link to={path}>{title}</Link>
        </h2>
        <StyledDate>{dayjs(date).format('MMMM Do YYYY')}</StyledDate>
        <p>{excerpt}</p>
      </StyledBlogPostContent>{' '}
    </StyledCard>
  );
};

export default LatestBlogPost;
