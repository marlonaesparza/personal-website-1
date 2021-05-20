import React from 'react';
import styled from 'styled-components';

const NavMenuOptions = (props) => {
  const {
    contentOptions,
    handleNavigation
  } = props;

  const NavOptionsContainer = styled.div`
    margin: 0px;
    padding: 0px;
    display: grid;
    grid-template-rows: repeat(${contentOptions.length}, 1fr);
    place-content: center;
  `;

  const NavOption = styled.a`
    margin: 0px;
    padding: 5px;
    cursor: crosshair;
    text-decoration: none;
    text-align: center;
    align-self: center;
    color: white;
  `;

  return (
    <NavOptionsContainer id='navigation-options-container'>
      {
        contentOptions.map((option, i) => {
          return <NavOption key={i} id={option} onClick={handleNavigation}>{ option }</NavOption>
        })
      }
    </NavOptionsContainer>
  );
};

export default NavMenuOptions;
