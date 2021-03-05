import React from 'react';
import styled, { css } from 'styled-components';
import { StyledFullWidthWrapper, StyledButton } from '../../styles';
import { useEffect, useRef, useState } from 'react';
import { navigate } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function isEven(n: number) {
  return n % 2 == 0;
}
interface StyledProjectItemInterface {
  grid?: number;
  index: number;
}

const StyledProjectItem = styled.div<StyledProjectItemInterface>`
  display: flex;
  padding: 16px;
  color: #fff;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
  position: relative;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-flow: column;
  }

  ${({ index }) =>
    !isEven(index) &&
    css`
      // flex-flow: row-reverse;
    `}
`;

const StyledImageWrapper = styled.div<StyledProjectItemInterface>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  border-radius: 8px;
  height: 358px;
  overflow: hidden;
  flex: 1 358px;
  .gatsby-image-wrapper {
    width: 100%;
  }
  img {
    border-radius: 8px;
    height: auto;
    width: 100%;
  }
  margin-right: 64px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 32px;
  }

  /* ${({ index }) =>
    !isEven(index)
      ? css`
          margin-left: 64px;
        `
      : css`
          margin-right: 64px;
        `} */
`;

const StyledProjectContent = styled.div`
  flex: 0 60%;
  @media only screen and (max-width: 768px) {
    flex: 1 1;
  }
`;

const StyledProjectDescription = styled.div`
  margin: 32px 0;
`;
interface Props {
  project: any;
  index: number;
}
const ProjectItem = ({ project, index }: Props) => {
  let projectItemWrapper = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);
  const handleScroll = () => {
    if (projectItemWrapper.current) {
      if (
        projectItemWrapper?.current?.offsetTop <
        window.pageYOffset + projectItemWrapper?.current?.offsetHeight * 2
      ) {
        setShow(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (projectItemWrapper.current) {
      if (
        projectItemWrapper?.current?.offsetTop <
        window.pageYOffset + projectItemWrapper?.current?.offsetHeight * 2
      ) {
        setShow(true);
      }
    }
  }, [projectItemWrapper]);
  const image = getImage(project.featuredImage);
  return (
    <StyledFullWidthWrapper
      show={show}
      ref={projectItemWrapper}
      bgColor={project.bgColor}
      bgImage={project.bgImage && project.bgImage.childImageSharp.resize.src}
    >
      <StyledProjectItem index={index}>
        {image && (
          <StyledImageWrapper index={index}>
            <GatsbyImage
              loading="eager"
              objectFit="fill"
              image={image}
              alt={`${project.title} featured image`}
            />
          </StyledImageWrapper>
        )}
        <StyledProjectContent>
          <h3>{project.title}</h3>
          {project.client && <div>Client: {project.client}</div>}
          {project.software && <div>Software: {project.software}</div>}
          {project.technologyUsed && (
            <div>Technology Used: {project.technologyUsed}</div>
          )}
          <StyledProjectDescription>
            <ReactMarkdown>{project.description}</ReactMarkdown>
          </StyledProjectDescription>
          <StyledButton onClick={() => navigate(project.path)} primary>
            View
          </StyledButton>
        </StyledProjectContent>
      </StyledProjectItem>
    </StyledFullWidthWrapper>
  );
};

export default ProjectItem;
