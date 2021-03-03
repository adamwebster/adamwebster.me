import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { StyledContentWrapper } from '../../styles';
import { SectionHeaderFront } from '../SectionHeader';
import FeaturedProjectItem from './FeaturedProjectItem';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const StyledProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 400px;
  margin: 0 auto;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const SectionHeaderFrontMotion = motion.custom(SectionHeaderFront);

const FeaturedProjects = () => {
  const [FP, FPInView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px',
  });
  return (
    <motion.div
      ref={FP}
      initial={{ opacity: 0 }}
      animate={{ opacity: FPInView ? 1 : 0 }}
      transition={{
        default: {
          duration: 0.5,
        },
      }}
    >
      <StyledContentWrapper>
        <SectionHeaderFrontMotion>Featured Projects</SectionHeaderFrontMotion>
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
                      resize(base64: true) {
                        src
                      }
                    }
                  }
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
    </motion.div>
  );
};
export default FeaturedProjects;
