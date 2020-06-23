import React from 'react';
import { Layout } from '../components/Layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { PageHeader } from '../components/PageHeader';
import { CategoryTag } from '../components/CategoryTag';
import _ from 'lodash';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import styled from 'styled-components';
import { AWMColors, AWMVariables } from '../styles/StyledVariables';
import { Colors } from '@adamwebster/fused-components';

interface StyledImageWrapperProps {
  imageWidth: string;
}
const StyledImageWrapper = styled.div<StyledImageWrapperProps>`
  width: ${({ imageWidth }) => imageWidth};
  margin: 0 auto;
  border: solid 1px ${Colors.border};
  border-radius: ${AWMVariables.borderRadius};
  overflow: hidden;
  box-shadow: 0 0 5px #aaa;
`;

const StyledPortfolioContent = styled.div`
  max-width: 700px;
  margin: 40px auto;
`;

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
      <StyledImageWrapper
        imageWidth={
          frontmatter.featuredImageWidth
            ? frontmatter.featuredImageWidth
            : '100%'
        }
      >
        <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
      </StyledImageWrapper>
      <StyledPortfolioContent>
        <MDXProvider components={{}}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </StyledPortfolioContent>
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
        featuredImageWidth
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
