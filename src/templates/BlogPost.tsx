import React from 'react';
import { Layout } from '../components/Layout';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Colors } from '@adamwebster/fused-components';
import _ from 'lodash';

const StyledArticle = styled.article`
  width: 940px;
  margin: 0 auto;
`;

const StyledImage = styled(Img)`
  height: 300px;
  border: solid 1px ${Colors.border};
  margin-top: 40px;
`;

const PostTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 0;
  font-size: 40px;
`;

const PostTagline = styled.p`
  margin-top: 0;
  font-weight: normal;
  font-size: 16px;
  color: ${Colors.mediumdark};
`;

const PostHeader = styled.header`
  margin-bottom: 50px;
`;
const PostContent = styled.div`
  width: 90%;
  margin: 50px auto 50px auto;
`;

const PostCategory = styled(Link)`
  text-decoration: none;
  font-weight: bold;
`;
interface Props {
  data: any;
}

const BlogPost = ({ data }: Props) => {
  const {
    mdx: { frontmatter, body },
  } = data;
  console.log(frontmatter);
  return (
    <Layout>
      <StyledArticle>
        <MDXProvider components={{}}>
          <StyledImage
            fluid={frontmatter.featuredImage.childImageSharp.fluid}
          />

          <PostContent>
            <PostHeader>
              <PostCategory to={`/blog/${_.kebabCase(frontmatter.category)}`}>
                {frontmatter.category}
              </PostCategory>
              <PostTitle>{frontmatter.title}</PostTitle>
              <PostTagline>{frontmatter.tagline}</PostTagline>
            </PostHeader>
            <MDXRenderer>{body}</MDXRenderer>
          </PostContent>
        </MDXProvider>
      </StyledArticle>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date
        path
        title
        tags
        tagline
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

export default BlogPost;
