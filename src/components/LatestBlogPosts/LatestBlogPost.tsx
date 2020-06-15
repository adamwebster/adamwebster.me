import React from "react";
import styled from "styled-components";
import { Colors } from "@adamwebster/fused-components";

const StyledLatestBlogPost = styled.div`
  background-color: #fff;
  border: solid 1px ${Colors.border};
  border-radius: 5px;
  img {
    object-fit: cover;
    width: 100%;
    height: 150px;
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

const LatestBlogPost = () => {
  return (
    <StyledLatestBlogPost>
      <img
        alt="img1"
        src="https://drscdn.500px.org/photo/163833279/q%3D80_m%3D2000/v2?sig=3dca74cf8cd24a1adf31367f43dbcac9adfcff4eb3a9c1f25919dfa0aea39d0d"
      />
      <StyledBlogPostContent>
        <h2>
          <a href="http://adamwebster.me">Title of the Post</a>
        </h2>
        <StyledDate>02/02/2020</StyledDate>
        <p>
          This is some text of a blog post and would either be longer or shorter
          then this...
        </p>
      </StyledBlogPostContent>{" "}
    </StyledLatestBlogPost>
  );
};

export default LatestBlogPost;
