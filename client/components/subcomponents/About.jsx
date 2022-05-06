import React from 'react';
import styled from 'styled-components';

import Passage from './minicomponents/Passage';


const AboutContainer = styled.div`
  margin: auto;
  padding: 5px;
  height: 90vh;
  width: 85%;
  border: 3px solid rgba(255, 255, 26, 0.5);
  border-radius: 3px;
  box-shadow: rgba(255, 255, 26, 0.3) 0px 8px 24px, rgba(255, 255, 26, 0.3) 0px 16px 56px, rgba(255, 255, 26, 0.3) 0px 24px 80px;
  overflow: auto;
  font-size: 2vw;

  @media ${({deviceAdjustment}) => deviceAdjustment.tablet} {
    max-height: 60vh;
  }
`;


const About = (props) => {
  const {
    passage,
    deviceAdjustment
  } = props;

  return (
    <AboutContainer id='about-container' deviceAdjustment={deviceAdjustment}>
      <Passage passage={passage} />
    </AboutContainer>
  );
};


export default About;
