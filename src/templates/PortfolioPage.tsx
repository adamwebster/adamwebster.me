import React from "react";
import { Layout } from "../components/Layout";
import { Button } from "@adamwebster/fused-components";
import { graphql } from "gatsby";
import LatestPortfolioItem from "../components/LatestPortfolioItems/LatestPortfolioItem";
import styled from "styled-components";

const StyledPortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

const StyledPaging = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  button:first-child {
    margin-right: 15px;
  }
`;
interface Props {
  pageContext: any;
  data: any;
}
const PortfolioPage = ({ pageContext, data }: Props) => {
  const {
    allMdx: { edges },
  } = data;
  console.log(data);
  return (
    <Layout>
      <section id="awm-portfolio">
        <h1>Portfolio</h1>
        <StyledPortfolioGrid>
          {edges.map(({ node }: any) => {
            return <LatestPortfolioItem node={node} />;
          })}
        </StyledPortfolioGrid>
      </section>
      {pageContext.numPages > 1 && (
        <StyledPaging>
          <Button>Previous Page</Button>

          <Button>Next Page</Button>
        </StyledPaging>
      )}
    </Layout>
  );
};

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fields: { sourceInstanceName: { eq: "portfolio-item" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 80)
          frontmatter {
            title
            path
            date
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            category
            tags
          }
        }
      }
    }
  }
`;

export default PortfolioPage;
