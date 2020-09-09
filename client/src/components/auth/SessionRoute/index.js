import React, {useEffect, useState} from 'react';
import {Route, Redirect, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
// import useSessionChecker from '../../hooks/auth-hook';
import { getUser } from '../../../redux/actions/action-creators';


export default function SessionRoute({children, ...rest}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [checked, setChecked] = useState(false);
  // const [isA, setIsA] = useState(undefined);
console.log('<.....sesssroute', children);
  useEffect(() => {
    (async () => {
      // Проверяем наличие на сервере сессии для данного пользователя
      // !!! наличие сессии не гарантирует статус авторизированного пользователя
      // для авторизации необходимо получать с сервера доп. инф-ю о правах пользователя
      const response = await fetch('/api/checkSession');

      if (response.status === 200) {
        const json = await response.json();
        console.log('>>200', isAuthenticated);
        // setIsA(true);
        dispatch(getUser(json.username, json.flag, json.id));
        // if (!isAuthenticated) {
        //   history.push('/stepper');
        // }
      } else {
        // setIsA(false)
        dispatch({ type: 'LOGOUT' });
      }
      setChecked(true);
    })();
    // useSessionChecker();
  })

  console.log('>>iinn', isAuthenticated);

  return (
    <Route {...rest}>
      {isAuthenticated ? children : (checked ? <Redirect to="/login" /> : '')}
    </Route>
  );
}
