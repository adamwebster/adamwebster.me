import React from 'react';
import { Layout } from '../../components/Layout';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { PageHeader } from '../../components/PageHeader';
import { BlogCategoryList } from '../../components/BlogCategoryList';
import SEO from '../../components/seo';
import GatsbyImage from 'gatsby-image';
import { StyledContentWrapper } from '../../styles';

const StyledCategoryList = styled.div`
  width: 300px;
  @media only screen and (max-width: 768px) {
    width: 100%;

    a {
      margin-right: 10px;
    }
  }
`;

const StyledPortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 20px;
  width: 100%;
  @media only screen and (max-width: 1080px) {
    grid-template-rows: repeat(2, calc(25vw - 20px));
    grid-template-columns: repeat(3, calc(25vw - 40px));
  }
  @media only screen and (max-width: 768px) {
    grid-template-rows: repeat(4, calc(38vw - 20px));
    grid-template-columns: repeat(3, calc(33vw - 20px));
  }
  @media only screen and (max-width: 600px) {
    margin-top: 20px;
    margin-left: 0;
    width: 100%;
    grid-template-rows: repeat(2, calc(50vw - 20px));
    grid-template-columns: repeat(3, calc(33vw - 20px));
  }
  @media only screen and (max-width: 400px) {
    margin-top: 20px;
    margin-left: 0;
    width: 100%;
    grid-template-rows: repeat(3, calc(70vw - 20px));
    grid-template-columns: repeat(2, calc(50vw - 20px));
  }
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
  @media only screen and (max-width: 768px) {
    flex-flow: column;
  }
`;

const StyledPortfolioItem = styled.div`
  height: 100%;
  overflow: hidden;
  .gatsby-image-wrapper {
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
  }
`;

interface Props {
  pageContext: any;
  data: any;
}
const PortfolioPage = ({ pageContext, data }: Props) => {
  const {
    allPortfolioItem: { nodes },
  } = data;
  const previousPageUrl =
    pageContext.currentPage === 2
      ? '/portfolio'
      : '/portfolio/' + (pageContext.currentPage - 1);
  return (
    <Layout>
      <SEO title={`${pageContext.category} | Portfolio`} />
      <StyledContentWrapper>
        <section id="awm-portfolio">
          <PageHeader>Portfolio</PageHeader>
          <StyledPortfolioWrapper>
            <StyledCategoryList>
              <BlogCategoryList />
            </StyledCategoryList>
            <StyledPortfolioGrid>
              {nodes.map((node: any) => {
                return (
                  <StyledPortfolioItem>
                    <Link to={node.path}>
                      <GatsbyImage
                        fluid={node.featuredImage.childImageSharp.fluid}
                      />
                    </Link>
                    {/* {node.title} */}
                  </StyledPortfolioItem>
                );
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
      </StyledContentWrapper>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($category: String) {
    allPortfolioItem(
      sort: { order: DESC, fields: date }
      filter: { draft: { eq: false }, category: { eq: $category } }
    ) {
      nodes {
        id
        excerpt
        title
        path
        date
        category
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        category
      }
    }
  }
`;

export default PortfolioPage;
