import React from 'react';
import styled from 'styled-components';

import Social from './microcomponents/Social';


const SocialsContainer = styled.div`
  margin: 0px;
  padding: 5px;

  `;

const Socials = (props) => {
  const { socials } = props;

  return (
    <SocialsContainer>
      {
        socials.map((social, i) => {
          return <Social key={i} social={social} />
        })
      }
    </SocialsContainer>
  );
};


export default Socials;
