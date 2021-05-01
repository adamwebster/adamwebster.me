import React from 'react';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
import SEO from '../components/seo';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { LatestArticles } from '../components/LatestArticles';

import { SkillsCard, HobbiesCard, GuestbookCard } from '../components/Cards';

import { StyledContentWrapper } from '../styles/';
import styled from 'styled-components';

const StyledSkillsCard = styled(SkillsCard)`
  margin-bottom: 32px;
`;

const StyledGuestbookCard = styled(GuestbookCard)`
  margin-bottom: 32px;
`;

const StyledHobbiesCard = styled(HobbiesCard)`
  margin-bottom: 32px;
`;

const StyledIndexGrid = styled.div`
  display: grid;
  grid-template-columns: auto 288px;
  gap: 32px;
`;

const Index = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <StyledContentWrapper>
        <StyledIndexGrid>
          <div>
            <ProjectsGrid />
            <LatestArticles />
          </div>
          <div>
            <StyledSkillsCard />
            <StyledHobbiesCard />
            <StyledGuestbookCard />
          </div>
        </StyledIndexGrid>
      </StyledContentWrapper>
    </Layout>
  );
};

export default Index;
