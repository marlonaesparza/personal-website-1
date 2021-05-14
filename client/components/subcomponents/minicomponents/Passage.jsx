import React from 'react';
import styled from 'styled-components';

const Passage = (props) => {
  const { passage } = props;

  const PassageContainer = styled.div`
    margin: 0px;
    padding: 5px;
  `;

  const Passage = styled.p`
    margin: 10px 10px;
    padding: 5px;
    text-align: center;
    color: white;
  `;

   return (
    <PassageContainer id='passage-container'>
      {
        passage.map((paragraph, i) => {
          if (i === passage.length - 1) {
            return;
          };

          return <Passage key={i}>{paragraph}</Passage>;
        })
      }
      <br/>
      <Passage key={passage.length - 1}>{passage[passage.length - 1 ]}</Passage>
    </PassageContainer>
  );
};

export default Passage;
