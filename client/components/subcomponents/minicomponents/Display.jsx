import React from 'react';
import styled from 'styled-components';

const Display = (props) => {
  const { display } = props;

  const DisplayContainer = styled.div`
    margin: 0px;
    padding: 5px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    place-content: center;
    justify-self: center;
  `;

  const Display = styled.h1`
    margin: 0px;
    padding: 5px;
    text-align: center;
    color: white;
  `;
  
  return (
    <DisplayContainer id='display-container'>
      <Display id='display'> {display} </Display>
    </DisplayContainer>
  );
};

export default Display;
