import React from 'react';
import styled from 'styled-components';

const NavToggle = (props) => {
  const {
    deviceAdjustment
  } = props;

  const NavToggleContainer = styled.div`
    margin: 0;
    padding: 5px;
    display: grid;
    grid-template-columns: 100%;
    place-content: center;
    background: black;
    font-size: 4vw;

    @media ${deviceAdjustment.tabletToggle} {
      display: none;
    }
  `;

  const NavToggleButton = styled.span`
    margin: 0;
    padding: 5px;
    display: block;
    color: white;
    cursor: grab;
    text-decoration: none;
    text-align: center;
    transform: rotate(45deg);
  `;

  return (
    <NavToggleContainer>
      <NavToggleButton id='toggle-button' role='img' aria-label='toggle-button'>
        { String.fromCodePoint(10006) }
      </NavToggleButton>
    </NavToggleContainer>
  )
};

export default NavToggle;
