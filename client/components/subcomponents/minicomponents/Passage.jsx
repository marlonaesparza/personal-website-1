import React from 'react';
import styled from 'styled-components';


const PassageContainer = styled.div`
  margin: 0px;
  padding: 5px;
`;

const PassageEl = styled.p`
  margin: 10px 10px;
  padding: 5px;
  text-align: center;
  color: white;
`;


const Passage = (props) => {
  const { passage } = props;
  
   return (
    <PassageContainer id='passage-container'>
      {
        passage.map((paragraph, i) => {
          if (i === passage.length - 1) {
            return;
          };

          return <PassageEl key={i}>{paragraph}</PassageEl>;
        })
      }
      <br/>
      <PassageEl key={passage.length - 1}>{passage[passage.length - 1 ]}</PassageEl>
      <br/>
    </PassageContainer>
  );
};

export default Passage;
