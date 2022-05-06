import React from 'react';
import styled from 'styled-components';

import Repo from './microcomponents/Repo';


const ReposContainer = styled.div`
  margin: 0px;
  padding: 5px;
`;


const Repositories = (props) => {
  const { repos } = props;

  return (
    <ReposContainer id='repos-container'>
      {
        repos.map((repo, i) => {
          return <Repo key={i} repo={repo} />
        })
      }
    </ReposContainer>
  )
};


export default Repositories;
