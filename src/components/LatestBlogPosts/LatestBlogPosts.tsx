import React from 'react';
import styled from 'styled-components';
import { Button, Card, Colors, FCTheme } from '@adamwebster/fused-components';
import { useContext } from 'react';
import { StyledButton, StyledContentWrapper } from '../../styles';
import { SectionHeaderFront } from '../SectionHeader';
import { graphql, Link, StaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { relative } from 'path';

const StyledBlogPostGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 64px;
  padding: 0 16px;
  > div {
    flex: 1 1;
  }

  @media only screen and (max-width: 900px) {
    gap: 32px;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const StyledBlogPostCard = styled(Card)`
  border: none;
  display: flex;
  position: relative;
  flex-flow: column;
  flex: 1 1;
  overflow: hidden;
  height: 100%;
  padding-bottom: 30px;
  box-shadow: 0 0 10px ${({ theme }) => (theme === 'dark' ? '#000' : '#ccc')};
  z-index: 1;
`;

const StyledBlogPostFeaturedImageWrapper = styled.div`
  height: 150px;
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
`;

const StyledBlogPostContent = styled.div`
  padding: 16px;
  a {
    text-decoration: none;
  }
`;

const LatestBlogPosts = () => {
  const { theme } = useContext(FCTheme);
  const [LBP, LBPInView, LBPEntry] = useInView({
    triggerOnce: true,
    rootMargin: '-150px 0px',
  });
  return (
    <motion.div
      ref={LBP}
      initial={{ opacity: 0 }}
      animate={{ opacity: LBPInView ? 1 : 0 }}
      transition={{
        default: {
          duration: 0.5,
        },
      }}
    >
      <StyledContentWrapper>
        <SectionHeaderFront>Latest Blog Posts</SectionHeaderFront>
      </StyledContentWrapper>
      <StaticQuery
        query={graphql`
          query {
            allBlogPost(limit: 3, sort: { order: DESC, fields: date }) {
              nodes {
                id
                title
                date
                category
                path
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                excerpt
              }
            }
          }
        `}
        render={({ allBlogPost: { nodes } }) => {
          return (
            <StyledBlogPostGrid>
              {nodes.map((post: any, index: number) => (
                <motion.div
                  style={{ position: 'relative' }}
                  initial={{ top: '-40px' }}
                  animate={{ top: LBPInView ? '0px' : '-40px' }}
                  transition={{
                    default: {
                      duration: 0.5,
                      delay: index / 10,
                    },
                  }}
                >
                  <StyledBlogPostCard theme={theme}>
                    <StyledBlogPostFeaturedImageWrapper>
                      <Link to={post.path}>
                        <GatsbyImage
                          fluid={post.featuredImage.childImageSharp.fluid}
                        />
                      </Link>
                    </StyledBlogPostFeaturedImageWrapper>
                    <StyledBlogPostContent>
                      <Link to={post.path}>
                        <h2> {post.title}</h2>
                      </Link>
                      <p> {post.excerpt}</p>
                      <StyledButton primary>Read more</StyledButton>
                    </StyledBlogPostContent>
                  </StyledBlogPostCard>
                </motion.div>
              ))}
            </StyledBlogPostGrid>
          );
        }}
      />
    </motion.div>
  );
};
export default LatestBlogPosts;
