import React from 'react';
import { Link } from 'react-router-dom';

function ActionForm() {
  return (
    <>
      <h2 className="text-center text-success">Регистрация</h2>
      <div className="jumbotron jumbotron-fluid ">
        <div className="container ">
          <h1 className="display-4 text-center">
            Не откладывай на потом свое здоровье.
          </h1>
          <h3 className="lead text-center mt-4">
            Начни действовать сейчас! Нужен всего один шаг.
          </h3>
          <div className="mx-auto mt-5" style={{ width: '200px' }}>
            <Link className="btn btn-success" to="/signup" role="button">
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActionForm;
