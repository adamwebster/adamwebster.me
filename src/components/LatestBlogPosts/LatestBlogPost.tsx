import React, { useContext } from "react";
import styled from "styled-components";
import { Card } from "@adamwebster/fused-components";
import { SiteContext } from "../../state";

const StyledLatestBlogPost = styled(Card)`
  img {
    object-fit: cover;
    width: 100%;
    height: 150px;
  }
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
  const { globalState } = useContext(SiteContext);
  console.log(node);
  const { frontmatter } = node;
  return (
    <StyledLatestBlogPost theme={globalState.theme}>
      <img
        alt="img1"
        src="https://drscdn.500px.org/photo/163833279/q%3D80_m%3D2000/v2?sig=3dca74cf8cd24a1adf31367f43dbcac9adfcff4eb3a9c1f25919dfa0aea39d0d"
      />
      <StyledBlogPostContent>
        <h2>
          <a href={frontmatter.path}>{frontmatter.title}</a>
        </h2>
        <StyledDate>02/02/2020</StyledDate>
        <p>{node.excerpt}</p>
      </StyledBlogPostContent>{" "}
    </StyledLatestBlogPost>
  );
};

export default LatestBlogPost;
