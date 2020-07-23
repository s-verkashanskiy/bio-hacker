import React, {useEffect, useState} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { getUser } from '../../../redux/actions/action-creators';


export default function SessionRoute({children, ...rest}) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    (async () => {
      // Проверяем наличие на сервере сессии для данного пользователя
      // !!! наличие сессии не гарантирует статус авторизированного пользователя
      // для авторизации необходимо получать с сервера доп. инф-ю о правах пользователя
      const response = await fetch('/api/checkSession');

      if (response.status === 200) {
        const json = await response.json();
        dispatch(getUser(json.username, json.flag, json.id));
      } else {
        dispatch({ type: 'LOGOUT' });
      }
      setChecked(true);
    })();
  })

  return (
    <Route {...rest}>
      {isAuthenticated ? children : (checked ? <Redirect to="/login" /> : '')}
    </Route>
  );
}
