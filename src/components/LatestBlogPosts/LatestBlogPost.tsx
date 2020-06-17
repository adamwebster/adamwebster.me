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

dayjs.extend(localeData);
dayjs.extend(advancedFormat);
dayjs.extend(duration);

const StyledImg = styled(Img)`
  object-fit: cover;
  width: 100%;
  height: 150px;
`;
const StyledLatestBlogPost = styled(Card)`
  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const StyledBlogPostContent = styled.article`
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
      featuredImage: {
        childImageSharp: { fluid },
      },
    },
    excerpt,
  } = node;
  return (
    <StyledLatestBlogPost theme={theme}>
      <Link to={path}>
        <StyledImg fluid={fluid} />
        {/* <img alt="img1" src={src} /> */}
      </Link>{' '}
      <StyledBlogPostContent>
        <h2>
          <Link to={path}>{title}</Link>
        </h2>
        <StyledDate>{dayjs(date).format('MMMM Do YYYY')}</StyledDate>
        <p>{excerpt}</p>
      </StyledBlogPostContent>{' '}
    </StyledLatestBlogPost>
  );
};

export default LatestBlogPost;
