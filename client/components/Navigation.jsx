import React from 'react';
import styled from 'styled-components';

import NavOptions from './subcomponents/NavOptions';

const Navigation = (props) => {
  const { contentOptions, handleNavigation } = props;

  const NavContainer = styled.div`
    font-family: 'Libre Barcode 39 Extended Text', cursive;
    font-size: 1.9em;
    padding: 2em 2em 2em 0em;
    max-height: 100vh;
    align-items: center;
    display: grid;
    background: black;
  `;

  return (
    <NavContainer id='navigation-container'>
      <NavOptions contentOptions={contentOptions} handleNavigation={handleNavigation} />
    </NavContainer>
  );
};

export default Navigation;
