import React from 'react';
import styled from 'styled-components';
import deviceAdjustment from '../assets/deviceAdjustment';

import Content from './Content';
import Navigation from './Navigation';
import NavToggle from './NavToggle';
import NavMenu from './NavMenu';

const AppContainer = styled.div`
  margin: 0px;
  padding: 0px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 70% 30%;
  place-content: center;

  @media ${deviceAdjustment.tablet} {
    grid-template-columns: 100%;
    grid-template-rows: 85% 15%;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      menu: false,
      display: '',
      passage: '',
      repos: [],
      socials: [],
      contentOptions: []
    };

    this.handleNavigation = this.handleNavigation.bind(this);
  }

  handleNavigation(e) {
    this.setState({content: e.target.textContent});
  }

  componentDidMount() {
    this.props.fetchResources()
      .then((resources) => {
        this.setState({
          content: 'home',
          menu: false,
          display: 'Marlon A. Esparza',
          passage: resources.passage,
          repos: resources.repos,
          socials: resources.socials,
          contentOptions: ['home', 'about', 'projects', 'connect']
        });
      });
  }

  render() {
    const {
      content,
      display,
      passage,
      repos,
      socials,
      contentOptions
    } = this.state;

    const {
      deviceAdjustment
    } = this.props;

    return (
      <AppContainer id='application-container'>
        <Content content={content} display={display} passage={passage} repos={repos} socials={socials} deviceAdjustment={deviceAdjustment} />
        <Navigation contentOptions={contentOptions} deviceAdjustment={deviceAdjustment} handleNavigation={this.handleNavigation} />
        <NavToggle deviceAdjustment={deviceAdjustment} />
        <NavMenu deviceAdjustment={deviceAdjustment} />
      </AppContainer>
    );
  }
};

export default App;
