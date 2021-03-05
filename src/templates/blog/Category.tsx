import React from 'react';
import { Layout } from '../../components/Layout';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { BlogArticle } from '../../components/BlogArticle';
import { PageHeader } from '../../components/PageHeader';
import SEO from '../../components/seo';
import { LinkButton } from '../../components/LinkButton';
import { StyledContentWrapper } from '../../styles';

const StyledBlogGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, minmax(1fr, 75px));
  gap: 1px;
  grid-template-areas:
    'grid1 grid1 grid1 grid1'
    'grid2 grid2 grid3 grid3'
    'grid4 grid5 grid6 grid7'
    'grid8 grid8 grid9 grid10';
  margin-top: 50px;
  @media only screen and (max-width: 768px) {
    /* grid-template-rows: minmax(500px, 100px); */
    grid-template-areas:
      'grid1 grid1 grid2 grid2'
      'grid3 grid3 grid4 grid4'
      'grid5 grid5 grid6 grid6'
      'grid7 grid7 grid8 grid8'
      'grid9 grid9 grid10 grid10';
  }
  @media only screen and (max-width: 500px) {
    /* grid-template-rows: minmax(500px, 500px); */
    grid-template-areas:
      'grid1'
      'grid2'
      'grid3'
      'grid4'
      'grid5'
      'grid6'
      'grid7'
      'grid8'
      'grid9'
      'grid10';
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
    allBlogPost: { nodes },
  } = data;
  const previousPageUrl =
    pageContext.currentPage === 2
      ? '/blog'
      : '/blog/' + (pageContext.currentPage - 1);
  return (
    <Layout>
      <SEO title={`${pageContext.category} | Blog`} />
      <section id="awm-blog">
        <StyledContentWrapper>
          <PageHeader>{pageContext.category}</PageHeader>

          <StyledBlogGrid>
            {nodes.map((node: any, index: number) => {
              return (
                <BlogArticle
                  index={index}
                  key={node.id}
                  gridArea={`grid${index + 1}`}
                  postData={node}
                />
              );
              // return <LatestBlogPost node={node} key={node.id} />;
            })}
          </StyledBlogGrid>
        </StyledContentWrapper>
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
    allBlogPost(
      sort: { order: DESC, fields: date }
      filter: { category: { eq: $category } }
    ) {
      nodes {
        id
        excerpt
        title
        path
        date
        category
        tagline
        heroColor
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              height: 600
              transformOptions: { cropFocus: CENTER, trim: 0 }
            )
          }
        }
        category
      }
    }
  }
`;

export default BlogPage;
