import React from 'react';
import styled from 'styled-components';

import NavMenuOptions from './subcomponents/NavMenuOptions';


const NavMenuContainer = styled.div`
  display: ${({menu}) => menu === true ? 'null' : 'none'};
  font-family: 'Roboto Mono', monospace;
  margin: auto;
  max-height: 80vh;
  min-width: 50%;;
  font-size: 3vw;
  align-items: center;
  position: absolute;
  left: 25%;
  bottom: 12%;
  background: rgba(255, 255, 255, 0.1);
  background-clip: padding-box;
  backdrop-filter: blur(40px);
  border: solid 2px transparent;
  border-radius: 3px;

  @media ${({deviceAdjustment}) => {
    return deviceAdjustment.tabletToggle;
  }} {
    display: none;
  }
`;


const NavMenu = (props) => {
  const {
    menu,
    contentOptions,
    deviceAdjustment,
    handleNavigation
  } = props;

  return (
    <NavMenuContainer menu={menu} deviceAdjustment={deviceAdjustment}>
      <NavMenuOptions contentOptions={contentOptions} handleNavigation={handleNavigation} />
    </NavMenuContainer>
  );
};

export default NavMenu;
