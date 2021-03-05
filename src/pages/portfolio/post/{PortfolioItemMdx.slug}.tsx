import React from 'react';
import { Layout } from '../../../components/Layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { PageHeader } from '../../../components/PageHeader';
import { CategoryTag } from '../../../components/CategoryTag';
import _ from 'lodash';
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';
import SEO from '../../../components/seo';
import styled from 'styled-components';
import { AWMVariables } from '../../../styles/StyledVariables';
import { Colors } from '@adamwebster/fused-components';
import { StyledContentWrapper } from '../../../styles';

interface StyledImageWrapperProps {
  imageWidth: string;
}
const StyledImageWrapper = styled.div<StyledImageWrapperProps>`
  max-width: ${({ imageWidth }) => imageWidth};
  margin: 80px auto;
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

  const image = getImage(featuredImage);
  const imgSrc = getSrc(featuredImage);
  return (
    <Layout>
      <SEO title={`${title} | Portfolio`} ogImage={imgSrc} />
      <StyledContentWrapper>
        {image && (
          <StyledImageWrapper
            imageWidth={featuredImageWidth ? featuredImageWidth : '1000px'}
          >
            <GatsbyImage
              loading="eager"
              objectFit="fill"
              image={image}
              alt={`${title} featured image`}
            />
          </StyledImageWrapper>
        )}
      </StyledContentWrapper>
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
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      category
    }
  }
`;

export default PortfolioPost;
