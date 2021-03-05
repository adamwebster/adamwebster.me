import React from 'react';
import { Layout } from '../components/Layout';
import styled from 'styled-components';
import { PageHeader } from '../components/PageHeader';
import SEO from '../components/seo';
import { LinkButton } from '../components/LinkButton';
import { BlogArticle } from '../components/BlogArticle';
import { StyledContentWrapper } from '../styles';

interface StyledBlogGridProps {
  numberOfItems: number;
}
const StyledBlogGrid = styled.div<StyledBlogGridProps>`
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
  max-width: 1200px;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    flex-flow: column;
  }
`;

interface Props {
  pageContext: any;
  data: any;
}

const Blog = ({ pageContext, data }: Props) => {
  const { articles } = pageContext;
  const previousPageUrl =
    pageContext.currentPage === 2
      ? '/blog'
      : '/blog/' + (pageContext.currentPage - 1);

  return (
    <Layout>
      <SEO title="Blog"></SEO>
      <StyledContentWrapper>
        <section id="awm-blog">
          <StyledBlogWrapper>
            <PageHeader>Blog</PageHeader>

            <StyledBlogGrid numberOfItems={articles.length}>
              {articles.map((node: any, index: number) => {
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
      </StyledContentWrapper>
    </Layout>
  );
};

export default Blog;
