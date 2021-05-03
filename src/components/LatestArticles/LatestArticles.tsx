import React, { useContext } from 'react';
import styled from 'styled-components';
import { StyledTag } from '../../styles/';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { SectionHeader } from '../SectionHeader';
import { SiteContext } from '../../state';
import { Card } from '../Card';
import _ from 'lodash';
const StyledLatestArticles = styled.div`
  position: relative;
  float: left;
  width: 100%;
  margin-top: 32px;
`;
const StyledArticlesGrid = styled.div`
  display: grid;
  gap: 32px;
`;

const StyledArticleItem = styled(Card)`
  display: grid;
  grid-template-columns: 289px 1fr;
  gap: 16px;
  padding: 0;
  overflow: hidden;
  @media (max-width: 960px) {
    grid-template-rows: 300px 1fr;
    gap: 16px;
    grid-template-columns: 1fr;
    height: auto;
  }
  a {
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
  .featured-image {
    overflow: hidden;
    .gatsby-image-wrapper {
      height: 100%;
      img {
        object-fit: cover !important;
      }
    }
  }

  .article-body {
    padding: 32px;
  }

  .article-title {
    margin: 0;
  }

  .article-category {
    font-weight: 400;
    font-size: 0.8rem;
  }
  .article-date {
    font-size: 0.8rem;
  }
`;

const StyledContentHeader = styled.div`
  display: flex;
  .section-header {
    flex: 1 1;
  }
`;

const LatestArticles = () => {
  const { globalState } = useContext(SiteContext);
  const {
    allArticlePost: { nodes: latestArticleItems },
  } = useStaticQuery(graphql`
    {
      allArticlePost(limit: 4, sort: { order: DESC, fields: date }) {
        nodes {
          timeToRead
          excerpt
          date(formatString: "MMMM Do YYYY")
          category
          id
          slug
          title
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                formats: [AUTO, WEBP, AVIF]
                aspectRatio: 1
              )
            }
          }
        }
      }
    }
  `);
  return (
    <StyledLatestArticles>
      <StyledContentHeader>
        <SectionHeader className="section-header">
          Latest Articles
        </SectionHeader>
      </StyledContentHeader>
      <StyledArticlesGrid>
        {latestArticleItems.map(
          (item: {
            id: string;
            title: string;
            featuredImage: any;
            category: string;
            date: string;
            timeToRead: number;
            excerpt: string;
            slug: string;
          }) => {
            const {
              id,
              title,
              featuredImage,
              category,
              date,
              timeToRead,
              excerpt,
              slug,
            } = item;
            const image = getImage(featuredImage);
            return (
              <StyledArticleItem key={id}>
                <div className="featured-image">
                  {image && (
                    <Link to={`articles/post/${slug}`}>
                      <GatsbyImage
                        objectFit="fill"
                        image={image}
                        alt={`${title} featured image`}
                      />
                    </Link>
                  )}
                </div>
                <div className="article-body">
                  <div className="meta">
                    <div className="article-category">{category}</div>
                    <h3 className="article-title">
                      <Link to={`articles/post/${slug}`}>{title}</Link>
                    </h3>
                    <div className="article-date">{date}</div>
                  </div>
                  <div className="excerpt">
                    <p>{excerpt}</p>
                  </div>
                  <StyledTag className="time-to-read">
                    Time to read: {timeToRead.toString()} min
                  </StyledTag>
                </div>
              </StyledArticleItem>
            );
          }
        )}
      </StyledArticlesGrid>
    </StyledLatestArticles>
  );
};

export default LatestArticles;
