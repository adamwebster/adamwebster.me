import React, { useEffect, useContext } from 'react';
import { BlogPostLayout } from '../components/BlogPostLayout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import styled, { css } from 'styled-components';
import { Colors, Button } from '@adamwebster/fused-components';
import _ from 'lodash';
import SEO from '../components/seo';
import { CodeHighlight } from '../components/CodeHighlight';
import { BuyMeACoffeeWidget } from '../components/BuyMeACoffee';
import { FloatingImage } from '../components/FloatingImage';

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { AWMVariables } from '../styles/StyledVariables';
import { SiteContext } from '../state';
import { SectionHeader } from '../components/SectionHeader';
import { ExternalLink } from '../components/ExternalLink';
import { LinkButton } from '../components/LinkButton';

dayjs.extend(advancedFormat);

interface SAProps {
  layout?: string;
}

const StyledArticle = styled.article<SAProps>`
  width: ${({ layout }) => (layout === 'full' ? '100vw' : '940px')};
  margin: 150px auto 0 auto;
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

interface Props {
  data: any;
}

const BlogPost = ({ data }: Props) => {
  const { dispatch, globalState } = useContext(SiteContext);

  const {
    mdx: { frontmatter, body },
  } = data;

  useEffect(() => {
    if (frontmatter.layout === 'full') {
      dispatch({ type: 'SET_HAS_HERO', payload: true });
    }
    return () => {
      dispatch({ type: 'SET_HAS_HERO', payload: false });
    };
  }, []);

  return (
    <BlogPostLayout>
      <SEO title={`${frontmatter.title}`}></SEO>
      <StyledArticle>
        <MDXProvider
          components={{
            LinkButton,
            code: CodeHighlight,
            BuyMeACoffeeWidget,
            SectionHeader,
            ExternalLink,
            FloatingImage,
            Button,
          }}
        >
          <PostContent>
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
        path
        title
      }
    }
  }
`;

export default BlogPost;
