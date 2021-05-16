import React from 'react';
import styled from 'styled-components';

import Home from './subcomponents/Home';
import About from './subcomponents/About';
import Projects from './subcomponents/Projects';
import Connect from './subcomponents/Connect';

const Content = (props) => {
  const {
    content,
    display,
    passage, 
    repos,
    socials,
    deviceAdjustment
  } = props;

  const ContentContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    margin: 0px;
    padding: 5px;
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    place-content: center;
    background: black;
    border: none;

    @media ${deviceAdjustment.tablet} {
      min-height: 80vh;
    }
  `;

  return (
    <ContentContainer id='content-container'>
      {
        content === 'home' ? <Home display={display} deviceAdjustment={deviceAdjustment} /> : 
        content === 'about' ? <About passage={passage} deviceAdjustment={deviceAdjustment} /> :
        content === 'projects' ? <Projects repos={repos} deviceAdjustment={deviceAdjustment} /> :
        content === 'connect' ? <Connect socials={socials} deviceAdjustment={deviceAdjustment} /> : null
      }
    </ContentContainer>
  );
};

export default Content;
