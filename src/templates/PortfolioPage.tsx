import React from 'react';
import { Layout } from '../components/Layout';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { PageHeader } from '../components/PageHeader';
import SEO from '../components/seo';
import { StyledContentWrapper } from '../styles';
import GatsbyImage from 'gatsby-image';
import { motion } from 'framer-motion';

const StyledPortfolioGrid = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr; */
  gap: 1px;
  grid-template-rows: 300px 300px 300px;
  grid-template-areas:
    'grid1 grid1 grid2 grid3'
    'grid1 grid1 grid4 grid4'
    'grid5 grid6 grid7 grid8';
  width: 100%;
  @media only screen and (max-width: 1080px) {
    grid-template-areas:
      'grid1 grid1 grid2 grid2'
      'grid3 grid3 grid4 grid4'
      'grid5 grid5 grid6 grid6'
      'grid7 grid7 grid8 grid8';
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
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

interface StyledPortfolioItemProps {
  gridArea: string;
}

const StyledPortfolioItem = styled.div<StyledPortfolioItemProps>`
  height: 100%;
  overflow: hidden;
  grid-area: ${({ gridArea }) => gridArea};
  position: relative;
  .gatsby-image-wrapper {
    height: 100%;
    overflow: hidden;
  }
  a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const StyledPortfolioItemInfo = styled.div`
  height: 100px;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  bottom: 0;
  width: 100%;
  color: #fff !important;
  padding: 16px;
  box-sizing: border-box;
  p {
    font-size: 0.8rem;
  }
`;
interface Props {
  pageContext: any;
  data: any;
}

const StyledPortfolioItemMotion = motion.custom(StyledPortfolioItem);
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
      {console.log(nodes)}
      <SEO title="Portfolio" />
      <StyledContentWrapper>
        <section id="awm-portfolio">
          <PageHeader>Portfolio</PageHeader>
          <StyledPortfolioWrapper>
            <StyledPortfolioGrid>
              {nodes.map((node: any, index: number) => {
                return (
                  <StyledPortfolioItemMotion
                    initial={{ opacity: 0, transform: 'scale(0)' }}
                    animate={{ opacity: 1, transform: 'scale(1)' }}
                    gridArea={`grid${index + 1}`}
                    transition={{
                      default: { duration: 1, delay: index / 10 },
                      opacity: { duration: 2 },
                    }}
                  >
                    <Link to={node.path}>
                      <GatsbyImage
                        fluid={node.featuredImage.childImageSharp.fluid}
                      />
                    </Link>
                    <StyledPortfolioItemInfo>
                      <h3>{node.title}</h3>
                      <p>
                        {node.description.replaceAll('**', '').slice(0, 75)}...
                      </p>
                    </StyledPortfolioItemInfo>
                  </StyledPortfolioItemMotion>
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
  query($skip: Int!, $limit: Int!) {
    allPortfolioItem(
      sort: { order: DESC, fields: date }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        excerpt
        title
        path
        date
        category
        description
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
