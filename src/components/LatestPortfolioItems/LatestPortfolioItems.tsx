import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import { LinkButton } from '../LinkButton';
import LatestPortfolioItem from './LatestPortfolioItem';
import styled from 'styled-components';

const StyledLatestPortfolioSection = styled.div``;
const StyledLatestPortfolioSectionRowOne = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 400px;
  margin-bottom: 30px;
  gap: 30px;
`;

const StyledLatestPortfolioSectionRowTwo = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 300px;
  gap: 30px;
`;

const LatestPortfolioItems = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx(
            sort: { order: DESC, fields: frontmatter___date }
            limit: 5
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
              <StyledLatestPortfolioSectionRowOne>
                {edges.slice(0, 2).map(({ node }: any) => {
                  return <LatestPortfolioItem key={node.id} node={node} />;
                })}
              </StyledLatestPortfolioSectionRowOne>
              <StyledLatestPortfolioSectionRowTwo>
                {edges.slice(2, 5).map(({ node }: any) => {
                  return <LatestPortfolioItem key={node.id} node={node} />;
                })}
              </StyledLatestPortfolioSectionRowTwo>
            </StyledLatestPortfolioSection>
          </>
        );
      }}
    />
  );
};

export default LatestPortfolioItems;
