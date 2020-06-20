import React from 'react';
import { Layout } from '../components/Layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { PageHeader } from '../components/PageHeader';
import { CategoryTag } from '../components/CategoryTag';
interface Props {
  data: any;
}
const PortfolioPost = ({ data }: Props) => {
  const {
    mdx: { frontmatter, body },
  } = data;
  return (
    <Layout>
      <PageHeader>{frontmatter.title}</PageHeader>
      <CategoryTag>{frontmatter.category}</CategoryTag>
      <MDXProvider components={{}}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
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

export default PortfolioPost;
