import React from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from 'react-redux';

export default function Nav() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const username = useSelector(state => state.auth.username);
  console.log(isAuthenticated, username);
  return (
    <Navbar fixed="top" >
      <Navbar.Brand href="#home">Реакт-NodeJS</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-start">
        <Navbar.Text><a href="/signup">Зарегистрироваться</a></Navbar.Text>
        &nbsp;
        {!isAuthenticated && <Navbar.Text><a href="/login">Войти</a></Navbar.Text>}
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">

        {isAuthenticated && <Navbar.Text>Вы вошли как: {username}</Navbar.Text>}
        &nbsp;
        {isAuthenticated && <Navbar.Text><a href="/logout">Выйти</a></Navbar.Text>}
      </Navbar.Collapse>
    </Navbar>
  );
}
