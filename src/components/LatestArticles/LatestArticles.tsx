import { Button } from '../Button/';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { StyledContentWrapper } from '../../styles/';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { SectionHeader } from '../SectionHeader';
import { darken, lighten } from 'polished';
import { SiteContext } from '../../state';
import { Card } from '../Card';
const StyledLatestArticles = styled.div`
  position: relative;
  float: left;
  width: 100%;
`;
const StyledArticlesGrid = styled.div`
  display: grid;
  gap: 32px;
`;

const StyledArticleItem = styled(Card)`
  display: grid;
  grid-template-columns: 289px 1fr;
  gap: 32px;
  padding: 0;
  a {
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
  .featured-image {
    overflow: hidden;
    max-height: 300px;
    .gatsby-image-wrapper {
      border-radius: 4px 0 0 4px;
      width: 100% !important;
      height: 100% !important;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .gatsby-image-wrapper img {
      max-height: 270px;
      position: relative;
      width: auto;
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
    text-transform: uppercase;
    font-size: 0.8rem;
  }
  .article-date {
    font-size: 0.8rem;
  }
  .time-to-read {
    font-size: 0.8rem;
    background-color: #ccc;
    padding: 8px 16px;
    border-radius: 30px;
    display: inline-block;
    background-color: ${({ theme }) => lighten(0.35, theme.colors.primary)};
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 8px;
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
    allBlogPost: { nodes: latestArticleItems },
  } = useStaticQuery(graphql`
    {
      allBlogPost(limit: 4, sort: { order: DESC, fields: date }) {
        nodes {
          timeToRead
          excerpt
          date(formatString: "MMMM Do YYYY")
          category
          id
          title
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                layout: FIXED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                transformOptions: { fit: COVER, grayscale: false }
              )
            }
          }
        }
      }
    }
  `);
  return (
    <StyledLatestArticles>
      <StyledContentWrapper>
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
            }) => {
              const {
                id,
                title,
                featuredImage,
                category,
                date,
                timeToRead,
                excerpt,
              } = item;
              const image = getImage(featuredImage);
              return (
                <StyledArticleItem key={id}>
                  <div className="featured-image">
                    {image && (
                      <a href="">
                        <GatsbyImage
                          objectFit="fill"
                          image={image}
                          alt={`${title} featured image`}
                        />
                      </a>
                    )}
                  </div>
                  <div className="article-body">
                    <div className="meta">
                      <div className="article-category">{category}</div>
                      <h3 className="article-title">
                        <a href="">{title}</a>
                      </h3>
                      <div className="article-date">{date}</div>
                    </div>
                    <div className="excerpt">
                      <p>{excerpt}</p>
                    </div>
                    <div className="time-to-read">
                      Time to read: {timeToRead.toString()} min
                    </div>
                  </div>
                </StyledArticleItem>
              );
            }
          )}
        </StyledArticlesGrid>
      </StyledContentWrapper>
    </StyledLatestArticles>
  );
};

export default LatestArticles;
