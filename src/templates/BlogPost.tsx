import React from "react";
import { Layout } from "../components/Layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

interface Props {
  data: any;
}
const BlogPost = ({ data }: Props) => {
  const {
    mdx: { frontmatter, body },
  } = data;
  return (
    <Layout>
      <h1> {frontmatter.title}</h1>
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

export default BlogPost;
