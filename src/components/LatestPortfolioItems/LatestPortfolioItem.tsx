import React, { useContext } from 'react';
import styled from 'styled-components';
import { Colors } from '@adamwebster/fused-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { AWMVariables } from '../../styles/StyledVariables';
import { SiteContext } from '../../state';

const StyledLatestPortfolioItem = styled.div``;

const StyledImg = styled(Img)`
  height: 100%;
  border: solid 1px ${Colors.border};
  &:hover {
    filter: brightness(0.5);
  }
`;

const StyledLink = styled(Link)``;
interface Props {
  node: any;
}
const LatestPortfolioItem = ({ node, ...rest }: Props) => {
  const { globalState } = useContext(SiteContext);
  const {
    frontmatter: {
      path,
      title,
      featuredImage: {
        childImageSharp: { fluid },
      },
    },
  } = node;
  return (
    <StyledLatestPortfolioItem {...rest}>
      <StyledLink title={title} to={path}>
        <StyledImg alt={title} fluid={fluid} />
      </StyledLink>
    </StyledLatestPortfolioItem>
  );
};
export default LatestPortfolioItem;
