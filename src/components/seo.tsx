/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import AWMImage from '../assets/images/default.jpg';

interface Props {
  description?: string;
  lang?: string;
  meta?: any;
  title?: string;
}
function SEO({ description = '', lang = 'en', meta = [], title }: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const ogImage = AWMImage;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title ? title : site.siteMetadata.title}
      titleTemplate={
        title ? `%s | ${site.siteMetadata.title}` : site.siteMetadata.title
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title
            ? `${title} | ${site.siteMetadata.title}`
            : site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title
            ? `%s | ${site.siteMetadata.title}`
            : site.siteMetadata.title,
        },
        {
          property: `og:image`,
          content: `https://adamwebster.me/` + AWMImage,
        },
        {
          property: `og:image:width`,
          content: '2000',
        },
        {
          property: `og:image:height`,
          content: '2000',
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

export default SEO;
