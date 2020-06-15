import React from "react";
import styled from "styled-components";
import { AWMColors } from "../../styles/Colors";

const StyledHero = styled.section`
  height: 400px;
  background-position: calc(100% + 100px) -180px;
  background-repeat: no-repeat;
  h1 {
    font-size: 40px;
    line-height: 1;
    margin: 0;
    font-family: "HelveticaNeue-CondensedBold";
    text-transform: uppercase;
  }
  h3 {
    text-transform: uppercase;
    font-size: 28px;
    font-family: "HelveticaNeue-CondensedBold";
    color: ${AWMColors.primaryColor};
    margin: 0;
    padding: 0;
    line-height: 1;
  }
`;

const StyledHeroMessage = styled.div`
  width: 440px;
  top: 80px;
  position: relative;
`;

const Hero = () => {
  return (
    <StyledHero id="Hero">
      <StyledHeroMessage>
        <h1>Adam Webster</h1>
        <h3>Designer and Front-end Developer</h3>
        <p>
          I specialize in designing and coding responsive, accessible websites
          using technologies such as <strong>Wordpress, React</strong> and{" "}
          <strong>Svelte</strong>.
        </p>
        <p>
            I also design logos, business card and other marketing materials.
        </p>
      </StyledHeroMessage>
    </StyledHero>
  );
};

export default Hero;
