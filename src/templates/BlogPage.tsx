import React from 'react';
import { Layout } from '../components/Layout';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import LatestBlogPost from '../components/LatestBlogPosts/LatestBlogPost';
import { CategoryList } from '../components/CategoryList';
import { PageHeader } from '../components/PageHeader';

const StyledBlogGrid = styled.div`
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

const StyledBlogWrapper = styled.div`
  display: flex;
  margin-top: 50px;
`;

const StyledCategoryList = styled.div`
  min-width: 200px;
  margin-right: 30px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      background-color: #ccc;
      border: solid 1px #666;
      color: #666;
      margin: 10px 10px 10px 0px;
      padding: 5px;
      border-radius: 5px;
      box-sizing: border-box;
    }
  }
  h2 {
    text-transform: uppercase;
    font-weight: 200;
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
      <section id="awm-blog">
        <PageHeader>Blog</PageHeader>
        <StyledBlogWrapper>
          <CategoryList />
          <StyledBlogGrid>
            {edges.map(({ node }: any) => {
              return <LatestBlogPost node={node} key={node.id} />;
            })}
          </StyledBlogGrid>
        </StyledBlogWrapper>
      </section>
      {pageContext.numPages > 1 && (
        <StyledPaging>
          {pageContext.currentPage > 1 && (
            <Link to={previousPageUrl}>Previous Page</Link>
          )}{' '}
          {pageContext.currentPage !== pageContext.numPages && (
            <Link to={'/blog/' + (pageContext.currentPage + 1)}>Next Page</Link>
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

export default BlogPage;
