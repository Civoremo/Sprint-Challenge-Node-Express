import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import ProjectsList from './components/projectsList';

// styled components
const MainBody = styled.div`
  text-align: center;
  font-weight: bold;
  /* border: 1px solid red; */
`;

const NavContainer = styled.div`
  background-color: #222222;
  color: #ffffff;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavBar = styled.nav`
  width: 800px;
  max-width: 800px;
  min-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavIcons = styled.div`

  :hover {
    cursor: pointer;
  }
`;

const NavLogo = styled.div`
  font-size: 2rem;

  :hover {
    cursor: pointer;
  }
`;

const ComponentContainer = styled.div`
  width: 750px;
  min-width: 750px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 30px;
  /* border: 1px solid blue; */
`;


// Application
class App extends Component {
  render() {
    return (
      <MainBody>

        {/* navigation bar */}
        <NavContainer>
          <NavBar>
            <NavLogo>
              <i className="fas fa-bars"></i>
            </NavLogo>
            <NavIcons>
              Projects App
            </NavIcons>
            <NavIcons>
            </NavIcons>
          </NavBar>
        </NavContainer>

        {/* components */}
        <ComponentContainer>
          <ProjectsList />
        </ComponentContainer>
        
      </MainBody>
    );
  }
}

export default App;
