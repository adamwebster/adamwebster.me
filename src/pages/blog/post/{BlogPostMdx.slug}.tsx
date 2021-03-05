import React, { useEffect, useContext } from 'react';
import { BlogPostLayout } from '../../../components/BlogPostLayout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled, { css } from 'styled-components';
import { Colors, Button } from '@adamwebster/fused-components';
import _ from 'lodash';
import SEO from '../../../components/seo';
import { CodeHighlight } from '../../../components/CodeHighlight';
import {
  BuyMeACoffee,
  BuyMeACoffeeWidget,
} from '../../../components/BuyMeACoffee';
import { FloatingImage } from '../../../components/FloatingImage';

import { CategoryTag } from '../../../components/CategoryTag';
import { SetHeaderColor } from '../../../components/SetHeaderColor';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { AWMVariables } from '../../../styles/StyledVariables';
import {
  TwitterShareButton,
  RedditIcon,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  RedditShareButton,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share';
import { SiteContext } from '../../../state';
import { SectionHeader } from '../../../components/SectionHeader';
import { ExternalLink } from '../../../components/ExternalLink';
import { LinkButton } from '../../../components/LinkButton';
dayjs.extend(advancedFormat);

interface SAProps {
  layout?: string;
}
const StyledArticle = styled.article<SAProps>`
  width: ${({ layout }) => (layout === 'full' ? '100vw' : '940px')};
  margin: 0 auto;
  grid-gap: 20px;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }

  @media only screen and (max-width: 1080px) {
    ${({ layout }) =>
      layout !== 'full' &&
      css`
        padding: 0 10px;
        box-sizing: border-box;
      `}
  }
`;

interface SIProps {
  layout?: string;
  fluid?: any;
}
const StyledImage = styled.div<SIProps>`
  ${({ layout }) =>
    layout !== 'full'
      ? css`
          margin-top: 80px;
          @media only screen and (max-width: 600px) {
            margin-top: 120px;
          }
        `
      : css`
          .gatsby-image-wrapper {
            object-fit: cover;
            object-position: center center;
          }
        `}
`;

const PostTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 0;
  font-size: 40px;
  border-left: none;
  padding-left: 0;
`;

const PostTagline = styled.p`
  margin-top: 0;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 10px;
  color: ${({ theme }) =>
    theme === 'dark' ? Colors.darkModeLight : '#6E6E6E'};
`;

const PostHeader = styled.header`
  margin-bottom: 50px;
`;

interface PSProps {
  layout?: string;
}

const PostContent = styled.div<PSProps>`
  width: 90%;
  ${({ layout }) =>
    layout === 'full'
      ? css`
          max-width: 700px;
        `
      : css`
          max-width: 700px;
        `};

  margin: 50px auto 50px auto;
  @media only screen and (max-width: 1080px) {
    padding: 0 10px;
    box-sizing: border-box;
  }
  .gatsby-resp-image-wrapper,
  .gatsby-image-wrapper {
    border: solid 1px ${Colors.border};
    border-radius: ${AWMVariables.borderRadius};
    display: block;
    overflow: hidden;
    box-sizing: border-box;
  }
`;

interface SIWProps {
  bgColor: string;
  layout: string;
}

const StyledImageWrapper = styled.div<SIWProps>`
  width: 100%;
  margin-top: ${({ layout }) => (layout === 'full' ? '50px' : '40px')};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'transparent')};
`;

const StyledShareRow = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 32px);
  button {
    cursor: pointer !important;
  }
`;
interface Props {
  data: any;
}

const BlogPost = ({ data }: Props) => {
  const { dispatch, globalState } = useContext(SiteContext);
  const {
    blogPostMdx: {
      layout,
      defaultHeaderBorderColor,
      heroColor,
      title,
      featuredImage,
      category,
      showCoffeeButton,
      path,
      tagline,
      date,
      body,
    },
  } = data;

  useEffect(() => {
    if (layout === 'full') {
      dispatch({ type: 'SET_HAS_HERO', payload: true });
    }
    return () => {
      dispatch({ type: 'SET_HAS_HERO', payload: false });
    };
  }, []);
  const image = getImage(featuredImage);

  return (
    <BlogPostLayout
      defaultHeaderBorderColor={
        defaultHeaderBorderColor ? defaultHeaderBorderColor : ''
      }
      layout={layout}
    >
      {heroColor && <SetHeaderColor color={heroColor} />}
      <SEO
        title={`${title} | Blog`}
        //    ogImage={featuredImage.childImageSharp.fluid.src}
      ></SEO>
      <StyledArticle layout={layout}>
        <MDXProvider
          components={{
            Button,
            LinkButton,
            code: CodeHighlight,
            BuyMeACoffeeWidget,
            SectionHeader,
            ExternalLink,
            FloatingImage,
          }}
        >
          {image && (
            <StyledImageWrapper
              layout={layout}
              bgColor={layout === 'full' ? heroColor : 'transparent'}
            >
              <StyledImage layout={layout}>
                <GatsbyImage
                  loading="eager"
                  objectFit="fill"
                  image={image}
                  alt={`${title} featured image`}
                />
              </StyledImage>
            </StyledImageWrapper>
          )}
          <PostContent layout={layout}>
            <PostHeader>
              <CategoryTag to={`/blog/${_.kebabCase(category)}`}>
                {category}
              </CategoryTag>
              <StyledShareRow>
                <FacebookShareButton
                  title="Share on Facebook"
                  url={`https://adamwebster.me${path}`}
                >
                  <FacebookIcon borderRadius={15} size={26} />
                </FacebookShareButton>
                <TwitterShareButton
                  title="Share on Twitter"
                  url={`https://adamwebster.me${path}`}
                >
                  <TwitterIcon borderRadius={15} size={26} />
                </TwitterShareButton>
                <RedditShareButton
                  title="Share on Reddit"
                  url={`https://adamwebster.me${path}`}
                >
                  <RedditIcon borderRadius={15} size={26} />
                </RedditShareButton>
                <LinkedinShareButton
                  title="Share on Linkedin"
                  url={`https://adamwebster.me${path}`}
                >
                  <LinkedinIcon borderRadius={15} size={26} />
                </LinkedinShareButton>
              </StyledShareRow>
              {showCoffeeButton != false && (
                <BuyMeACoffee style={{ marginBottom: 30 + 'px' }} />
              )}
              <PostTitle>{title}</PostTitle>
              <PostTagline theme={globalState.darkMode ? 'dark' : 'light'}>
                {tagline}
              </PostTagline>
              {dayjs(date).format('MMMM Do YYYY')}
            </PostHeader>
            <MDXRenderer>{body}</MDXRenderer>
          </PostContent>
        </MDXProvider>
      </StyledArticle>
    </BlogPostLayout>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    blogPostMdx(id: { eq: $id }) {
      body
      date
      path
      title
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
      layout
      defaultHeaderBorderColor
      heroColor
      showCoffeeButton
      tagline
    }
  }
`;

export default BlogPost;
