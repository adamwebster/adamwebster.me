import React from 'react';
import { Layout } from '../components/Layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { PageHeader } from '../components/PageHeader';
import { CategoryTag } from '../components/CategoryTag';
import _ from 'lodash';
import SEO from '../components/seo';
interface Props {
  data: any;
}
const PortfolioPost = ({ data }: Props) => {
  const {
    mdx: { frontmatter, body },
  } = data;
  return (
    <Layout>
      <SEO title={`${frontmatter.title} | Portfolio`} />
      <PageHeader>{frontmatter.title}</PageHeader>
      <CategoryTag to={`/portfolio/${_.kebabCase(frontmatter.category)}`}>
        {frontmatter.category}
      </CategoryTag>
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
