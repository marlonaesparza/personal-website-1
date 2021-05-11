import React from 'react';
import styled from 'styled-components';

import Social from './microcomponents/Social';

const Socials = (props) => {
  const { socials } = props;

  const SocialsContainer = styled.div`
    margin: 0px;
    padding: 5px;
    height: 100%;
  `;

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
