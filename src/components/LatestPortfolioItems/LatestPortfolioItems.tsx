import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import LatestPortfolioItem from './LatestPortfolioItem';
import styled from 'styled-components';
import { SectionHeader } from '../SectionHeader';

const StyledLatestPortfolioSection = styled.div`
  display: grid;
  gap: 20px;
  grid-template-areas:
    'grid1 grid1 grid2 grid3'
    'grid1 grid1 grid4 grid5';
  min-height: 400px;
  width: 100%;
`;

interface SLPIProps {
  templateArea: any;
}
const StyledLatestPortfolioItemTest = styled(LatestPortfolioItem)<SLPIProps>`
  grid-area: ${({ templateArea }) => templateArea};
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
            <SectionHeader>Latest Portfolio Items</SectionHeader>
            <StyledLatestPortfolioSection id="LatestWork">
              {edges.map(({ node }: any, index: any) => {
                return (
                  <StyledLatestPortfolioItemTest
                    templateArea={'grid' + (index + 1)}
                    key={node.id}
                    node={node}
                  />
                );
              })}
            </StyledLatestPortfolioSection>
          </>
        );
      }}
    />
  );
};

export default LatestPortfolioItems;
