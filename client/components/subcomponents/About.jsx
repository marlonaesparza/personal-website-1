import React from 'react';
import styled from 'styled-components';

import Passage from './minicomponents/Passage';

const About = (props) => {
  const { passage } = props;

  const AboutContainer = styled.div`
    margin: auto;
    padding: 5px;
    height: 90vh;
    width: 85%;
    border: 3px solid rgba(255, 255, 26, 0.5);
    border-radius: 3px;
    box-shadow: rgba(255, 255, 26, 0.3) 0px 8px 24px, rgba(255, 255, 26, 0.3) 0px 16px 56px, rgba(255, 255, 26, 0.3) 0px 24px 80px;
    overflow: auto;
  `;

  return (
    <AboutContainer id='about-container'>
      <Passage />
    </AboutContainer>
  );
};

export default About;
