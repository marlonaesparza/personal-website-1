import React from 'react';
import styled from 'styled-components';

import Socials from './minicomponents/Socials';

const Connect = (props) => {
  const {
    socials,
    deviceAdjustment
  } = props;

  const ConnectContainer = styled.div`
    margin: auto;
    padding: 5px;
    height: 90vh;
    width: 85%;
    border: 3px solid rgba(17, 255, 26, 0.5);
    border-radius: 3px;
    box-shadow: rgba(17, 255, 26, 0.3) 0px 8px 24px, rgba(17, 255, 26, 0.3) 0px 16px 56px, rgba(17, 255, 26, 0.3) 0px 24px 80px;
    overflow: auto;
    font-size: 2vw;

    @media ${deviceAdjustment.tablet} {
      max-height: 60vh;
    }
  `;

  return (
    <ConnectContainer>
      <Socials socials={socials} />
    </ConnectContainer>
  );
};

export default Connect;
