import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

export default function Logout() {
  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() => {
    (async () => {
      await fetch('/api/logout');
      dispatch({ type: 'LOGOUT' });
      history.push('/login');
    })();
  }, [dispatch, history]);
  
  return <>Идет логаут...</>
}

