import React from 'react';
import styled from 'styled-components';


const OptionsContainer = styled.div`
  margin: 0px;
  padding: 0px;
  height: 45vh;
  display: grid;
  grid-template-rows: repeat(${({contentOptions}) => contentOptions.length}, 1fr);
  place-content: center;
`;

const Option = styled.a`
  margin: 0px;
  padding: 5px;
  cursor: crosshair;
  text-decoration: none;
  text-align: center;
  align-self: center;
  color: white;
`;


const NavOption = (props) => {
  const { contentOptions, handleNavigation } = props;

  return (
    <OptionsContainer id='navigation-options-container' contentOptions={contentOptions}>
      {
        contentOptions.map((option, i) => {
          return <Option key={i} id={option} onClick={handleNavigation}>{ option }</Option>
        })
      }
    </OptionsContainer>
  );
};


export default NavOption;
