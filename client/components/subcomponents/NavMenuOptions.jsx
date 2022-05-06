import React from 'react';
import styled from 'styled-components';


const NavOptionsContainer = styled.div`
  margin: auto;
  padding: 0px;
  display: grid;
  grid-template-rows: repeat(${({contentOptions}) => contentOptions.length}, 1fr);
  place-content: center;
`;

const NavOption = styled.a`
  margin: 0px;
  padding: 15px;
  cursor: crosshair;
  text-decoration: none;
  text-align: center;
  align-self: center;
  color: white;
`;


const NavMenuOptions = (props) => {
  const {
    contentOptions,
    handleNavigation
  } = props;

  return (
    <NavOptionsContainer id='navmenu-options-container' contentOptions={contentOptions}>
      {
        contentOptions.map((option, i) => {
          return <NavOption key={i} id={option} onClick={handleNavigation}>{ option }</NavOption>
        })
      }
    </NavOptionsContainer>
  );
};

export default NavMenuOptions;
