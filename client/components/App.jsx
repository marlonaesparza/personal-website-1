import React from 'react';
import styled from 'styled-components';

import Content from './Content';
import Navigation from './Navigation';

const AppContainer = styled.div`
  margin: 0px;
  padding: 0px;
  max-height: 100vh;
  display: grid;
  grid-template-columns: 7fr 3fr;
  place-content: center;
`;

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      content: '',
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

    return (
      <AppContainer id='application-container'>
        <Content content={content} display={display} passage={passage} repos={repos} socials={socials} />
        <Navigation contentOptions={contentOptions} handleNavigation={this.handleNavigation} />
      </AppContainer>
    );
  }
};

export default App;
