import React from 'react';
import { Layout } from '../components/Layout';
import { graphql, Link } from 'gatsby';
import LatestPortfolioItem from '../components/LatestPortfolioItems/LatestPortfolioItem';
import styled from 'styled-components';
import { PageHeader } from '../components/PageHeader';
import { CategoryList } from '../components/CategoryList';

const StyledPortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
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

const StyledPortfolioWrapper = styled.div`
  display: flex;
  margin-top: 50px;
`;

interface Props {
  pageContext: any;
  data: any;
}
const PortfolioPage = ({ pageContext, data }: Props) => {
  const {
    allMdx: { edges },
  } = data;
  const previousPageUrl =
    pageContext.currentPage === 2
      ? '/portfolio'
      : '/portfolio/' + (pageContext.currentPage - 1);
  return (
    <Layout>
      <section id="awm-portfolio">
        <PageHeader>Portfolio</PageHeader>
        <StyledPortfolioWrapper>
          <CategoryList />
          <StyledPortfolioGrid>
            {edges.map(({ node }: any) => {
              return <LatestPortfolioItem key={node.id} node={node} />;
            })}
          </StyledPortfolioGrid>
        </StyledPortfolioWrapper>
      </section>
      {pageContext.numPagesPort > 1 && (
        <StyledPaging>
          {pageContext.currentPage > 1 && (
            <Link to={previousPageUrl}>Previous Page</Link>
          )}{' '}
          {pageContext.currentPage !== pageContext.numPagesPort && (
            <Link to={'/portfolio/' + (pageContext.currentPage + 1)}>
              Next Page
            </Link>
          )}
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
