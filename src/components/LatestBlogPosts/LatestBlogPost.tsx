import React, { useContext } from 'react';
import styled from 'styled-components';
import { Card } from '@adamwebster/fused-components';
import { SiteContext } from '../../state';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import duration from 'dayjs/plugin/duration';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { CategoryTag } from '../CategoryTag';

dayjs.extend(localeData);
dayjs.extend(advancedFormat);
dayjs.extend(duration);

const StyledImg = styled(Img)`
  object-fit: cover;
  width: 100%;
  height: 150px;
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
    globalState: { theme },
  } = useContext(SiteContext);
  const {
    frontmatter: {
      path,
      title,
      date,
      category,
      featuredImage: {
        childImageSharp: { fluid },
      },
    },
    excerpt,
  } = node;
  return (
    <Card as="article">
      <Link title={title} to={path}>
        <StyledImg fluid={fluid} />
      </Link>
      <StyledBlogPostContent>
        <CategoryTag>{category}</CategoryTag>
        <h2>
          <Link to={path}>{title}</Link>
        </h2>
        <StyledDate>{dayjs(date).format('MMMM Do YYYY')}</StyledDate>
        <p>{excerpt}</p>
      </StyledBlogPostContent>{' '}
    </Card>
  );
};

export default LatestBlogPost;
