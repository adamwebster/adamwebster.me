import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Colors } from '@adamwebster/fused-components';

const StyledHeroInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-flow: column;
  }
`;
const StyledHero = styled.section`
  min-height: 400px;
  width: 100%;
  background-color: ${Colors.primary};
  margin-bottom: 40px;
  h1 {
    font-size: 40px;
    line-height: 1;
    margin: 0;
    font-family: 'HelveticaNeue-CondensedBold';
    text-transform: uppercase;
  }
  h3 {
    text-transform: uppercase;
    font-size: 28px;
    font-family: 'HelveticaNeue-CondensedBold';
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  @media only screen and (max-width: 768px) {
    background-image: none;
    height: auto;
    margin-bottom: 50px;
  }
`;

const StyledHeroMessage = styled.div`
  width: 440px;
  top: 80px;
  color: #fff;
  position: relative;
  @media only screen and (max-width: 600px) {
    margin: 0 auto;
    width: 100%;
    top: 20px;
    text-align: center;
    margin-bottom: 40px;
  }
`;

const StyledImageWrapper = styled.div`
  width: 400px;
  margin-top: 40px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;
const Hero = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          fileName: file(relativePath: { eq: "heroGraphic@2x.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <StyledHero id="Hero">
            <StyledHeroInner>
              <StyledImageWrapper>
                <Img fluid={data.fileName.childImageSharp.fluid} />
              </StyledImageWrapper>
              <StyledHeroMessage>
                <h1>Adam Webster</h1>
                <h3>Designer and Front-end Developer</h3>
                <p>
                  I specialize in designing and coding responsive, accessible
                  websites using technologies such as{' '}
                  <strong>Wordpress, React</strong> and <strong>Svelte</strong>.
                </p>
                <p>
                  I also design logos, business card and other marketing
                  materials.
                </p>
              </StyledHeroMessage>
            </StyledHeroInner>
          </StyledHero>
        );
      }}
    />
  );
};

export default Hero;
