import React from 'react';
import { Layout } from '../../components/Layout';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { BlogArticle } from '../../components/BlogArticle';
import { CategoryList } from '../../components/CategoryList';
import { PageHeader } from '../../components/PageHeader';
import SEO from '../../components/seo';
import { LinkButton } from '../../components/LinkButton';
const StyledBlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 20px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
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
      <SEO title={`${pageContext.category} | Blog`} />
      <section id="awm-blog">
        <StyledBlogWrapper>
          <PageHeader>Blog</PageHeader>

          <StyledBlogGrid>
            {edges.map(({ node }: any) => {
              return <BlogArticle postData={node} />;
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
  query($category: String) {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: {
        frontmatter: { draft: { eq: false }, category: { eq: $category } }
        fields: { sourceInstanceName: { eq: "blog-post" } }
      }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 600)
          frontmatter {
            title
            path
            date
            tagline
            heroColor
            category
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
