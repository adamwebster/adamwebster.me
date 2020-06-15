import React from "react";
import LatestPortfolioItem from "./LatestPortfolioItem";
import { Button } from "@adamwebster/fused-components";
import styled from "styled-components";
import { AWMColors } from "../../styles/Colors";

const StyledLatestPortfolioSection = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 60px;
  box-sizing: border-box;
  flex-flow: column;
  border-bottom: solid 1px var(--border-color);
  padding-bottom: 30px;
`;

const StyledLatestPortfolioSectionInner = styled.div`
  flex-flow: row;
  display: flex;
  h1 {
    font-size: 40px;
    line-height: 1;
    margin: 0;
    font-weight: 300;
    text-transform: uppercase;
  }
`;

const StyledLatestPortfolioItems = styled.div`
  margin-left: 30px;
  flex: 1 1;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

const StyledListMore = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 20px;
`;

const LatestPortfolioItems = () => {
  return (
    <StyledLatestPortfolioSection id="LatestWork">
      <StyledLatestPortfolioSectionInner>
        <div>
          <h1>
            My Latest
            <br />
            Work
          </h1>
        </div>
        <StyledLatestPortfolioItems>
          <LatestPortfolioItem
            title="Testing Title Property"
            imageURL="https://drscdn.500px.org/photo/163833279/q%3D80_m%3D2000/v2?sig=3dca74cf8cd24a1adf31367f43dbcac9adfcff4eb3a9c1f25919dfa0aea39d0d"
          />
          <LatestPortfolioItem imageURL="https://drscdn.500px.org/photo/161431867/q%3D80_m%3D1500/v2?sig=f6b3ed884c1574f195caddf2a2b2cfd14f288904acadf76ac72c793c8004bd93" />
          <LatestPortfolioItem imageURL="https://drscdn.500px.org/photo/163833279/q%3D80_m%3D2000/v2?sig=3dca74cf8cd24a1adf31367f43dbcac9adfcff4eb3a9c1f25919dfa0aea39d0d" />
          <LatestPortfolioItem imageURL="https://drscdn.500px.org/photo/161431867/q%3D80_m%3D1500/v2?sig=f6b3ed884c1574f195caddf2a2b2cfd14f288904acadf76ac72c793c8004bd93" />
          <LatestPortfolioItem imageURL="https://drscdn.500px.org/photo/163833279/q%3D80_m%3D2000/v2?sig=3dca74cf8cd24a1adf31367f43dbcac9adfcff4eb3a9c1f25919dfa0aea39d0d" />
          <LatestPortfolioItem imageURL="https://drscdn.500px.org/photo/161431867/q%3D80_m%3D1500/v2?sig=f6b3ed884c1574f195caddf2a2b2cfd14f288904acadf76ac72c793c8004bd93" />
        </StyledLatestPortfolioItems>
      </StyledLatestPortfolioSectionInner>
      <StyledListMore>
        <Button buttonColor={AWMColors.primaryColor} primary>
          Read More
        </Button>
      </StyledListMore>
    </StyledLatestPortfolioSection>
  );
};

export default LatestPortfolioItems;
