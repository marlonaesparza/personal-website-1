import React from 'react';
import styled from 'styled-components';

import Display from './minicomponents/Display';

const Home = (props) => {
  const {
    display,
    deviceAdjustment
  } = props;

  const HomeContainer = styled.div`
    margin: auto;
    padding: 5px;
    height: 90vh;
    width: 85%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    place-content: center;
    border: 3px solid rgba(255, 17, 26, 0.5);
    border-radius: 3px;
    box-shadow: rgba(255, 17, 26, 0.3) 0px 8px 24px, rgba(255, 17, 26, 0.3) 0px 16px 56px, rgba(255, 17, 26, 0.3) 0px 24px 80px;
    font-size: 2vw;

    @media ${deviceAdjustment.tablet} {
      max-height: 60vh;
    }
  `;

  return (
    <HomeContainer id='home-container'>
      <Display display={display} />
    </HomeContainer>
  );
};

export default Home;
