import { graphql, StaticQuery } from 'gatsby';
import { node } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { StyledContentWrapper } from '../../styles';
import { SectionHeaderFront } from '../SectionHeader';
import FeaturedProjectItem from './FeaturedProjectItem';

const StyledProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 400px;
  margin: 0 auto;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedProjects = () => (
  <>
    <StyledContentWrapper>
      <SectionHeaderFront>Featured Projects</SectionHeaderFront>
    </StyledContentWrapper>
    <StyledProjectsGrid>
      <StaticQuery
        query={graphql`
          query {
            allPortfolioItem(sort: { order: DESC, fields: date }, limit: 4) {
              nodes {
                id
                title
                date
                path
                excerpt
                technologyUsed
                software
                description
                bgImage {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allPortfolioItem: { nodes } }: any) => {
          return (
            <>
              {nodes.map((project: any, index: any) => (
                <>
                  <FeaturedProjectItem
                    index={index}
                    key={`project${project.id}`}
                    project={project}
                  />
                </>
              ))}
            </>
          );
        }}
      />
    </StyledProjectsGrid>
  </>
);
export default FeaturedProjects;
