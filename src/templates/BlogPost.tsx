import React, { useEffect } from 'react';
import { BlogPostLayout } from '../components/BlogPostLayout';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Img from 'gatsby-image';
import styled, { css } from 'styled-components';
import { Colors } from '@adamwebster/fused-components';
import _ from 'lodash';
import SEO from '../components/seo';
import { CategoryTag } from '../components/CategoryTag';
import { useSelector, useDispatch } from 'react-redux';
import { SetHeaderColor } from '../components/SetHeaderColor';
import { setHasHero } from '../state/actions';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { AWMVariables } from '../styles/StyledVariables';
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
}
const StyledImage = styled(Img)<SIProps>`
  height: ${({ layout }) => (layout === 'full' ? '500px' : '300px')};
  border: ${({ layout }) =>
    layout === 'full' ? 'none' : `solid 1px ${Colors.border}`};
  max-width: 800px;
  margin: 0 auto;
  border-radius: ${AWMVariables.borderRadius};
  ${({ layout }) =>
    layout !== 'full' &&
    css`
      margin-top: 80px;
      box-shadow: 0 0 5px #aaa;
      @media only screen and (max-width: 600px) {
        margin-top: 120px;
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
`;

interface SIWProps {
  bgColor: string;
  layout: string;
}

const StyledImageWrapper = styled.div<SIWProps>`
  width: 100%;
  margin-top: ${({ layout }) => (layout === 'full' ? '0' : '40px')};

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
  const dispatch = useDispatch();
  const {
    mdx: { frontmatter, body },
  } = data;
  const theme = useSelector(
    (state: { SiteSettings: { theme: string } }) => state.SiteSettings.theme
  );

  useEffect(() => {
    if (frontmatter.layout === 'full') {
      dispatch(setHasHero(true));
    }
    return () => {
      dispatch(setHasHero(false));
    };
  }, []);

  return (
    <BlogPostLayout layout={frontmatter.layout}>
      {frontmatter.heroColor && (
        <SetHeaderColor color={frontmatter.heroColor} />
      )}
      <SEO
        title={`${frontmatter.title} | Blog`}
        ogImage={frontmatter.featuredImage.childImageSharp.fluid.src}
      ></SEO>

      <StyledArticle layout={frontmatter.layout}>
        <MDXProvider components={{}}>
          <StyledImageWrapper
            layout={frontmatter.layout}
            bgColor={frontmatter.heroColor}
          >
            <StyledImage
              layout={frontmatter.layout}
              fluid={frontmatter.featuredImage.childImageSharp.fluid}
            />
          </StyledImageWrapper>
          <PostContent layout={frontmatter.layout}>
            <PostHeader>
              <CategoryTag to={`/blog/${_.kebabCase(frontmatter.category)}`}>
                {frontmatter.category}
              </CategoryTag>
              <StyledShareRow>
                <FacebookShareButton
                  title="Share on Facebook"
                  url={`https://adamwebster.me${frontmatter.path}`}
                >
                  <FacebookIcon borderRadius={15} size={26} />
                </FacebookShareButton>
                <TwitterShareButton
                  title="Share on Twitter"
                  url={`https://adamwebster.me${frontmatter.path}`}
                >
                  <TwitterIcon borderRadius={15} size={26} />
                </TwitterShareButton>
                <RedditShareButton
                  title="Share on Reddit"
                  url={`https://adamwebster.me${frontmatter.path}`}
                >
                  <RedditIcon borderRadius={15} size={26} />
                </RedditShareButton>
                <LinkedinShareButton
                  title="Share on Linkedin"
                  url={`https://adamwebster.me${frontmatter.path}`}
                >
                  <LinkedinIcon borderRadius={15} size={26} />
                </LinkedinShareButton>
              </StyledShareRow>
              <PostTitle>{frontmatter.title}</PostTitle>
              <PostTagline theme={theme}>{frontmatter.tagline}</PostTagline>
              {dayjs(frontmatter.date).format('MMMM Do YYYY')}
            </PostHeader>
            <MDXRenderer>{body}</MDXRenderer>
          </PostContent>
        </MDXProvider>
      </StyledArticle>
    </BlogPostLayout>
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
        heroColor
        layout
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
