import React, { useContext } from "react";
import styled from "styled-components";
import { Card } from "@adamwebster/fused-components";
import { SiteContext } from "../../state";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import advancedFormat from "dayjs/plugin/advancedFormat";
import duration from "dayjs/plugin/duration";

dayjs.extend(localeData);
dayjs.extend(advancedFormat);
dayjs.extend(duration);
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
  const {
    globalState: { theme },
  } = useContext(SiteContext);
  const {
    frontmatter: {
      path,
      title,
      date,
      featuredImage: {
        childImageSharp: {
          fluid: { src },
        },
      },
    },
    excerpt,
  } = node;
  return (
    <StyledLatestBlogPost theme={theme}>
      <a href={path}>
        <img alt="img1" src={src} />
      </a>
      <StyledBlogPostContent>
        <h2>
          <a href={path}>{title}</a>
        </h2>
        <StyledDate>{dayjs(date).format("MMMM Do YYYY")}</StyledDate>
        <p>{excerpt}</p>
      </StyledBlogPostContent>{" "}
    </StyledLatestBlogPost>
  );
};

export default LatestBlogPost;
