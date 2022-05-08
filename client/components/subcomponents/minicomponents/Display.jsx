import React from 'react';
import styled from 'styled-components';


const DisplayContainer = styled.div`
  margin: 0px;
  padding: 5px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-content: center;
  justify-self: center;
`;

const DisplayEl = styled.h1`
  margin: 0px;
  padding: 5px;
  font-family: 'Press Start 2P', cursive;
  text-align: center;
  font-size: 15em;
  color: rgba(255, 17, 26, .6);
  z-index: 0;
  
  animation: slide linear 9s infinite;

  @keyframes slide {
    from {
      transform: translateX(85%);
    }

    to {
      transform: translateX(-70%);
    }
  }
`;


const Display = (props) => {
  const { display } = props;

  return (
    <DisplayContainer id='display-container'>
      <DisplayEl id='El'> {display} </DisplayEl>
    </DisplayContainer>
  );
};


export default Display;
