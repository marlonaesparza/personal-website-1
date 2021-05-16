import React from 'react';
import styled from 'styled-components';

import NavOptions from './subcomponents/NavOptions';

const Navigation = (props) => {
  const {
    contentOptions,
    handleNavigation,
    deviceAdjustment
  } = props;

  const NavContainer = styled.div`
    font-family: 'Libre Barcode 39 Extended Text', cursive;
    font-size: 3vw;
    padding: 0em 1.5em 0em 0em;
    min-height: 100vh;
    align-items: center;
    display: grid;
    background: black;
    border: none;

    @media ${deviceAdjustment.tablet} {
      display: none;
    }
  `;

  return (
    <NavContainer id='navigation-container'>
      <NavOptions contentOptions={contentOptions} handleNavigation={handleNavigation} />
    </NavContainer>
  );
};

export default Navigation;
