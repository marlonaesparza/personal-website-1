import React from 'react';
import styled from 'styled-components';

const Passage = (props) => {
  const { passage } = props;

  const PassageContainer = styled.div`
    margin: 0px;
    padding: 5px;
    height: 100%;
    place-content: center;
    justify-self: center;
  `;

  const Passage = styled.p`
    margin: 10px 10px;
    padding: 5px;
    text-align: center;
    color: white;
  `;

  return (
    <PassageContainer id='passage-container'>
      <Passage>Marlon A. Esparza is a full-stack software engineer, with experience in deploying secure applications. His background in design and music production give him a creative edge for front-end development.</Passage>
      <Passage>Marlon is motivated by incredible design and functionality that make applications a great experience. He considers himself a life-long learner, proud to continue building a strong foundation in computer science and web development.</Passage>
      <Passage>Marlon A. Esparza is a currently looking for a full-time position with solid skills in front-end/back-end javascript, and relational/non-relational databases. Employers, please feel free to reach out if you think I may be the right fit for your company, thank you.</Passage>
    </PassageContainer>
  );
};

export default Passage;
