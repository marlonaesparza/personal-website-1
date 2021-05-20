import React from 'react';
import styled from 'styled-components';

import NavMenuOptions from './subcomponents/NavMenuOptions';

const NavMenu = (props) => {
  const {
    menu,
    contentOptions
  } = props;

  const NavMenuContainer = styled.div`
    margin: auto;
    display: ${menu === true ? 'float' : 'none'};
    max-height: 100vh;
    max-width: 100vw;
  `;

  return (
    <NavMenuContainer>
      <NavMenuOptions contentOptions={contentOptions} />
    </NavMenuContainer>
  );
};

export default NavMenu;
