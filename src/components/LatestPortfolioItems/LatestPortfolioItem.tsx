import React from "react";
import styled from "styled-components";
import { Colors } from "@adamwebster/fused-components";

const StyledLatestPortfolioItem = styled.div`
  border-radius: 5px;
  background-size: cover;
  text-align: center;
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 5px;
  overflow: hidden;
  border: solid 1px ${Colors.border};
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    &:hover {
      filter: grayscale(0.5);
    }
  }
  @media only screen and (max-width: 1080px) {
    width: calc(24vw - 20px);
    height: calc(24vw - 20px);
    img {
      width: calc(24vw - 20px);
      height: calc(24vw - 20px);
    }
  }
  @media only screen and (max-width: 768px) {
    width: calc(33vw - 20px);
    height: calc(33vw - 20px);
    img {
      width: calc(33vw - 20px);
      height: calc(33vw - 20px);
    }
  }
  @media only screen and (max-width: 600px) {
    width: calc(33vw - 20px);
    height: calc(33vw - 20px);
    img {
      width: calc(33vw - 20px);
      height: calc(33vw - 20px);
    }
  }
`;

interface Props {
  imageURL: string;
  title?: string;
}
const LatestPortfolioItem = ({ imageURL, title = "Post Title" }: Props) => {
  return (
    <StyledLatestPortfolioItem>
      <StyledImageWrapper>
        <img alt={title} src={imageURL} />
      </StyledImageWrapper>
      {title}
    </StyledLatestPortfolioItem>
  );
};
export default LatestPortfolioItem;
