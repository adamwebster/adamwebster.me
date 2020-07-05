import React from 'react';
import { Layout } from '../components/Layout';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { PageHeader } from '../components/PageHeader';
import SEO from '../components/seo';
import { LinkButton } from '../components/LinkButton';
import { BlogArticle } from '../components/BlogArticle';
const StyledBlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 20px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
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

const StyledBlogWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    flex-flow: column;
  }
`;

interface Props {
  pageContext: any;
  data: any;
}
const BlogPage = ({ pageContext, data }: Props) => {
  const {
    allMdx: { edges },
  } = data;
  const previousPageUrl =
    pageContext.currentPage === 2
      ? '/blog'
      : '/blog/' + (pageContext.currentPage - 1);

  return (
    <Layout>
      <SEO title="Blog"></SEO>
      <section id="awm-blog">
        <StyledBlogWrapper>
          <PageHeader>Blog</PageHeader>

          <StyledBlogGrid>
            {edges.map(({ node }: any) => {
              return <BlogArticle key={node.id} postData={node} />;
              // return <LatestBlogPost node={node} key={node.id} />;
            })}
          </StyledBlogGrid>
        </StyledBlogWrapper>
      </section>
      {pageContext.numPages > 1 && (
        <StyledPaging>
          {pageContext.currentPage > 1 && (
            <LinkButton to={previousPageUrl}>Previous Page</LinkButton>
          )}{' '}
          {pageContext.currentPage !== pageContext.numPages && (
            <LinkButton to={'/blog/' + (pageContext.currentPage + 1)}>
              Next Page
            </LinkButton>
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
      filter: { fields: { sourceInstanceName: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 600)
          body
          frontmatter {
            title
            path
            date
            category
            tagline
            heroColor
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

export default BlogPage;
