import { useDispatch } from 'react-redux';
import { getUser } from '../../redux/actions/action-creators';


export default async () => {
  const dispatch = useDispatch();
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
}
