import React from 'react';
import { Layout } from '../../../components/Layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { PageHeader } from '../../../components/PageHeader';
import { CategoryTag } from '../../../components/CategoryTag';
import _ from 'lodash';
import Img from 'gatsby-image';
import SEO from '../../../components/seo';
import styled from 'styled-components';
import { AWMVariables } from '../../../styles/StyledVariables';
import { Colors } from '@adamwebster/fused-components';

interface StyledImageWrapperProps {
  imageWidth: string;
}
const StyledImageWrapper = styled.div<StyledImageWrapperProps>`
  width: ${({ imageWidth }) => imageWidth};
  margin: 80px auto;
  border: solid 1px ${Colors.border};
  border-radius: ${AWMVariables.borderRadius};
  overflow: hidden;
`;

const StyledCategoryTag = styled(CategoryTag)`
  margin-bottom: 20px;
`;

const StyledPortfolioContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  img {
    border: solid 1px ${Colors.border};
    border-radius: ${AWMVariables.borderRadius};
    display: block;
  }
`;

const StyledPageHeader = styled(PageHeader)`
  margin-bottom: 20px;
`;

interface Props {
  data: any;
}

const PortfolioPost = ({ data }: Props) => {
  const {
    portfolioItemMdx: {
      title,
      featuredImageWidth,
      featuredImage,
      category,
      body,
    },
  } = data;
  return (
    <Layout>
      <SEO title={`${title} | Portfolio`} />

      <StyledImageWrapper
        imageWidth={featuredImageWidth ? featuredImageWidth : '100%'}
      >
        <Img fluid={featuredImage.childImageSharp.fluid} />
      </StyledImageWrapper>
      <StyledPortfolioContent>
        <StyledPageHeader>{title}</StyledPageHeader>
        <StyledCategoryTag to={`/portfolio/${_.kebabCase(category)}`}>
          {category}
        </StyledCategoryTag>
        <MDXProvider components={{}}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </StyledPortfolioContent>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    portfolioItemMdx(id: { eq: $id }) {
      body
      date
      path
      title
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
`;

export default PortfolioPost;
