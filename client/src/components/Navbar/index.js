import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

export default function Nav() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const username = useSelector((state) => state.auth.username);
  console.log(isAuthenticated, username);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <Link className="navbar-brand mb-0 h1" to="/">
        <img
          className="mr-2"
          src="/img/carrot.png"
          width="30"
          height="30"
          alt="carrot"
          loading="lazy"
        ></img>
        Biohacker
      </Link>

      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
          {isAuthenticated && (
            <>
              <NavLink className="btn btn-success my-2 my-sm-0" to="/user">
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  className="bi bi-person-circle"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-2"
                >
                  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                  <path
                    fill-rule="evenodd"
                    d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                  />
                </svg>
                {/* <span className="navbar-text mx-2">{username}</span> */}
                {username}
              </NavLink>
              
              <NavLink className="btn btn-success my-2 my-sm-0" to="/logout">
                Выйти
              </NavLink>
            </>
          )}
          {!isAuthenticated && (
            <>
              <NavLink className="btn btn-success my-2 my-sm-0" to="/signup">
                Регистрация
              </NavLink>
              <NavLink className="btn btn-success my-2 my-sm-0" to="/login">
                Войти
              </NavLink>
            </>
          )}
      </div>
    </nav>
  );
}
