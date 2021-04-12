import { Button } from '../Button/';
import React from 'react';
import styled from 'styled-components';
import { StyledContentWrapper } from '../../styles/';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { SectionHeader } from '../SectionHeader';
import { darken } from 'polished';
const StyledLatestArticles = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.lightPurpleBG};
  float: left;
  width: 100%;
`;
const StyledLatestWorkGrid = styled.div`
  display: grid;
  margin-top: 16px;
  grid-auto-flow: column;
  gap: 32px;
`;

const StyledArticleItem = styled.article`
  a {
    color: #77448f;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
  .featured-image {
    margin-bottom: 16px;
    border-radius: 4px;
    overflow: hidden;
    height: 150px;
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
    background-color: ${({ theme }) => darken(0.1, theme.colors.lightPurpleBG)};
    color: #77448f;
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
  const {
    allBlogPost: { nodes: latestArticleItems },
  } = useStaticQuery(graphql`
    {
      allBlogPost(limit: 3, sort: { order: DESC, fields: date }) {
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
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
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
          <SectionHeader className="section-header" textColor="#77448F">
            Latest Articles
          </SectionHeader>
          <Button buttonColor="#77448F">Read more of my articles </Button>
        </StyledContentHeader>
        <StyledLatestWorkGrid>
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
                </StyledArticleItem>
              );
            }
          )}
        </StyledLatestWorkGrid>
      </StyledContentWrapper>
    </StyledLatestArticles>
  );
};

export default LatestArticles;
