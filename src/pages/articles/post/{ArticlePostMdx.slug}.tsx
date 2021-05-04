import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Colors, Button } from '@adamwebster/fused-components';
import _ from 'lodash';
import SEO from '../../../components/seo';
import { CodeHighlight } from '../../../components/CodeHighlight';
import {
  BuyMeACoffee,
  BuyMeACoffeeWidget,
} from '../../../components/BuyMeACoffee';
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
import { LinkButton } from '../../../components/LinkButton';
import { SectionHeader } from '../../../components/SectionHeader';
import { Layout } from '../../../components/Layout';
import { StyledContentWrapper } from '../../../styles/';
import { Card } from '../../../components/Card';
import { BioCard, GuestbookCard } from '../../../components/Cards';
dayjs.extend(advancedFormat);

const StyledArticleWrapper = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: 640px auto;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;
const StyledArticle = styled(Card)`
  padding: 0;
  overflow: hidden;
`;

interface SIProps {
  fluid?: any;
}
const StyledImage = styled.div<SIProps>``;

const PostTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 0;
  font-size: 40px;
  border-left: none;
  padding-left: 0;
`;

const PostHeader = styled.header`
  margin-bottom: 50px;
`;

const PostContent = styled.div`
  width: 90%;
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

const StyledImageWrapper = styled.div`
  width: 100%;
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
  const {
    articlePostMdx: {
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

  const image = getImage(featuredImage);
  const imgSrc = getSrc(featuredImage);
  return (
    <Layout>
      <SEO title={`${title} | Blog`} ogImage={imgSrc}></SEO>
      <StyledContentWrapper>
        <StyledArticleWrapper>
          <StyledArticle>
            <MDXProvider
              components={{
                Button,
                code: CodeHighlight,
                BuyMeACoffeeWidget,
                LinkButton,
                SectionHeader,
              }}
            >
              {image && (
                <StyledImageWrapper>
                  <StyledImage>
                    <GatsbyImage
                      loading="eager"
                      objectFit="fill"
                      image={image}
                      alt={`${title} featured image`}
                    />
                  </StyledImage>
                </StyledImageWrapper>
              )}
              <PostContent>
                <PostHeader>
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

                  {dayjs(date).format('MMMM Do YYYY')}
                </PostHeader>
                <MDXRenderer>{body}</MDXRenderer>
              </PostContent>
            </MDXProvider>
          </StyledArticle>
          <div>
            <BioCard style={{ marginBottom: '32px' }} />
            <GuestbookCard />
          </div>
        </StyledArticleWrapper>
      </StyledContentWrapper>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    articlePostMdx(id: { eq: $id }, draft: { eq: false }) {
      body
      date
      path
      title
      featuredImage {
        childImageSharp {
          gatsbyImageData(
            width: 1200
            height: 600
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      category
      showCoffeeButton
      tagline
    }
  }
`;

export default BlogPost;
