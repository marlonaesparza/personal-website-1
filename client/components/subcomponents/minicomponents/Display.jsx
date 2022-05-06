import React from 'react';
import styled from 'styled-components';


const DisplayContainer = styled.div`
  margin: 0px;
  padding: 5px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-content: center;
  justify-self: center;
`;

const DisplayEl = styled.h1`
  margin: 0px;
  padding: 5px;
  text-align: center;
  color: white;
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
