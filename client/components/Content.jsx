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
    socials
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
  `;

  return (
    <ContentContainer id='content-container'>
      {
        content === 'home' ? <Home display={display} /> : 
        content === 'about' ? <About passage={passage} /> :
        content === 'projects' ? <Projects repos={repos} /> :
        content === 'connect' ? <Connect socials={socials} /> : null
      }
    </ContentContainer>
  );
};

export default Content;
