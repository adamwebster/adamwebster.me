import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import LatestBlogPost from './LatestBlogPost';
import { LinkButton } from '../LinkButton';
import { SectionHeader } from '../SectionHeader';

const StyledLatestBlogPostsSection = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 60px;
  box-sizing: border-box;
  flex-flow: column;
  padding-bottom: 30px;
  @media only screen and (max-width: 768px) {
  }
`;

const StyledLatestBlogPostsSectionInner = styled.div`
  flex-flow: row;
  display: flex;
  h1 {
    font-size: 40px;
    line-height: 1;
    margin: 0;
    font-weight: 300;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 600px) {
    flex-flow: column-reverse;
  }
`;

const StyledLatestBlogItems = styled.div`
  flex: 1 1;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 20px;
    margin-left: 0;
    margin-right: 0;
  }
`;

const StyledListMore = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 20px;
`;

const LatestBlogPosts = () => {
  return (
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
          <>
            <SectionHeader>Latest Blog Posts</SectionHeader>
            <StyledLatestBlogPostsSection id="LatestBlogPosts">
              <StyledLatestBlogPostsSectionInner>
                <StyledLatestBlogItems>
                  {nodes.map((node: any) => {
                    return <LatestBlogPost key={node.id} node={node} />;
                  })}
                </StyledLatestBlogItems>
              </StyledLatestBlogPostsSectionInner>
              <StyledListMore>
                <LinkButton to="/blog">Read More Blog Posts</LinkButton>
              </StyledListMore>
            </StyledLatestBlogPostsSection>
          </>
        );
      }}
    />
  );
};

export default LatestBlogPosts;
