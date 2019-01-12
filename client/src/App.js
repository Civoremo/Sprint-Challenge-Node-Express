import React, { Component } from 'react';
import styled, { css } from 'styled-components';

// styled components
const MainBody = styled.div`
  text-align: center;
  font-weight: bold;
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



// Application
class App extends Component {
  render() {
    return (
      <MainBody>
        <NavContainer>
          <NavBar>
            <NavLogo>
              <i class="fas fa-bars"></i>
            </NavLogo>
            <NavIcons>
              Projects App
            </NavIcons>
            <NavIcons>
            </NavIcons>
          </NavBar>
        </NavContainer>
        under construction
      </MainBody>
    );
  }
}

export default App;
