import React from 'react';
import styled from 'styled-components';

import Repositories from './minicomponents/Repositories.jsx';


const ProjectsContainer = styled.div`
  margin: auto;
  padding: 5px;
  height: 90vh;
  width: 85%;
  border: 3px solid rgba(17, 26, 255, 0.5);
  border-radius: 3px;
  box-shadow: rgba(17, 26, 255, 0.3) 0px 8px 24px, rgba(17, 26, 255, 0.3) 0px 16px 56px, rgba(17, 26, 255, 0.3) 0px 24px 80px;
  overflow: auto;
  font-size: 2vw;

  @media ${({deviceAdjustment}) => deviceAdjustment.tablet} {
    max-height: 60vh;
  }
`;


const Projects = (props) => {
  const {
    repos,
    deviceAdjustment
  } = props;

  return (
    <ProjectsContainer id='projects-cotainer' deviceAdjustment={deviceAdjustment}>
      <Repositories repos={repos} />
    </ProjectsContainer>
  );
};


export default Projects;
