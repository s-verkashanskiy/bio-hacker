import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Program from './components/Stepper/Program';
import SessionRoute from './components/auth/SessionRoute';
import Thankyou from './components/program/Thankyou';
import Statistics from './components/Statistics';
import Landing from './pages/landing';
import Stepper from './pages/stepper';
import User from './pages/user';
import ChannelSelection from './components/ChannelSelection';
import ClientChart from './components/ClientChart';
import Chat from './components/Chat';

export default function App() {
  // useSessionChecker();

  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <SessionRoute path="/logout">
            <Logout />
          </SessionRoute>
          <SessionRoute path="/program">
            <Program />
          </SessionRoute>
          <SessionRoute path="/thankYou">
            <Thankyou />
          </SessionRoute>
          <SessionRoute path="/stepper">
            <Stepper />
          </SessionRoute>
          <SessionRoute path="/user">
            <User />
          </SessionRoute>
          <SessionRoute path="/channel">
            <ChannelSelection />
          </SessionRoute>
          <SessionRoute path="/schedule">
            <Statistics />
          </SessionRoute>
          <SessionRoute path="/chart">
            <ClientChart />
          </SessionRoute>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
        <Chat/>
      </Router>
    </>
  );
}
