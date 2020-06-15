import React from "react";
import LatestBlogPost from "./LatestBlogPost";
import { Button } from "@adamwebster/fused-components";
import styled from "styled-components";
import { AWMColors } from "../../styles/Colors";

const StyledLatestBlogPostsSection = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 60px;
  box-sizing: border-box;
  flex-flow: column;
  border-bottom: solid 1px var(--border-color);
  padding-bottom: 30px;
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
`;

const StyledLatestBlogItems = styled.div`
  margin-right: 30px;
  flex: 1 1;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

const StyledListMore = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 20px;
`;
const LatestBlogPosts = () => {
  return (
    <StyledLatestBlogPostsSection id="LatestBlogPosts">
      <StyledLatestBlogPostsSectionInner>
        <StyledLatestBlogItems>
          <LatestBlogPost />
          <LatestBlogPost />
          <LatestBlogPost />
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
        <Button buttonColor={AWMColors.primaryColor} primary>
          Read More
        </Button>{" "}
      </StyledListMore>
    </StyledLatestBlogPostsSection>
  );
};

export default LatestBlogPosts;
