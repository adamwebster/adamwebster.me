import React from "react";
import { graphql, StaticQuery } from "gatsby";

import LatestPortfolioItem from "./LatestPortfolioItem";
import { Button } from "@adamwebster/fused-components";
import styled from "styled-components";

const StyledLatestPortfolioSection = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 60px;
  box-sizing: border-box;
  flex-flow: column;
  border-bottom: solid 1px var(--border-color);
  padding-bottom: 30px;
`;

const StyledLatestPortfolioSectionInner = styled.div`
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
    flex-flow: column;
  }
`;

const StyledLatestPortfolioItems = styled.div`
  margin-left: 30px;
  flex: 1 1;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  @media only screen and (max-width: 1080px) {
    grid-template-rows: repeat(2, calc(25vw - 20px));
    grid-template-columns: repeat(3, calc(25vw - 20px));
  }
  @media only screen and (max-width: 768px) {
    grid-template-rows: 33vw 33vw;
    grid-template-columns: 33vw 33vw;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 20px;
    margin-left: 0;
    width: 100%;
    grid-template-rows: repeat(2, calc(33vw - 20px));
    grid-template-columns: repeat(3, calc(33vw - 20px));
  }
`;

const StyledListMore = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 20px;
`;

const LatestPortfolioItems = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx(
            limit: 6
            filter: { fields: { sourceInstanceName: { eq: "portfolio-item" } } }
          ) {
            edges {
              node {
                id
                frontmatter {
                  title
                  date
                  path
                  featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
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
            <StyledLatestPortfolioSection id="LatestWork">
              <StyledLatestPortfolioSectionInner>
                <div>
                  <h1>
                    My Latest
                    <br />
                    Work
                  </h1>
                </div>
                <StyledLatestPortfolioItems>
                  {edges.map(({ node }: any) => {
                    return <LatestPortfolioItem key={node.id} node={node} />;
                  })}
                </StyledLatestPortfolioItems>
              </StyledLatestPortfolioSectionInner>
              <StyledListMore>
                <Button primary>Read More</Button>
              </StyledListMore>
            </StyledLatestPortfolioSection>
          </>
        );
      }}
    />
  );
};

export default LatestPortfolioItems;
