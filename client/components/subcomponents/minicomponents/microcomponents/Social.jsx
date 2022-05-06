import React from 'react';
import styled from 'styled-components';


const SocialContainer = styled.a`
  margin: 10px auto 15px auto;
  padding: 5px;
  width: 95%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  place-content: center;
  justify-self: center;
  background: rgba(17, 255, 26, 0.2);
  border: 2px solid rgba(17, 255, 26, 0.4);
  border-radius: 3px;
  cursor: grab;
  text-decoration: none;
`;

const SocialTitle = styled.h3`
  margin: 0px;
  padding: 0px;
  color: white;
  text-align: center;
  align-self: center;
`;

const SocialIcon = styled.span`
  margin: 0px;
  padding: 0px 0px 5px 0px;
  display: block;
  color: white;
  cursor: grab;
  text-decoration: none;
  text-align: center;
  font-size: 2.5em;
`;

const Social = (props) => {
  const { social } = props;
  const { network, url, icon } = social;

  return (
    <SocialContainer id={`${network}-social-container`} href={url} target='_blank'>
      <SocialTitle>{ network }</SocialTitle>
      <SocialIcon id={`${network}-link`} role='img' aria-label={network}>{ String.fromCodePoint(icon) }</SocialIcon>
    </SocialContainer>
  );
};


export default Social;
