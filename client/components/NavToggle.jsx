import React from 'react';
import styled from 'styled-components';


const NavToggleContainer = styled.div`
  margin: 0;
  padding: 5px;
  display: grid;
  grid-template-columns: 100%;
  place-content: center;
  background: black;
  font-size: 4vw;

  @media ${({deviceAdjustment}) => deviceAdjustment.tabletToggle} {
    display: none;
  }
`;

const NavToggleButton = styled.span`
  margin: auto;
  padding: 5px;
  display: block;
  text-align: center;
  text-decoration: none;
  color: white;
  cursor: grab;
  transform: ${({menu}) => menu === true ? 'rotate(0deg)' : 'rotate(45deg)'};
`;


const NavToggle = (props) => {
  const {
    menu,
    deviceAdjustment
  } = props;

  return (
    <NavToggleContainer deviceAdjustment={deviceAdjustment}>
      <NavToggleButton id='toggle-button' role='img' aria-label='toggle-button' onClick={props.handleToggleNav} menu={menu}>
        { String.fromCodePoint(10006) }
      </NavToggleButton>
    </NavToggleContainer>
  )
};


export default NavToggle;
