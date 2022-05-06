import React from 'react';
import styled from 'styled-components';


const RepoContainer = styled.a`
  margin: 10px auto 15px auto;
  padding: 5px;
  width: 95%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  place-content: left;
  justify-self: center;
  background: rgba(17, 26, 255, 0.2);
  border: 2px solid rgba(17, 26, 255, 0.4);
  border-radius: 3px;
  text-decoration: none;
  cursor: grab;
`;

const RepoTitle = styled.h3`
  margin: 0px;
  padding: 0px 5px 0px 5px;
  color: white;
  align-self: center;
`

const RepoDescription = styled.p`
  margin: 0px;
  padding: 0px 5px 0px 5px;
  display: block;
  color: white;
  align-self: center;
`;

const RepoUrl = styled.a`
  margin: 0px;
  padding: 5px 5px 10px 5px;
  display: block;
  color: white;
  cursor: grab;
  align-self: center;
`;


const Repo = (props) => {
  const { repo } = props;
  const { title, description, url } = repo;


  return (
    <RepoContainer id={`${title}-repo-container`} href={url} target='_blank'>
      <RepoTitle>{ title }</RepoTitle>
      <RepoDescription>{ description }</RepoDescription>
      <RepoUrl href={url} target='_blank'>{ url }</RepoUrl>
    </RepoContainer>
  )
};


export default Repo;
