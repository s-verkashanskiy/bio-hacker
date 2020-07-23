import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { getUser } from '../../../redux/actions/action-creators';
import { stepZero } from '../../../redux/actions/stepper';

export default function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputs, setInputs] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  async function signup(event) {
    event.preventDefault();

    const response = await fetch('api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });

    if (response.status === 200) {
      const json = await response.json();
      dispatch(getUser(json.username, json.flag, json.id));
      dispatch(stepZero());
      return history.push('/stepper');
    }
    const json = await response.json();
    return setError(json.message);
  }

  function changed({ target: { value, name } }) {
    // const obj = Object.assign({}, inputs);
    // obj[name] = value;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  return (
    <div className="container mt-4">
      {error && <div className="error">{error}</div>}
      <Form onSubmit={signup}>
        <Form.Group controlId="formBasicLogin">
          <Form.Label>Полное имя</Form.Label>
          <Form.Control
            type="text"
            name="fullname"
            required
            value={inputs.fullname}
            onChange={changed}
            placeholder="Сергей Иванов"
          />
        </Form.Group>
        <Form.Group controlId="formBasicLogin">
          <Form.Label>Логин</Form.Label>
          <Form.Control
            type="text"
            name="username"
            required
            value={inputs.username}
            onChange={changed}
            placeholder="Ivanov"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Адрес электронный почты</Form.Label>
          <Form.Control
            type="text"
            name="email"
            required
            value={inputs.email}
            onChange={changed}
            placeholder="email@example.com"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            value={inputs.password}
            onChange={changed}
            placeholder="Придумайте надежный пароль"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Сохранить логин" />
        </Form.Group>
        <Button variant="success" type="submit">
          Зарегистрироваться
        </Button>
      </Form>
    </div>
  );
}
