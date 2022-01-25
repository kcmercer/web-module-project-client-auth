import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Login from './components/login';
import FriendsList from './components/friendsList';
import PrivateRoute from './components/privateRoute';

const StyledDiv = styled.div`
  display: flex;
  border-bottom: 6px solid black;
  height: auto;
  width: 100%;
`

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  height: 6em;
  width: 100%;
`

const StyledLi = styled.li`
  font-size: 1.5rem;
  margin: 0.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 10rem;
  color: white;
  background-color: black;
`

const StyledH1 = styled.h1`
  margin-top: 0%;
  margin-bottom: 0%;
  font-size: 3rem;
`

function App() {
  const isLoggedIn = true;

  return (
    <Router>
      <div className="App">
        <StyledDiv>
          <StyledH1>FRIENDS DATABASE</StyledH1>

          <StyledUl>
            <StyledLi>
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">LOGIN.</Link>
            </StyledLi>

            <StyledLi>
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/logout">LOGOUT.</Link>
            </StyledLi>

            <StyledLi>
              {isLoggedIn && <Link style={{ textDecoration: 'none', color: 'white' }} to="/friendlist">FRIENDLIST.</Link>}
            </StyledLi>

            <StyledLi>
              {isLoggedIn && <Link style={{ textDecoration: 'none', color: 'white' }} to="/addfriend">ADDFRIEND.</Link>}
            </StyledLi>
          </StyledUl>
        </StyledDiv>

        <br></br>

        <div>
          <Switch>
            <PrivateRoute exact path="/FriendsList" component={FriendsList} />
            
            <Route path="/login" component={Login} />
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
