import React from 'react';
import styled from 'styled-components';
import { Card, Colors, FCTheme } from '@adamwebster/fused-components';
import { useContext } from 'react';
import { StyledContentWrapper } from '../../styles';
import { SectionHeaderFront } from '../SectionHeader';
import { graphql, Link, StaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';

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
`;

const blogPosts = [
  {
    id: 1,
    title: 'Norther Caravan Logo',
    featuredImage:
      'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80',
    content: `This logo was designed for a Photographer that take photos in Ontario, Canada. He mainly takes photos of landscapes and animals. The circle and arrow part of the logo represents a compass with its needle pointing north and the tree represents the main subjects of his photos.

            You can take a look at his photos on his instagram @NorthernCaravan.`,
  },
  {
    id: 2,
    title: 'Project 2',
    bgColor: Colors.primary,
    featuredImage:
      'https://images.unsplash.com/photo-1551503766-ac63dfa6401c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
    content: `This logo was designed for a Photographer that take photos in Ontario, Canada. He mainly takes photos of landscapes and animals. The circle and arrow part of the logo represents a compass with its needle pointing north and the tree represents the main subjects of his photos.

            You can take a look at his photos on his instagram @NorthernCaravan.`,
  },
  {
    id: 3,
    title: 'Project 3',
    bgColor: 'purple',
    featuredImage:
      'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80',
    content: `This logo was designed for a Photographer that take photos in Ontario, Canada. He mainly takes photos of landscapes and animals. The circle and arrow part of the logo represents a compass with its needle pointing north and the tree represents the main subjects of his photos.

            You can take a look at his photos on his instagram @NorthernCaravan.`,
  },
];

const LatestBlogPosts = () => {
  const { theme } = useContext(FCTheme);
  return (
    <>
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
              {nodes.map((post: any) => (
                <StyledBlogPostCard theme={theme}>
                  <StyledBlogPostFeaturedImageWrapper>
                    <Link to={post.path}>
                      <GatsbyImage
                        fluid={post.featuredImage.childImageSharp.fluid}
                      />
                    </Link>
                  </StyledBlogPostFeaturedImageWrapper>
                  <StyledBlogPostContent>
                    {' '}
                    <h2> {post.title}</h2>
                    <p> {post.excerpt}</p>
                  </StyledBlogPostContent>
                </StyledBlogPostCard>
              ))}
            </StyledBlogPostGrid>
          );
        }}
      />
    </>
  );
};
export default LatestBlogPosts;
