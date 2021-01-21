import React from 'react';
import styled from 'styled-components';
import { StyledContentWrapper } from '../../styles';
import { SectionHeader } from '../SectionHeader';
import FeaturedProjectItem from './FeaturedProjectItem';

const StyledProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* grid-template-areas:
        'grid1 grid1 grid2 grid3'
        'grid1 grid1 grid4 grid4'; */
  min-height: 400px;
  margin: 0 auto;
`;

const projects = [
  {
    id: 1,
    name: 'Norther Caravan Logo',
    software: 'Affinity Designer',
    client: 'Norther Caravan',
    bgImage:
      'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80',
    description: `This logo was designed for a Photographer that take photos in Ontario, Canada. He mainly takes photos of landscapes and animals. The circle and arrow part of the logo represents a compass with its needle pointing north and the tree represents the main subjects of his photos.

            You can take a look at his photos on his instagram @NorthernCaravan.`,
  },
  {
    id: 2,
    name: 'Project 2',
    bgImage:
      'https://images.unsplash.com/photo-1551503766-ac63dfa6401c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
    description: `This logo was designed for a Photographer that take photos in Ontario, Canada. He mainly takes photos of landscapes and animals. The circle and arrow part of the logo represents a compass with its needle pointing north and the tree represents the main subjects of his photos.

            You can take a look at his photos on his instagram @NorthernCaravan.`,
  },
  {
    id: 3,
    name: 'Project 3',
    bgImage:
      'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80',
    description: `This logo was designed for a Photographer that take photos in Ontario, Canada. He mainly takes photos of landscapes and animals. The circle and arrow part of the logo represents a compass with its needle pointing north and the tree represents the main subjects of his photos.

            You can take a look at his photos on his instagram @NorthernCaravan.`,
  },
  {
    id: 4,
    name: 'Project 4',
    bgImage:
      'https://images.unsplash.com/photo-1551503766-ac63dfa6401c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
    description: `This logo was designed for a Photographer that take photos in Ontario, Canada. He mainly takes photos of landscapes and animals. The circle and arrow part of the logo represents a compass with its needle pointing north and the tree represents the main subjects of his photos.

            You can take a look at his photos on his instagram @NorthernCaravan.`,
  },
];

const FeaturedProjects = () => (
  <>
    <StyledContentWrapper>
      <SectionHeader>Projects</SectionHeader>
    </StyledContentWrapper>
    <StyledProjectsGrid>
      {projects.map((project, index) => (
        <FeaturedProjectItem
          index={index}
          key={`project${project.id}`}
          project={project}
        />
      ))}
    </StyledProjectsGrid>
  </>
);
export default FeaturedProjects;
