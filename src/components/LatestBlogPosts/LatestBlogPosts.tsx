import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import { Button } from "@adamwebster/fused-components";
import LatestBlogPost from "./LatestBlogPost";

const StyledLatestBlogPostsSection = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 60px;
  box-sizing: border-box;
  flex-flow: column;
  border-bottom: solid 1px var(--border-color);
  padding-bottom: 30px;
  @media only screen and (max-width: 768px) {
    display: block;
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
  margin-right: 30px;
  flex: 1 1;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  @media only screen and (max-width: 768px) {
    display: block;
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
          allMdx(
            limit: 4
            filter: { fields: { sourceInstanceName: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                id
                frontmatter {
                  title
                  path
                  featuredImage
                }
                body
                excerpt
              }
            }
          }
        }
      `}
      render={({ allMdx: { edges } }) => {
        return (
          <>
            <StyledLatestBlogPostsSection id="LatestBlogPosts">
              <StyledLatestBlogPostsSectionInner>
                <StyledLatestBlogItems>
                  {edges.map(({ node }) => {
                    return <LatestBlogPost node={node} />;
                  })}
                </StyledLatestBlogItems>
                <div>
                  <h1>
                    Latest Blog
                    <br />
                    Posts
                  </h1>
                </div>
              </StyledLatestBlogPostsSectionInner>
              <StyledListMore>
                <Button primary>Read More</Button>{" "}
              </StyledListMore>
            </StyledLatestBlogPostsSection>
          </>
        );
      }}
    />
  );
};

export default LatestBlogPosts;
