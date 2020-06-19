import React from 'react';
import { Layout } from '../components/Layout';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { PageHeader } from '../components/PageHeader';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import { CategoryTag } from '../components/CategoryTag';
import { Colors } from '@adamwebster/fused-components';
import { LinkButton } from '../components/LinkButton';

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

const StyledImage = styled(Img)`
  height: 300px;
  border: solid 1px ${Colors.border};
  margin-top: 40px;
  margin-bottom: 40px;
`;

const PostTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 0;
  font-size: 40px;
  a {
    text-decoration: none;
  }
`;

const PostTagline = styled.p`
  margin-top: 0;
  font-weight: normal;
  font-size: 16px;
  color: #6e6e6e;
  font-weight: 300;
`;

const PostContent = styled.div`
  width: 90%;
  margin: 50px auto 50px auto;
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
      <SEO title="Blog | Adam Webster Designer and Front-end Developer"></SEO>
      <section id="awm-blog">
        <StyledBlogWrapper>
          <PageHeader>Blog</PageHeader>

          <StyledBlogGrid>
            {edges.map(({ node }: any) => {
              return (
                <article>
                  <StyledImage
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  />

                  <PostContent>
                    <header>
                      <CategoryTag>{node.frontmatter.category}</CategoryTag>
                      <PostTitle>
                        <Link to={node.frontmatter.path}>
                          {node.frontmatter.title}
                        </Link>
                      </PostTitle>
                      <PostTagline>{node.frontmatter.tagline}</PostTagline>
                    </header>
                    {node.excerpt}
                  </PostContent>
                </article>
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
